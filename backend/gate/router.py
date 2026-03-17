from fastapi import APIRouter, Depends

from core.auth import auth_context
from .logging import log_gate_execution
from .schemas import GateEvaluateRequest
from .service import evaluate_intent

router = APIRouter(prefix="/gate", tags=["gate"])


@router.post("/evaluate")
async def evaluate_gate(
    payload: GateEvaluateRequest,
    ctx: dict = Depends(auth_context),
):
    org_id = ctx["organization_id"]

    result = evaluate_intent(payload, org_id=org_id)

    log_row = log_gate_execution(
        agent_id=payload.agent_id,
        intent=payload.intent,
        decision=result.decision,
        metadata=payload.metadata,
        org_id=org_id,
    )

    return {
        "data": {
            **result.model_dump(),
            "organization_id": org_id,
            "user_id": ctx["user_id"],
            "log_id": log_row["id"] if log_row else None,
        },
        "error": None,
        "status": 200,
    }
