from typing import Any, Literal

from pydantic import BaseModel, Field


DecisionLiteral = Literal["allow", "pause", "block"]


class GateEvaluateRequest(BaseModel):
    agent_id: str
    intent: str = Field(..., min_length=1)
    metadata: dict[str, Any] = Field(default_factory=dict)


class GateEvaluateResponse(BaseModel):
    decision: DecisionLiteral
    risk_score: float
    reason: str
    policy_matches: list[str] = Field(default_factory=list)
