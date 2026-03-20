from .schemas import GateEvaluateRequest, GateEvaluateResponse
from .risk import compute_risk_score, apply_risk_rules
from .anomaly import detect_anomaly


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


def evaluate_intent(
    payload: GateEvaluateRequest,
    risk_profile: str | None = None,
) -> GateEvaluateResponse:
    intent = payload.intent.strip()
    intent_lower = intent.lower()
    metadata = payload.metadata or {}

    # ------------------------------------------------------------------
    # 1. Hard block rules (highest priority)
    # ------------------------------------------------------------------
    matched_block = [kw for kw in BLOCK_KEYWORDS if kw in intent_lower]
    if matched_block:
        return GateEvaluateResponse(
            decision="block",
            risk_score=0.95,
            reason="Intent matched blocked keywords.",
            policy_matches=matched_block,
        )

    # ------------------------------------------------------------------
    # 2. Compute base risk score
    # ------------------------------------------------------------------
    risk_score_raw = compute_risk_score(intent, metadata)  # 0–100
    risk_score = risk_score_raw / 100  # normalize to 0–1

    decision = apply_risk_rules(risk_score_raw)

    policy_matches = []

    # ------------------------------------------------------------------
    # 3. Keyword-based flags (secondary layer)
    # ------------------------------------------------------------------
    matched_flag = [kw for kw in FLAG_KEYWORDS if kw in intent_lower]
    if matched_flag and decision != "block":
        decision = "flag"
        policy_matches.extend(matched_flag)

    # ------------------------------------------------------------------
    # 4. Risk profile adjustment
    # ------------------------------------------------------------------
    if risk_profile == "high" and decision == "allow":
        decision = "flag"
        policy_matches.append("high_risk_agent_review")

    # ------------------------------------------------------------------
    # 5. Anomaly override (strong signal)
    # ------------------------------------------------------------------
    if detect_anomaly(metadata):
        decision = "block"
        policy_matches.append("anomaly_detected")

    # ------------------------------------------------------------------
    # 6. Final response
    # ------------------------------------------------------------------
    return GateEvaluateResponse(
        decision=decision,
        risk_score=round(risk_score, 2),
        reason="Decision computed via risk + policy + anomaly rules.",
        policy_matches=policy_matches,
    )
