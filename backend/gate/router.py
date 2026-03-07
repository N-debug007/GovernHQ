from fastapi import APIRouter, Depends

from core.auth import auth_context
from .schemas import GateEvaluateRequest
from .service import evaluate_intent

router = APIRouter(prefix="/gate", tags=["gate"])


@router.post("/evaluate")
async def evaluate_gate(
    payload: GateEvaluateRequest,
    ctx: dict = Depends(auth_context),
):
    result = evaluate_intent(payload)

    return {
        "data": {
            **result.model_dump(),
            "organization_id": ctx["organization_id"],
            "user_id": ctx["user_id"],
            "role": ctx["role"],
        },
        "error": None,
        "status": 200,
    }
