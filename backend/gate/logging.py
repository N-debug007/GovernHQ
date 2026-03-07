from typing import Any

from core.auth import get_db


def log_gate_execution(
    *,
    agent_id: str,
    intent: str,
    decision: str,
    metadata: dict[str, Any],
) -> dict | None:
    db = get_db()

    payload = {
        "agent_id": agent_id,
        "action": intent,
        "status": decision,
        "metadata": metadata,
    }

    response = db.table("ledger_events").insert(payload).execute()
    rows = response.data or []

    return rows[0] if rows else None
