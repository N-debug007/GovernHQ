"""
Webhook entrypoints for orchestrator agents (n8n, Zapier).
External workflows send events here.
We forward them into the ingestion pipeline so everything gets logged consistently.
"""

def n8n_webhook(payload: dict):
    # Receives events from n8n workflows
    # Later: call ingest_event(source="n8n", payload=payload)
    pass

def zapier_webhook(payload: dict):
    # Receives events from Zapier workflows
    # Later: call ingest_event(source="zapier", payload=payload)
    pass

