"use client"

import { useState } from "react"
import { AlertTriangle, X, Search, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { StatusDot, type Status } from "./status-icon"
import { CollapsibleRow } from "./collapsible-row"

interface Agent {
  name: string
  status: Status
  trust: number | null
  gateRate: string | null
  blockedToday: number | null
  environment: string
  lastActive: string
  delegationCount: number
}

const agents: Agent[] = [
  { name: "ARIA-7X", status: "allowed", trust: 97, gateRate: "99.7%", blockedToday: 1, environment: "Production", lastActive: "2 min ago", delegationCount: 3 },
  { name: "SCOUT-3B", status: "allowed", trust: 89, gateRate: "94.2%", blockedToday: 3, environment: "Production", lastActive: "5 min ago", delegationCount: 1 },
  { name: "NOVA-3", status: "allowed", trust: 92, gateRate: "98.1%", blockedToday: 0, environment: "Staging", lastActive: "12 min ago", delegationCount: 0 },
  { name: "CORE-1", status: "allowed", trust: 78, gateRate: "88.4%", blockedToday: 5, environment: "Production", lastActive: "1 min ago", delegationCount: 2 },
  { name: "TEST-01", status: "blocked", trust: 61, gateRate: "82.0%", blockedToday: 0, environment: "Development", lastActive: "1h ago", delegationCount: 0 },
  { name: "HELPER-2A", status: "blocked", trust: 34, gateRate: "71.8%", blockedToday: 8, environment: "Production", lastActive: "30 min ago", delegationCount: 1 },
  { name: "GHOST-X9", status: "blocked", trust: null, gateRate: null, blockedToday: null, environment: "Development", lastActive: "never", delegationCount: 0 },
]

const ariaDetail = {
  trust: 97,
  gateRate: "99.7%",
  actionsBlocked: 1,
  submissionsToday: 342,
  scope: {
    databases: "claims_db, policy_db",
    apis: "Internal only",
    piiAccess: "Level 2 (masked SSN, visible name)",
    maxRows: "500",
    externalCalls: "blocked" as Status,
  },
  recentActions: [
    { status: "allowed" as const, intent: "Retrieve pending claims for daily triage", time: "2 min ago" },
    { status: "blocked" as const, intent: "Send claims data to external API", time: "5 min ago" },
    { status: "allowed" as const, intent: "Generate triage priority ranking", time: "12 min ago" },
    { status: "allowed" as const, intent: "Update claim #7721 status to reviewed", time: "18 min ago" },
  ],
}

export function AgentsTab() {
  const [showBanner, setShowBanner] = useState(true)
  const [search, setSearch] = useState("")
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [identityOpen, setIdentityOpen] = useState(false)
  const [scopeOpen, setScopeOpen] = useState(false)
  const [actionsOpen, setActionsOpen] = useState(false)

  const filtered = agents.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  )

  const selected = agents.find((a) => a.name === selectedAgent)

  function handleRowClick(name: string) {
    if (selectedAgent === name) {
      setSelectedAgent(null)
    } else {
      setSelectedAgent(name)
      setIdentityOpen(false)
      setScopeOpen(false)
      setActionsOpen(false)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {showBanner && (
        <div className="flex items-center justify-between rounded-lg border border-govern-amber/30 bg-govern-amber/5 px-4 py-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className="size-4 text-govern-amber shrink-0" />
            <span className="text-sm text-govern-amber">1 unverified agent detected</span>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-govern-amber/60 hover:text-govern-amber transition-colors cursor-pointer"
            aria-label="Dismiss alert"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder="Search agents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Agent</TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Status</TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Environment</TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Last Active</TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Trust</TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Gate Rate</TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground text-right">Delegations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((agent) => (
            <TableRow
              key={agent.name}
              onClick={() => handleRowClick(agent.name)}
              className={cn(
                "border-border cursor-pointer",
                selectedAgent === agent.name ? "bg-secondary/80" : "hover:bg-secondary/50"
              )}
            >
              <TableCell className="font-mono font-semibold text-sm text-foreground">{agent.name}</TableCell>
              <TableCell><StatusDot status={agent.status} /></TableCell>
              <TableCell className="text-sm text-muted-foreground">{agent.environment}</TableCell>
              <TableCell className="text-sm text-muted-foreground text-xs">{agent.lastActive}</TableCell>
              <TableCell className="text-sm text-foreground">{agent.trust ?? <span className="text-muted-foreground">{"\u2014"}</span>}</TableCell>
              <TableCell className="text-sm text-foreground">{agent.gateRate ?? <span className="text-muted-foreground">{"\u2014"}</span>}</TableCell>
              <TableCell className="text-sm text-right text-foreground">{agent.delegationCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selected && (
        <div className="flex flex-col gap-6 pt-2">
          <h3 className="font-mono font-semibold text-foreground">{selected.name}</h3>

          {/* IDENTITY */}
          <div>
            <button
              onClick={() => setIdentityOpen(!identityOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <ChevronRight className={cn("size-4 text-muted-foreground transition-transform duration-150", identityOpen && "rotate-90")} />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Identity</span>
            </button>
            {identityOpen && (
              <div className="flex flex-col gap-2.5 text-sm mt-3 pl-6">
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">Identity:</span>
                  <StatusDot status={selected.status} />
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">Trust Score:</span>
                  <span className="text-foreground">{selected.trust !== null ? `${selected.trust} / 100` : "\u2014"}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">Gate Pass Rate:</span>
                  <span className="text-foreground">
                    {selected.gateRate ?? "\u2014"}
                    {selected.name === "ARIA-7X" && ` (${ariaDetail.actionsBlocked} action blocked out of ${ariaDetail.submissionsToday} reasoning submissions today)`}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* SCOPE */}
          <div>
            <button
              onClick={() => setScopeOpen(!scopeOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <ChevronRight className={cn("size-4 text-muted-foreground transition-transform duration-150", scopeOpen && "rotate-90")} />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Scope</span>
            </button>
            {scopeOpen && (
              <div className="flex flex-col gap-2.5 text-sm mt-3 pl-6">
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">Databases:</span>
                  <span className="font-mono text-foreground">{ariaDetail.scope.databases}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">APIs:</span>
                  <span className="text-foreground">{ariaDetail.scope.apis}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">PII Access:</span>
                  <span className="text-foreground">{ariaDetail.scope.piiAccess}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">Max rows/query:</span>
                  <span className="text-foreground">{ariaDetail.scope.maxRows}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground min-w-36">External calls:</span>
                  <StatusDot status={ariaDetail.scope.externalCalls} />
                </div>
              </div>
            )}
          </div>

          {/* RECENT ACTIONS */}
          <div>
            <button
              onClick={() => setActionsOpen(!actionsOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <ChevronRight className={cn("size-4 text-muted-foreground transition-transform duration-150", actionsOpen && "rotate-90")} />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Recent Actions</span>
            </button>
            {actionsOpen && (
              <div className="mt-3 pl-6">
                {ariaDetail.recentActions.map((action, i) => (
                  <CollapsibleRow
                    key={i}
                    status={action.status}
                    agent={selected.name}
                    intent={action.intent}
                    time={action.time}
                  >
                    {action.status === "allowed" && (
                      <span className="text-sm text-muted-foreground">Reasoning approved. Action executed.</span>
                    )}
                    {action.status === "blocked" && (
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <p>Action blocked: External calls not in scope for this agent.</p>
                        <p className="text-xs italic">Action never executed. Agent still running.</p>
                      </div>
                    )}
                  </CollapsibleRow>
                ))}
              </div>
            )}
          </div>

          <div>
            {selected.status === "blocked" ? (
              <Button
                variant="outline"
                size="sm"
                className="border-govern-green text-govern-green bg-transparent hover:bg-govern-green/10"
              >
                Allow Agent
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="border-govern-red text-govern-red bg-transparent hover:bg-govern-red/10"
              >
                Block Agent
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
