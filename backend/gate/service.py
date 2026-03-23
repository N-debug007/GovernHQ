from .schemas import GateEvaluateRequest, GateEvaluateResponse
from .risk import compute_risk_score, map_decision


# Policy Keywords (Simplified Policy Engine)
# These simulate policy rules used to evaluate reasoning.

BLOCK_KEYWORDS = {
    "transfer funds",
    "wire money",
    "delete database",
    "drop table",
    "exfiltrate data",
}

PAUSE_KEYWORDS = {
    "export data",
    "send email",
    "modify policy",
    "change permissions",
}

# Gate Evaluation Service
# Evaluate a single reasoning event BEFORE it becomes an action.
#
# - Evaluates reasoning (not action)
# - Stateless, per-request evaluation
# - Outputs: allow / pause / block
#
# PIPELINE:
# intent → policy signals → risk scoring → decision

def evaluate_intent(
    payload: GateEvaluateRequest,
    risk_profile: str | None = None,
) -> GateEvaluateResponse:

    # 1. Normalize input
    # Standardize input for consistent evaluation

    intent_lower = payload.intent.strip().lower()
    metadata = payload.metadata or {}
-
    # 2. Policy Matching (Signal extraction ONLY)
    # - We DO NOT return here
    # - These are signals fed into risk scoring

    matched_block = [kw for kw in BLOCK_KEYWORDS if kw in intent_lower]
    matched_pause = [kw for kw in PAUSE_KEYWORDS if kw in intent_lower]

    # 3. Risk Scoring (Core Logic)
    # Combines:
    # - agent risk profile
    # - policy matches
    # - anomaly signals (metadata)

    risk_score, policy_matches, breakdown = compute_risk_score(
        intent=payload.intent,
        risk_profile=risk_profile or "low",
        metadata=metadata,
        matched_block=matched_block,
        matched_flag=matched_pause,  
    )

    # 4. Decision Mapping
    # Converts risk score → allow / pause / block

    decision = map_decision(risk_score)

    # 5. Human-readable explanation
    # Provides context for UI, logs, and audit

    if policy_matches:
        reason = f"Matched signals: {', '.join(policy_matches)}"
    else:
        reason = "Reasoning passed all checks"

    # 6. Final Response
    # This is what the SDK / frontend receives

    return GateEvaluateResponse(
        decision=decision,
        risk_score=round(risk_score, 2),
        reason=reason,
        policy_matches=policy_matches,
        breakdown=breakdown,
    )
