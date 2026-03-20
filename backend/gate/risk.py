from typing import Tuple, List, Dict


# 1. Risk Model Definition
RISK_WEIGHTS = {
    "agent": {
        "low": 0.1,
        "medium": 0.3,
        "high": 0.6,
    },
    "intent": {
        "block": 0.5,
        "flag": 0.25,
        "safe": 0.0,
    },
    "anomaly": 0.4,
}

# 2. Risk Scoring Function
def compute_risk_score(
    intent: str,
    risk_profile: str,
    metadata: dict,
    matched_block: List[str],
    matched_flag: List[str],
) -> Tuple[float, List[str]]:
    """
    Computes a risk score from:
    - agent risk profile
    - intent classification
    - behavioral anomalies
    """

    risk_score = 0.0
    policy_matches = []

    # Agent Risk
    agent_risk = RISK_WEIGHTS["agent"].get(risk_profile, 0.1)
    risk_score += agent_risk

    if risk_profile == "high":
        policy_matches.append("high_risk_agent")
    elif risk_profile == "medium":
        policy_matches.append("medium_risk_agent")

    # Intent Risk
    intent_risk = 0.0

    if matched_block:
        intent_risk = RISK_WEIGHTS["intent"]["block"]
        policy_matches.extend(matched_block)

    elif matched_flag:
        intent_risk = RISK_WEIGHTS["intent"]["flag"]
        policy_matches.extend(matched_flag)

    risk_score += intent_risk

    # Anomaly Detection
    anomaly_risk = 0.0
    request_count = metadata.get("request_count", 0)

    if request_count > 100:
        anomaly_risk = RISK_WEIGHTS["anomaly"]
        policy_matches.append("anomaly_detected")

    risk_score += anomaly_risk
    
    # Clamp Final Score
    risk_score = min(risk_score, 1.0)

    return risk_score, policy_matches

# 3. Decision Mapping
def map_decision(risk_score: float) -> str:
    """
    Maps risk score to decision
    """

    if risk_score >= 0.8:
        return "block"
    elif risk_score >= 0.5:
        return "flag"
    return "allow"
