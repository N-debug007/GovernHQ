"use client"

import { useCallback, useEffect, useState } from "react"
import { AlertTriangle, Activity, TrendingUp } from "lucide-react"
import { StatCard } from "./stat-card"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"

const API = process.env.NEXT_PUBLIC_API_URL

async function getToken(): Promise<string | null> {
  const { data: { session } } = await supabase.auth.getSession()
  return session?.access_token ?? null
}

async function apiFetch(path: string) {
  const token = await getToken()
  const res = await fetch(`${API}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}

interface LedgerRow {
  id: string
  agent_id: string
  action: string
  status: string
  created_at: string
}

interface Metrics {
  total: number
  allowed: number
  blocked: number
  paused: number
  agents_monitored: number
  avg_gate_ms: number | null
}

function relativeTime(iso: string): string {
  try {
    const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
    if (diff < 60) return `${diff}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    return `${Math.floor(diff / 3600)}h ago`
  } catch {
    return "—"
  }
}

export function MonitoringTab() {
  // TODO: persist monitoring controls to backend when settings endpoint is available
  const [anomalySensitivity, setAnomalySensitivity] = useState(70)
  const [riskThreshold, setRiskThreshold] = useState(65)
  const [monitoringEnabled, setMonitoringEnabled] = useState(true)

  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [anomalies, setAnomalies] = useState<LedgerRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [metricsRes, anomalyRes] = await Promise.all([
        apiFetch("/monitoring/metrics"),
        apiFetch("/monitoring/ledger?status=block&limit=5"),
      ])
      setMetrics(metricsRes.data)
      setAnomalies(anomalyRes.data.rows)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const performanceMetrics = [
    {
      label: "Avg Decision Time",
      value: metrics?.avg_gate_ms != null ? `${metrics.avg_gate_ms}ms` : "—",
      trend: "stable",
    },
    // TODO: Gate Pass Rate and System Uptime not computable from ledger_events
    { label: "Gate Pass Rate", value: "—", trend: "stable" },
    { label: "Actions Blocked", value: metrics ? String(metrics.blocked) : "—", trend: "up" },
    { label: "System Uptime", value: "—", trend: "stable" },
  ]

  return (
    <div className="flex flex-col gap-10">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard
          value={metrics ? String(metrics.blocked + metrics.paused) : "—"}
          label="anomalies detected"
          color="red"
        />
        <StatCard
          value={metrics ? String(metrics.agents_monitored) : "—"}
          label="agents monitored"
          color="green"
        />
        <StatCard
          value={metrics?.avg_gate_ms != null ? `${metrics.avg_gate_ms}ms` : "—"}
          label="avg gate latency"
        />
        {/* TODO: availability not computable from ledger_events */}
        <StatCard value="—" label="availability" color="green" />
      </div>

      {error && <p className="text-sm text-govern-red">{error}</p>}

      <div className="h-px bg-border" />

      {/* Monitoring Controls — local state only */}
      {/* TODO: persist monitoring controls to backend when settings endpoint is available */}
      <div className="flex flex-col gap-6">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
          Monitoring Controls
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Enable Monitoring</label>
              <button
                type="button"
                aria-label={monitoringEnabled ? "Disable monitoring" : "Enable monitoring"}
                onClick={() => setMonitoringEnabled(!monitoringEnabled)}
                className={cn(
                  "relative inline-flex w-12 h-6 rounded-full transition-colors",
                  monitoringEnabled ? "bg-govern-green" : "bg-muted"
                )}
              >
                <span
                  className={cn(
                    "inline-block w-5 h-5 transform rounded-full bg-white transition-transform",
                    monitoringEnabled ? "translate-x-6" : "translate-x-0.5"
                  )}
                />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              {monitoringEnabled ? "Active" : "Inactive"} — behavioral monitoring and anomaly detection
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Risk Threshold</label>
              <span className="text-sm font-mono text-govern-amber">{riskThreshold}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={riskThreshold}
              aria-label="Risk threshold"
              onChange={(e) => setRiskThreshold(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-govern-amber"
            />
            <p className="text-xs text-muted-foreground">
              Trigger alerts when risk score exceeds threshold
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Anomaly Sensitivity</label>
              <span className="text-sm font-mono text-govern-red">{anomalySensitivity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={anomalySensitivity}
              aria-label="Anomaly sensitivity"
              onChange={(e) => setAnomalySensitivity(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-govern-red"
            />
            <p className="text-xs text-muted-foreground">
              Higher sensitivity = more frequent alerts
            </p>
          </div>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Performance Metrics */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
          Performance Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {performanceMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {metric.label}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-lg font-semibold text-foreground">{metric.value}</span>
                {metric.trend === "up" && <TrendingUp className="w-4 h-4 text-govern-green" />}
                {metric.trend === "down" && (
                  <TrendingUp className="w-4 h-4 text-govern-red rotate-180" />
                )}
                {metric.trend === "stable" && <Activity className="w-4 h-4 text-muted-foreground" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Recent Anomalies — blocked ledger events */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
          Recent Anomalies ({loading ? "…" : anomalies.length})
        </h3>
        {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
        {!loading && anomalies.length === 0 && (
          <p className="text-sm text-muted-foreground">No recent blocked events.</p>
        )}
        <div className="space-y-2">
          {anomalies.map((row) => (
            <div
              key={row.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-govern-red/20">
                <AlertTriangle className="w-4 h-4 text-govern-red" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm font-semibold text-foreground">
                  {row.agent_id.slice(0, 8)}
                </p>
                <p className="text-sm text-muted-foreground truncate">{row.action}</p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-semibold uppercase px-2 py-1 rounded bg-govern-red/20 text-govern-red">
                  blocked
                </span>
                <p className="text-xs text-muted-foreground mt-1">{relativeTime(row.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
