"use client"

import { Fragment, useState, useEffect, useCallback } from "react"
import { Search, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import { StatCard } from "./stat-card"
import { useAuth } from "@/lib/auth-context"

interface LedgerEntry {
  id: string
  created_at: string
  agent: string
  type: string
  intent: string
  gate_ms: number | null
  status: Status
}

export function LedgerTab() {
  const { user } = useAuth()
  const [search, setSearch] = useState("")
  const [agentFilter, setAgentFilter] = useState("all-agents")
  const [typeFilter, setTypeFilter] = useState("all-types")
  const [statusFilter, setStatusFilter] = useState("all-statuses")

  const [entries, setEntries] = useState<LedgerEntry[]>([])
  const [metrics, setMetrics] = useState({ total: 0, allowed: 0, blocked: 0, paused: 0 })
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isMetricsLoading, setIsMetricsLoading] = useState(true)
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const limit = 6

  const fetchMetrics = useCallback(async () => {
    if (!user?.organization) return
    setIsMetricsLoading(true)
    try {
      const response = await fetch(`/api/metrics?company_id=${encodeURIComponent(user.organization)}`)
      const data = await response.json()
      if (!data.error) {
        setMetrics(data)
      }
    } catch (error) {
      console.error("Failed to fetch metrics:", error)
    } finally {
      setIsMetricsLoading(false)
    }
  }, [user?.organization])

  const fetchLogs = useCallback(async () => {
    if (!user?.organization) return
    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        company_id: user.organization,
        page: page.toString(),
        limit: limit.toString(),
        agent: agentFilter,
        type: typeFilter,
        status: statusFilter,
      })

      const response = await fetch(`/api/logs?${params.toString()}`)
      const data = await response.json()

      if (!data.error) {
        setEntries(data.data)
        setTotalItems(data.total)
      }
    } catch (error) {
      console.error("Failed to fetch logs:", error)
    } finally {
      setIsLoading(false)
    }
  }, [user?.organization, page, agentFilter, typeFilter, statusFilter])

  useEffect(() => {
    fetchMetrics()
  }, [fetchMetrics])

  useEffect(() => {
    fetchLogs()
  }, [fetchLogs])

  function toggleRow(id: string) {
    setExpandedRow(expandedRow === id ? null : id)
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    setExpandedRow(null)
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard value={isMetricsLoading ? "..." : metrics.total.toLocaleString()} label="total" />
        <StatCard value={isMetricsLoading ? "..." : metrics.allowed.toLocaleString()} label="allowed" color="green" />
        <StatCard value={isMetricsLoading ? "..." : metrics.blocked.toLocaleString()} label="blocked" color="red" />
        <StatCard value={isMetricsLoading ? "..." : metrics.paused.toLocaleString()} label="paused" color="amber" />
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search ledger..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-3">
          <Select value={agentFilter} onValueChange={(val) => { setAgentFilter(val); setPage(1); }}>
            <SelectTrigger className="bg-secondary border-border text-foreground w-[140px]">
              <SelectValue placeholder="Agent" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all-agents">All Agents</SelectItem>
              <SelectItem value="ARIA-7X">ARIA-7X</SelectItem>
              <SelectItem value="SCOUT-3B">SCOUT-3B</SelectItem>
              <SelectItem value="NOVA-3">NOVA-3</SelectItem>
              <SelectItem value="CORE-1">CORE-1</SelectItem>
              <SelectItem value="HELPER-2A">HELPER-2A</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={(val) => { setTypeFilter(val); setPage(1); }}>
            <SelectTrigger className="bg-secondary border-border text-foreground w-[130px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="DB_QUERY">DB_QUERY</SelectItem>
              <SelectItem value="API_CALL">API_CALL</SelectItem>
              <SelectItem value="ANALYSIS">ANALYSIS</SelectItem>
              <SelectItem value="RESPONSE">RESPONSE</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={(val) => { setStatusFilter(val); setPage(1); }}>
            <SelectTrigger className="bg-secondary border-border text-foreground w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all-statuses">All Statuses</SelectItem>
              <SelectItem value="allowed">Allowed</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
            <Loader2 className="size-8 animate-spin text-govern-green" />
          </div>
        )}
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Time</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Agent</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Type</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Intent</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">Gate</TableHead>
              <TableHead className="text-xs uppercase tracking-wider text-muted-foreground text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.length === 0 && !isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  No log entries found.
                </TableCell>
              </TableRow>
            ) : (
              entries.map((entry) => (
                <Fragment key={entry.id}>
                  <TableRow
                    className={cn("border-border cursor-pointer", expandedRow === entry.id ? "bg-secondary/50" : "hover:bg-secondary/50")}
                    onClick={() => toggleRow(entry.id)}
                  >
                    <TableCell className="font-mono text-xs text-muted-foreground">{formatTime(entry.created_at)}</TableCell>
                    <TableCell className="font-mono font-semibold text-sm text-foreground">{entry.agent}</TableCell>
                    <TableCell className="text-xs text-muted-foreground font-mono">{entry.type}</TableCell>
                    <TableCell className="text-sm text-foreground max-w-[300px] truncate">{`"${entry.intent}"`}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{entry.gate_ms ? `${entry.gate_ms}ms` : "\u2014"}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <StatusDot status={entry.status} showLabel={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedRow === entry.id && (
                    <TableRow className="border-border hover:bg-transparent">
                      <TableCell colSpan={6} className="p-0">
                        <div className="bg-[#141B2D] mx-2 mb-2 p-4 rounded-md">
                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            {entry.status === "allowed" && <p>Reasoning approved. Action executed.</p>}
                            {entry.status === "blocked" && (
                              <>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Why Action Blocked</h4>
                                <p className="text-sm text-muted-foreground mb-2">Policy check failed. Action prevented by Governance engine.</p>
                                <p className="text-xs italic text-muted-foreground mt-3">Action never executed. Agent still running.</p>
                              </>
                            )}
                            {entry.status === "paused" && (
                              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                <p>Action paused: Human approval required for this operation.</p>
                                <div className="flex items-center gap-2 mt-1">
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
                              </div>
                            )}
                            {entry.gate_ms && <p className="text-xs mt-1">Gate: {entry.gate_ms}ms</p>}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">
            Showing {entries.length > 0 ? (page - 1) * limit + 1 : 0}-{Math.min(page * limit, totalItems)} of {totalItems}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <span className="text-muted-foreground">Chain:</span>
            <StatusDot status="allowed" showLabel={false} />
            <span className="text-govern-green">Valid</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border text-muted-foreground bg-transparent hover:bg-secondary"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-border text-muted-foreground bg-transparent hover:bg-secondary"
            disabled={page * limit >= totalItems}
            onClick={() => handlePageChange(page + 1)}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
