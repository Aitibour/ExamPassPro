import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/supabase/database.types'

function serviceClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params
  const supabase  = serviceClient()

  // Look up the link
  const { data: link, error } = await supabase
    .from('links')
    .select('id, destination')
    .eq('code', code)
    .single()

  if (error || !link) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Extract visitor metadata
  const ip = (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
  const ua = request.headers.get('user-agent') ?? 'unknown'

  // Record the click (non-blocking — fire & forget)
  void supabase.from('link_clicks').insert({
    code,
    ip_address: ip,
    user_agent: ua,
  })

  return NextResponse.redirect(link.destination, { status: 302 })
}
