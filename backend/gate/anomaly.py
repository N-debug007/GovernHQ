def detect_anomaly(metadata: dict) -> dict:
    metadata = metadata or {}
    anomalies = []

    # 1. RATE CHECK 
    # Detect unusually high request frequency
    if metadata.get("request_count", 0) > 100:
        anomalies.append("RATE_ANOMALY")
        
    # 2. SCOPE DRIFT SIGNAL
    # Agent accessing unfamiliar or undefined resource
    if metadata.get("resource") == "unknown":
        anomalies.append("SCOPE_ANOMALY")
        
    # 3. SAFETY SIGNAL
    # Suspicious or potentially harmful action intent
    if metadata.get("action_type") in ["delete", "override", "external_call"]:
        anomalies.append("SAFETY_ANOMALY")

    # 4. PII RISK SIGNAL
    # Sensitive data fields involved
    if metadata.get("contains_pii") is True:
        anomalies.append("PII_ANOMALY")

    # 5. REASONING CONSISTENCY
    # Missing expected metadata 
    if not metadata:
        anomalies.append("MISSING_CONTEXT")

    return {
        "is_anomaly": len(anomalies) > 0,
        "reasons": anomalies
    }
