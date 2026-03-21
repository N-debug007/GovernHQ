"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export type PolicyAction = "block" | "review" | "log"

export interface PolicyModalData {
  name: string
  description: string
  action: PolicyAction
  condition: string
}

interface PolicyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (data: PolicyModalData) => void
}

const ACTION_OPTIONS: { value: PolicyAction; label: string }[] = [
  { value: "block",  label: "Block — prevent the action entirely" },
  { value: "review", label: "Review — pause for human approval" },
  { value: "log",    label: "Log — allow but record the event" },
]

const EMPTY: PolicyModalData = {
  name: "",
  description: "",
  action: "log",
  condition: "",
}

export function PolicyModal({ open, onOpenChange, onSave }: PolicyModalProps) {
  const [form, setForm] = useState<PolicyModalData>(EMPTY)
  const [error, setError] = useState("")

  function set<K extends keyof PolicyModalData>(key: K, value: PolicyModalData[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    setError("")

    if (!form.name.trim()) {
      setError("Policy name is required")
      return
    }
    if (!form.condition.trim()) {
      setError("Condition is required")
      return
    }

    onSave({
      name: form.name.trim(),
      description: form.description.trim(),
      action: form.action,
      condition: form.condition.trim(),
    })

    setForm(EMPTY)
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setForm(EMPTY)
      setError("")
    }
    onOpenChange(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create Policy</DialogTitle>
          <DialogDescription>
            Define a rule that Gate will enforce on every agent action.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="p-3 rounded-md bg-govern-red/10 border border-govern-red/30">
              <p className="text-sm text-govern-red">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Policy Name</label>
            <Input
              placeholder="e.g., Block Financial Transfers"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <textarea
              placeholder="Describe what this policy controls and enforces..."
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={2}
              className="px-3 py-2 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-govern-green/50 resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Action</label>
            <select
              value={form.action}
              onChange={(e) => set("action", e.target.value as PolicyAction)}
              className="px-3 py-2 rounded-md bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-govern-green/50"
            >
              {ACTION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-card">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Condition</label>
            <Input
              placeholder='e.g., "send email" or "delete file"'
              value={form.condition}
              onChange={(e) => set("condition", e.target.value)}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            <p className="text-xs text-muted-foreground">
              Gate will match this against agent intent (case-insensitive substring).
            </p>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              className="border-border text-muted-foreground bg-transparent hover:bg-secondary"
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-govern-green text-foreground hover:bg-govern-green/90"
            >
              Create Policy
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
