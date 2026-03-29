import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createClient as createUserClient } from '@/lib/supabase/server'
import type { Database } from '@/lib/supabase/database.types'
import type { Profile } from '@/lib/supabase/database.types'

function serviceClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

async function requireAdmin(): Promise<boolean> {
  const supabase = await createUserClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return false
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  return (profile as Profile | null)?.role === 'admin'
}

// ── GET /api/links — list all links with click counts ─────────────────────
export async function GET() {
  const isAdmin = await requireAdmin()
  if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const supabase = serviceClient()
  const { data: links, error } = await supabase
    .from('links')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Fetch click counts for each link (match on code, no FK needed)
  const withCounts = await Promise.all(
    (links ?? []).map(async link => {
      const { count } = await supabase
        .from('link_clicks')
        .select('*', { count: 'exact', head: true })
        .eq('code', link.code)
      return { ...link, click_count: count ?? 0 }
    })
  )

  return NextResponse.json({ links: withCounts })
}

// ── POST /api/links — create a new link ───────────────────────────────────
export async function POST(request: NextRequest) {
  const isAdmin = await requireAdmin()
  if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

  const { code, destination, label = '' } = body as Record<string, string>

  // Validate code: alphanumeric + dashes only, 2–50 chars
  if (!code || !/^[a-zA-Z0-9_-]{2,50}$/.test(code)) {
    return NextResponse.json(
      { error: 'Code must be 2–50 chars, letters/numbers/dashes only' },
      { status: 422 }
    )
  }

  // Validate destination URL
  let destUrl: URL
  try {
    destUrl = new URL(destination)
    if (!['http:', 'https:'].includes(destUrl.protocol)) throw new Error()
  } catch {
    return NextResponse.json({ error: 'Destination must be a valid http(s) URL' }, { status: 422 })
  }

  const supabase = serviceClient()
  const { data, error } = await supabase
    .from('links')
    .insert({ code: code.toLowerCase(), destination: destUrl.toString(), label })
    .select()
    .single()

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Code already taken' }, { status: 409 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ link: data }, { status: 201 })
}
