"""
Webhook endpoints for orchestrator-based agents like n8n and Zapier.
These are entry points where external workflows can send activity events.
We’ll pass those events into the ingestion pipeline so everything gets logged the same way.
"""

def n8n_webhook(payload: dict):
    # Event coming from an n8n workflow
    # Later this will be forwarded to the ingest service
    pass

def zapier_webhook(payload: dict):
    # Event coming from a Zapier workflow
    # Same handling as n8n
    pass
