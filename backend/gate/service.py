from .schemas import GateEvaluateRequest, GateEvaluateResponse
from .risk import compute_risk_score, map_decision


BLOCK_KEYWORDS = {
    "transfer funds",
    "wire money",
    "delete database",
    "drop table",
    "exfiltrate data",
}

FLAG_KEYWORDS = {
    "export data",
    "send email",
    "modify policy",
    "change permissions",
}


def evaluate_intent(payload, risk_profile=None):
    intent_lower = payload.intent.strip().lower()

    matched_block = [kw for kw in BLOCK_KEYWORDS if kw in intent_lower]
    matched_flag = [kw for kw in FLAG_KEYWORDS if kw in intent_lower]

    risk_score, policy_matches, breakdown = compute_risk_score(
        intent=payload.intent,
        risk_profile=risk_profile or "low",
        metadata=payload.metadata,
        matched_block=matched_block,
        matched_flag=matched_flag,
    )

    decision = map_decision(risk_score)

    return GateEvaluateResponse(
        decision=decision,
        risk_score=round(risk_score, 2),
        reason="Decision computed via risk + policy + anomaly rules.",
        policy_matches=policy_matches,
        breakdown=breakdown, 
    )
