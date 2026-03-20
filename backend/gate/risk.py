def compute_risk_score(intent: str, metadata: dict) -> int:
    intent = intent.lower()

    if "delete" in intent:
        return 90
    if "transfer" in intent:
        return 80
    if "update" in intent:
        return 60
    if "read" in intent:
        return 20

    return 50


def apply_risk_rules(score: int) -> str:
    if score >= 80:
        return "block"
    elif score >= 50:
        return "review"
    return "allow"
