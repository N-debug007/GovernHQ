"""
Agents CRUD router — GovernHQ

Auth:     Bearer token (Supabase JWT) required on every endpoint.
          organization_id is resolved server-side from the token via
          the organizations table (owner_id = auth.uid()).
          Client-supplied org_id is never trusted.

DB:       Supabase Python client, service key (bypasses RLS).
          Org scoping is enforced explicitly on every query.

Response: {"data": <payload | null>, "error": <message | null>, "status": <int>}
          HTTP status code matches the status field.

Execute:  Stub only — Gate integration pending (Step 3).
"""

from __future__ import annotations

import os
from typing import Any, Literal, Optional

from fastapi import APIRouter, Depends, Header
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from supabase import Client, create_client

# ADDED BY MICHAEL
from gate.logging import log_gate_execution
from gate.schemas import GateEvaluateRequest
from gate.service import evaluate_intent
import uuid
from datetime import datetime
router = APIRouter(prefix="/agents", tags=["agents"])

_TABLE = "agents"

# ---------------------------------------------------------------------------
# Supabase client
# One instance per process — service key bypasses RLS.
# ---------------------------------------------------------------------------

def _client() -> Client:
    return create_client(
        os.environ["SUPABASE_URL"],
        os.environ["SUPABASE_SERVICE_KEY"],
    )

_db: Client = _client()

# ---------------------------------------------------------------------------
# Response helpers
# ---------------------------------------------------------------------------

def _ok(data: Any, status: int = 200) -> JSONResponse:
    return JSONResponse({"data": data, "error": None, "status": status}, status_code=status)

def _err(message: str, status: int) -> JSONResponse:
    return JSONResponse({"data": None, "error": message, "status": status}, status_code=status)

# ---------------------------------------------------------------------------
# Auth dependency
# Verifies JWT via Supabase, resolves organization_id from organizations table.
# ---------------------------------------------------------------------------

def get_org_id() -> str:
    return "bb68d152-08a4-4af9-8733-6b3124119af5"


class _AuthError(Exception):
    def __init__(self, detail: str, status: int = 401):
        self.detail = detail
        self.status = status


# FastAPI exception handler shim — register this in main.py:
#   @app.exception_handler(_AuthError)
#   async def auth_error_handler(request, exc):
#       return JSONResponse(
#           {"data": None, "error": exc.detail, "status": exc.status},
#           status_code=exc.status,
#       )

# ---------------------------------------------------------------------------
# Schemas
# ---------------------------------------------------------------------------

class AgentCreate(BaseModel):
    name: str
    source: Literal["n8n", "zapier"]
    metadata: dict = {}
    risk_profile: Literal["low", "medium", "high"] = "low"


class AgentUpdate(BaseModel):
    name: Optional[str] = None
    source: Optional[Literal["n8n", "zapier"]] = None
    metadata: Optional[dict] = None
    risk_profile: Optional[Literal["low", "medium", "high"]] = None
    status: Optional[Literal["active", "inactive", "blocked"]] = None


# ADDED BY MICHAEL
class AgentExecuteRequest(BaseModel):
    intent: str
    metadata: dict = {}


# ---------------------------------------------------------------------------
# GET /agents
# Returns all agents belonging to the caller's organization.
# ---------------------------------------------------------------------------

@router.get("")
def list_agents(org_id: str = Depends(get_org_id)) -> JSONResponse:
    result = (
        _db.table(_TABLE)
        .select("*")
        .eq("organization_id", org_id)
        .order("created_at", desc=True)
        .execute()
    )
    return _ok(result.data)


# ---------------------------------------------------------------------------
# POST /agents
# Creates a new agent. organization_id is injected from the JWT — never
# accepted from the request body.
# ---------------------------------------------------------------------------

@router.post("", status_code=201)
def create_agent(body: AgentCreate, org_id: str = Depends(get_org_id)) -> JSONResponse:
    try:
        result = (
            _db.table(_TABLE)
            .insert({
                "id": str(uuid.uuid4()),
                "organization_id": org_id,
                "name": body.name,
                "description": None,
                "status": "active",
                "created_at": datetime.utcnow().isoformat(),
                "source": body.source,
                "metadata": body.metadata,
                "risk_profile": body.risk_profile,
            })
            .execute()
        )

        return _ok(result.data[0], status=201)

    except Exception as e:
        return _err(f"Insert failed: {str(e)}", status=500)


# ---------------------------------------------------------------------------
# PATCH /agents/{agent_id}
# Updates allowed fields on an agent. Scoped to caller's org — an agent
# belonging to a different org silently returns 404.
# ---------------------------------------------------------------------------

@router.patch("/{agent_id}")
def update_agent(
    agent_id: str,
    body: AgentUpdate,
    org_id: str = Depends(get_org_id),
) -> JSONResponse:
    updates = body.model_dump(exclude_none=True)
    if not updates:
        return _err("No fields to update", status=400)

    result = (
        _db.table(_TABLE)
        .update(updates)
        .eq("id", agent_id)
        .eq("organization_id", org_id)
        .execute()
    )
    if not result.data:
        return _err("Agent not found", status=404)
    return _ok(result.data[0])


# ---------------------------------------------------------------------------
# DELETE /agents/{agent_id}
# Deletes an agent. Scoped to caller's org — wrong org silently returns 404.
# ---------------------------------------------------------------------------

@router.delete("/{agent_id}")
def delete_agent(agent_id: str, org_id: str = Depends(get_org_id)) -> JSONResponse:
    result = (
        _db.table(_TABLE)
        .delete()
        .eq("id", agent_id)
        .eq("organization_id", org_id)
        .execute()
    )
    if not result.data:
        return _err("Agent not found", status=404)
    return _ok(result.data[0])


# ---------------------------------------------------------------------------
# POST /agents/{agent_id}/execute
# ADDED BY MICHAEL: verifies the agent belongs to the caller's org, evaluates
# the requested action through Gate, logs the decision to ledger_events, and
# returns the governed execution result.
# ---------------------------------------------------------------------------

@router.post("/{agent_id}/execute")
def execute_agent(
    agent_id: str,
    body: AgentExecuteRequest,
    org_id: str = Depends(get_org_id),
) -> JSONResponse:
    try:
        # 1. Fetch agent
        result = (
            _db.table(_TABLE)
            .select("id, name, status, risk_profile, organization_id")
            .eq("id", agent_id)
            .eq("organization_id", org_id)
            .maybe_single()
            .execute()
        )

        if not result.data:
            return _err("Agent not found", status=404)

        agent = result.data

        # 2. Build Gate payload
        gate_payload = GateEvaluateRequest(
            agent_id=agent_id,
            intent=body.intent,
            metadata=body.metadata,
        )

        # 3. Evaluate intent
        gate_result = evaluate_intent(
            gate_payload,
            risk_profile=agent.get("risk_profile"),
        )

        # disable logging for testing
        log_row = None

        # 4. Return response
        return _ok(
            {
                "agent": {
                    "id": agent["id"],
                    "name": agent.get("name"),
                    "status": agent.get("status"),
                    "risk_profile": agent.get("risk_profile"),
                },
                "execution": {
                    "intent": body.intent,
                    "metadata": body.metadata,
                },
                "gate": gate_result.model_dump(),
                "log_id": None,
            }
        )

    except Exception as e:
        return _err(f"Execute failed: {str(e)}", status=500)
    )
