from typing import Tuple, List, Dict
from .anomaly import detect_anomaly

# 1. Risk Model Definition
# This defines how different signals contribute to overall risk.

# DESIGN CHOICE:
# - All values are normalized between 0 → 1
# - This allows easy combination and comparison across signals

RISK_WEIGHTS = {
    "agent": {
        # Lower trust → higher base risk

        "low": 0.1,     # trusted agent → minimal baseline risk
        "medium": 0.3,  # moderate trust → noticeable contribution
        "high": 0.6,    # risky agent → strong influence on decision
    },

    "intent": {
        # Policy engine output mapped to risk contribution

        "block": 0.5,   # strong violation → near blocking threshold
        "pause": 0.25,  # ambiguous → requires human review
        "safe": 0.0,    # no policy issues
    },

    # Anomaly signals act as a "risk amplifier"
    # If reasoning is unusual → increase risk significantly
    "anomaly": 0.4,
}

# 2. Risk Scoring Function (Gate Layer)

# PURPOSE:
# - Aggregate all signals into a single risk score
# - Provide explanation for WHY the score was assigned

# - This function evaluates ONE reasoning event
# - It is stateless (no history)
# - It does NOT make the final system decision
# - It runs inside the Gate 


def compute_risk_score(
    intent: str,
    risk_profile: str,
    metadata: dict,
    matched_block: List[str],
    matched_flag: List[str],  # "flag" internally → maps to "pause"
) -> Tuple[float, List[str], Dict]:

    # Ensure metadata is always usable
    metadata = metadata or {}

    # Final risk score (normalized 0 → 1)
    risk_score = 0.0

    # Track all contributing signals for explainability
    policy_matches = set()

    # 1. Agent Risk (Agent Registry)
    # Represents baseline trust of the agent
    # Comes from system-level agent configuration

    agent_risk = RISK_WEIGHTS["agent"].get(risk_profile, 0.1)
    risk_score += agent_risk

    # Add explanation label
    policy_matches.add(f"agent:{risk_profile}")

    # 2. Policy / Intent Risk (Policy Engine)
    # Policy engine determines whether reasoning:
    # - violates rules (block)
    # - is ambiguous (pause)
    # - is safe

    intent_risk = 0.0

    if matched_block:
        # Strong violation → high risk contribution
        intent_risk = RISK_WEIGHTS["intent"]["block"]

        # Add all matched blocking rules for traceability
        policy_matches.update(matched_block)

    elif matched_flag:
        # Ambiguous reasoning → requires human review
        intent_risk = RISK_WEIGHTS["intent"]["pause"]

        policy_matches.update(matched_flag)

    risk_score += intent_risk

    # 3. Anomaly Signals (Gate-level)
    # Derived from metadata (per-request only)
    
    # IMPORTANT:
    # - This is NOT Monitor-level anomaly detection
    # - This is lightweight signal extraction

    # - rate (request_count)
    # - scope (resource access)
    # - safety (action type)
    # - PII (sensitive data)

    anomaly_result = detect_anomaly(metadata)

    anomaly_risk = 0.0

    if anomaly_result["is_anomaly"]:
        # Anomalies increase uncertainty → increase risk
        anomaly_risk = RISK_WEIGHTS["anomaly"]

        # Add all anomaly reasons for explainability
        policy_matches.update(anomaly_result.get("reasons", []))

    risk_score += anomaly_risk

    # 4. Clamp Risk Score
    # Ensure risk stays within valid range [0, 1]
    # Prevents overflow when multiple signals combine

    risk_score = min(risk_score, 1.0)

    # 5. Breakdown (for UI / logs / debugging)
    # Shows contribution of each component

    breakdown = {
        "agent": round(agent_risk, 2),
        "intent": round(intent_risk, 2),
        "anomaly": round(anomaly_risk, 2),
    }

    return risk_score, list(policy_matches), breakdown


# 3. Decision Mapping (Gate Output)
# PURPOSE:
# - Convert risk score → final action-level decision

# Only 3 outputs:
# - allow
# - pause
# - block


def map_decision(risk_score: float) -> str:
    # HARD THRESHOLD JUSTIFICATION
    # >= 0.8 → BLOCK
    # Rationale:
    # - Represents strong combination of signals:
    #   (e.g. high-risk agent + policy violation + anomaly)
    if risk_score >= 0.8:
        return "block"

    # >= 0.5 → PAUSE
    # Rationale:
    # - Medium risk zone
    # - Could be:
    #   - ambiguous intent
    #   - moderate anomaly
    #   - medium-risk agent
    # - Requires human decision
    elif risk_score >= 0.5:
        return "pause"

    # < 0.5 → ALLOW
    # Rationale:
    # - Low combined risk
    # - Reasoning considered safe
    return "allow"
