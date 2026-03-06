"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { StatCard } from "./stat-card"
import { CollapsibleRow } from "./collapsible-row"
import { useAuth } from "@/lib/auth-context"
import { Loader2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

function ActionButtons() {
  return (
    <div className="flex items-center gap-2 mt-2">
      <Button
        variant="outline"
        size="sm"
        className="h-6 text-xs px-3 border-govern-green text-govern-green bg-transparent hover:bg-govern-green/10"
      >
        Allow
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-6 text-xs px-3 border-govern-red text-govern-red bg-transparent hover:bg-govern-red/10"
      >
        Block
      </Button>
    </div>
  )
}

export function DashboardTab() {
  const { user } = useAuth()
  const [metrics, setMetrics] = useState({ total: 0, allowed: 0, blocked: 0, paused: 0, agents: 0 })
  const [decisions, setDecisions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user?.organization) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const [metricsRes, logsRes] = await Promise.all([
          fetch(`/api/metrics?company_id=${encodeURIComponent(user.organization)}`),
          fetch(`/api/logs?company_id=${encodeURIComponent(user.organization)}&limit=7`)
        ])

        const [metricsData, logsData] = await Promise.all([
          metricsRes.json(),
          logsRes.json()
        ])

        if (!metricsData.error) setMetrics(metricsData)
        if (!logsData.error) setDecisions(logsData.data)
      } catch (error) {
        console.error("Dashboard fetch error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [user?.organization])

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard value={isLoading ? "..." : metrics.total.toLocaleString()} label="total" />
        <StatCard value={isLoading ? "..." : metrics.allowed.toLocaleString()} label="allowed" color="green" />
        <StatCard value={isLoading ? "..." : metrics.blocked.toLocaleString()} label="blocked" color="red" />
        <StatCard value={isLoading ? "..." : metrics.paused.toLocaleString()} label="paused" color="amber" />
      </div>

      <div className="h-px bg-border" />

      <div className="relative min-h-[200px]">
        {isLoading && decisions.length === 0 && (
          <div className="flex items-center justify-center py-10">
            <div className="flex flex-col items-center gap-2">
              <div className="size-8 border-2 border-govern-green border-t-transparent rounded-full animate-spin" />
              <span className="text-xs text-muted-foreground font-mono">Loading telemetry...</span>
            </div>
          </div>
        )}

        {decisions.length === 0 && !isLoading ? (
          <div className="text-center py-10 text-muted-foreground">
            No recent decisions found.
          </div>
        ) : (
          decisions.map((d, i) => (
            <CollapsibleRow
              key={d.id || i}
              status={d.status}
              agent={d.agent}
              intent={d.intent}
              time={formatDistanceToNow(new Date(d.created_at || Date.now()), { addSuffix: true })}
            >
              <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                {d.status === "blocked" && (
                  <>
                    <p>Reasoning evaluated: Action flagged by Governance policies.</p>
                    <p>Action blocked: Prevented unauthorized operation.</p>
                    <p className="text-xs italic mt-1">Action never executed. Agent still running.</p>
                  </>
                )}
                {d.status === "paused" && (
                  <>
                    <p>Reasoning evaluated: Operation requires manual verification.</p>
                    <p>Action paused: Human approval required.</p>
                    <ActionButtons />
                  </>
                )}
                {d.status === "allowed" && (
                  <>
                    <p>Reasoning approved. Action executed successfully.</p>
                    {d.gate_ms && <p className="text-xs">Gate: {d.gate_ms}ms</p>}
                  </>
                )}
              </div>
            </CollapsibleRow>
          ))
        )}
      </div>

      <div className="flex justify-end">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          Show more
        </button>
      </div>
    </div>
  )
}
