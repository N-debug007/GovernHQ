"use client"

import { useState, useEffect, useCallback } from "react"
import { Plus, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"
import { PolicyModal, type PolicyModalData, type PolicyAction } from "./policy-modal"

// Matches the real Supabase policies table schema.
// rule jsonb shape: {"action": "block"|"review"|"log", "condition": "<string>"}
interface Policy {
  id: string
  organization_id: string
  name: string
  description: string | null
  rule: { action?: PolicyAction; condition?: string }
  is_enabled: boolean
  created_at: string
}

// Extract action/condition from rule with safe fallbacks for rule = {}
function ruleAction(policy: Policy): PolicyAction {
  return policy.rule?.action ?? "log"
}

function ruleCondition(policy: Policy): string | null {
  return policy.rule?.condition?.trim() || null
}

const ACTION_BADGE: Record<PolicyAction, { label: string; classes: string }> = {
  block:  { label: "Block",  classes: "bg-govern-red/15 text-govern-red border border-govern-red/30" },
  review: { label: "Review", classes: "bg-govern-amber/15 text-govern-amber border border-govern-amber/30" },
  log:    { label: "Log",    classes: "bg-muted text-muted-foreground border border-border" },
}

function ActionBadge({ action }: { action: PolicyAction }) {
  const { label, classes } = ACTION_BADGE[action] ?? ACTION_BADGE.log
  return (
    <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", classes)}>
      {label}
    </span>
  )
}

export function PoliciesTab() {
  const [policies, setPolicies] = useState<Policy[]>([])
  const [orgId, setOrgId]       = useState<string | null>(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState<string | null>(null)
  const [search, setSearch]     = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  // On mount: resolve org, then fetch policies
  const init = useCallback(async () => {
    setLoading(true)
    setError(null)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError("Not authenticated.")
      setLoading(false)
      return
    }

    const { data: org, error: orgErr } = await supabase
      .from("organizations")
      .select("id")
      .eq("owner_id", user.id)
      .maybeSingle()

    if (orgErr || !org) {
      setError("No organization found for your account.")
      setLoading(false)
      return
    }

    setOrgId(org.id)

    const { data, error: fetchErr } = await supabase
      .from("policies")
      .select("id, organization_id, name, description, rule, is_enabled, created_at")
      .eq("organization_id", org.id)
      .order("created_at", { ascending: false })

    if (fetchErr) {
      setError("Failed to load policies.")
    } else {
      setPolicies(data ?? [])
    }
    setLoading(false)
  }, [])

  useEffect(() => { init() }, [init])

  const filtered = policies.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.description ?? "").toLowerCase().includes(search.toLowerCase())
  )

  async function handleCreatePolicy(data: PolicyModalData) {
    if (!orgId) return

    const { data: inserted, error: insertErr } = await supabase
      .from("policies")
      .insert({
        organization_id: orgId,
        name: data.name,
        description: data.description || null,
        rule: { action: data.action, condition: data.condition },
      })
      .select("id, organization_id, name, description, rule, is_enabled, created_at")
      .single()

    if (!insertErr && inserted) {
      setPolicies((prev) => [inserted, ...prev])
    }
    setModalOpen(false)
  }

  async function handleDelete(id: string) {
    const { error: delErr } = await supabase
      .from("policies")
      .delete()
      .eq("id", id)

    if (!delErr) {
      setPolicies((prev) => prev.filter((p) => p.id !== id))
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Policies</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Rules that Gate evaluates before every agent action
          </p>
        </div>
        <Button
          onClick={() => setModalOpen(true)}
          className="bg-govern-green text-foreground hover:bg-govern-green/90 gap-2"
          disabled={!orgId}
        >
          <Plus className="w-4 h-4" />
          Create Policy
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder="Search policies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {error && <p className="text-sm text-govern-red">{error}</p>}

      {!loading && !error && (
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Policy</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Action</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Status</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((policy) => (
              <TableRow
                key={policy.id}
                className="border-border hover:bg-secondary/50 transition-colors"
              >
                {/* Policy name + description + condition */}
                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm text-foreground">{policy.name}</span>
                    {policy.description && (
                      <span className="text-xs text-muted-foreground">{policy.description}</span>
                    )}
                    <span className="text-xs text-muted-foreground font-mono">
                      {ruleCondition(policy)
                        ? <>Matches: &ldquo;{ruleCondition(policy)}&rdquo;</>
                        : <span className="italic">No condition set</span>
                      }
                    </span>
                  </div>
                </TableCell>

                {/* Action badge */}
                <TableCell>
                  <ActionBadge action={ruleAction(policy)} />
                </TableCell>

                {/* is_enabled status */}
                <TableCell>
                  <span className={cn(
                    "text-xs font-medium capitalize",
                    policy.is_enabled ? "text-govern-green" : "text-muted-foreground"
                  )}>
                    {policy.is_enabled ? "Active" : "Disabled"}
                  </span>
                </TableCell>

                {/* Delete */}
                <TableCell className="text-right">
                  <button
                    type="button"
                    onClick={() => handleDelete(policy.id)}
                    className="text-govern-red hover:bg-govern-red/10 p-2 rounded transition-colors"
                    title="Delete policy"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No policies found</p>
        </div>
      )}

      <PolicyModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSave={handleCreatePolicy}
      />
    </div>
  )
}
