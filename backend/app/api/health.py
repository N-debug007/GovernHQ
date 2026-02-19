"""
Health check endpoint.
- Confirm the backend is running
- Useful for checking deployment and debugging
"""

def health():
    return {"ok": True}

