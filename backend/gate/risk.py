from typing import Tuple, List


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

    # 1. Agent Risk Profile
    if risk_profile == "high":
        risk_score += 0.6
        policy_matches.append("high_risk_agent")
    elif risk_profile == "medium":
        risk_score += 0.3
        policy_matches.append("medium_risk_agent")
    else:
        risk_score += 0.1

    # 2. Intent Risk
    if matched_block:
        risk_score += 0.5
        policy_matches.extend(matched_block)

    elif matched_flag:
        risk_score += 0.25
        policy_matches.extend(matched_flag)

    # 3. Anomaly Detection
    request_count = metadata.get("request_count", 0)

    if request_count > 100:
        risk_score += 0.4
        policy_matches.append("anomaly_detected")

    # 4. Clamp Score
    risk_score = min(risk_score, 1.0)

    return risk_score, policy_matches


def map_decision(risk_score: float) -> str:
    """
    Maps risk score to decision
    """

    if risk_score >= 0.8:
        return "block"
    elif risk_score >= 0.5:
        return "flag"
    return "allow"
