import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const agent = searchParams.get('agent')
        const type = searchParams.get('type')
        const status = searchParams.get('status')
        const companyId = searchParams.get('company_id')
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')

        let query = supabase
            .from('logs')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })

        if (companyId) {
            query = query.eq('company_id', companyId)
        }
        if (agent && agent !== 'all-agents') {
            query = query.ilike('agent', `%${agent}%`)
        }
        if (type && type !== 'all-types') {
            query = query.eq('type', type.toUpperCase())
        }
        if (status && status !== 'all-statuses') {
            query = query.eq('status', status.toLowerCase())
        }

        const from = (page - 1) * limit
        const to = from + limit - 1

        const { data, count, error } = await query.range(from, to)

        if (error) {
            console.error('Supabase query error:', error)
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({
            data: data || [],
            total: count || 0,
            page,
            limit,
        })
    } catch (error: any) {
        console.error('API /api/logs error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
