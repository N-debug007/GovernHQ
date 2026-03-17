-- Create ledger_events table
-- Stores every Gate decision: one row per evaluate_intent() call.
-- Columns inferred from gate/logging.py log_gate_execution() inserts:
--   agent_id, action, status, metadata
-- organization_id added as required constraint for RLS scoping.

create table ledger_events (
  id              uuid        primary key default gen_random_uuid(),
  organization_id uuid        not null references organizations(id),
  agent_id        uuid        not null references agents(id),
  action          text        not null,
  status          text        not null check (status in ('allow', 'pause', 'block')),
  metadata        jsonb       not null default '{}',
  created_at      timestamptz not null default now()
);

-- Enable RLS
alter table ledger_events enable row level security;

-- SELECT: dashboard users can only read events in their organization
create policy "ledger_events_select_own_org"
  on ledger_events for select
  using (
    organization_id in (
      select id from organizations where owner_id = auth.uid()
    )
  );

-- INSERT: agents (writing via service key, which bypasses RLS) log decisions
-- This policy also allows direct inserts from org-scoped clients if needed.
create policy "ledger_events_insert_own_org"
  on ledger_events for insert
  with check (
    organization_id in (
      select id from organizations where owner_id = auth.uid()
    )
  );
