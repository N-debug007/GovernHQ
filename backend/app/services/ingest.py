"""
Main ingestion flow.

Takes an incoming event and runs it:
normalize -> policy check -> ledger log

This keeps all agent activity handled in one place.
"""
