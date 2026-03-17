from core.auth import get_db
from .schemas import GateEvaluateRequest, GateEvaluateResponse

# Columns assumed on the policies table (no migration exists in this repo to verify):
#   organization_id  uuid   — org scoping, assumed by analogy with the agents table
#   status           text   — only 'active' policies are evaluated; assumes 'active'/'draft'/'archived'
#   name             text   — returned in policy_matches so callers know which policies fired
#   action           text   — 'block', 'review', or 'log' per README description
#   condition        text   — case-insensitive substring matched against the incoming intent;
#                             semantics inferred from sprint backlog spec ("condition field")
#
# Matching logic: a policy fires when its condition is a non-empty substring of the intent.
# Priority: block > review > log/none (all → allow).


def evaluate_intent(
    payload: GateEvaluateRequest,
    org_id: str | None = None,
    risk_profile: str | None = None,
) -> GateEvaluateResponse:
    """
    Evaluate an agent's intent against active org policies from Supabase.

    Decision mapping:
      block  policy matches → "block"
      review policy matches → "pause"
      log-only or no match → "allow"
    """
    intent_lower = payload.intent.strip().lower()

    if org_id:
        db = get_db()
        resp = (
            db.table("policies")
            .select("name, action, condition")
            .eq("organization_id", org_id)
            .eq("status", "active")
            .execute()
        )
        policies = resp.data or []

        def _matches(policy: dict) -> bool:
            condition = (policy.get("condition") or "").strip().lower()
            return bool(condition) and condition in intent_lower

        blocked = [p["name"] for p in policies if p.get("action") == "block" and _matches(p)]
        if blocked:
            return GateEvaluateResponse(
                decision="block",
                risk_score=0.95,
                reason="Intent matched a blocking policy.",
                policy_matches=blocked,
            )

        paused = [p["name"] for p in policies if p.get("action") == "review" and _matches(p)]
        if paused:
            return GateEvaluateResponse(
                decision="pause",
                risk_score=0.70,
                reason="Intent matched a review-required policy.",
                policy_matches=paused,
            )

        logged = [p["name"] for p in policies if p.get("action") == "log" and _matches(p)]
        if logged:
            return GateEvaluateResponse(
                decision="allow",
                risk_score=0.20,
                reason="Intent logged by policy.",
                policy_matches=logged,
            )

    return GateEvaluateResponse(
        decision="allow",
        risk_score=0.20,
        reason="No blocking policy matched.",
        policy_matches=[],
    )
