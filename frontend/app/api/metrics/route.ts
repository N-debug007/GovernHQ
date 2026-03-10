import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const companyId = searchParams.get('company_id')

        if (!companyId) {
            return NextResponse.json({ error: 'company_id is required' }, { status: 400 })
        }

        // Fetch all counts for the company
        const { data: logs, error } = await supabase
            .from('logs')
            .select('status, agent')
            .eq('company_id', companyId)

        if (error) {
            console.error('Supabase metrics error:', error)
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        const metrics = (logs || []).reduce(
            (acc, log) => {
                acc.total++
                if (log.status === 'allowed') acc.allowed++
                if (log.status === 'blocked') acc.blocked++
                if (log.status === 'paused') acc.paused++
                acc.distinctAgents.add(log.agent)
                return acc
            },
            { total: 0, allowed: 0, blocked: 0, paused: 0, distinctAgents: new Set<string>() }
        )

        return NextResponse.json({
            total: metrics.total,
            allowed: metrics.allowed,
            blocked: metrics.blocked,
            paused: metrics.paused,
            agents: metrics.distinctAgents.size,
        })
    } catch (error: any) {
        console.error('API /api/metrics error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
