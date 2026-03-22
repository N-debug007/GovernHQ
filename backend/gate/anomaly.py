def detect_anomaly(metadata: dict) -> bool:
    metadata = metadata or {}

    if metadata.get("request_count", 0) > 100:
        return True

    if metadata.get("location") == "unknown":
        return True

    return False
