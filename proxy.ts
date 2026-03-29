import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { RATE_LIMIT_CONFIG } from '@/lib/security'

// ─── CSRF ────────────────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = new Set([
  'https://exampasspro.vercel.app',
  'http://localhost:3000',
])

const CSRF_SKIP = ['/api/stripe/webhook']

function isCsrfSafe(request: NextRequest): boolean {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/api/')) return true
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) return true
  if (CSRF_SKIP.some((skip) => pathname.startsWith(skip))) return true
  const origin = request.headers.get('origin')
  if (!origin) return true
  return ALLOWED_ORIGINS.has(origin)
}

// ─── Rate limiting ────────────────────────────────────────────────────────────

const limiters = new Map<string, Ratelimit>()

function getLimiter(routeKey: string): Ratelimit {
  if (!limiters.has(routeKey)) {
    const [requests, windowSeconds] = RATE_LIMIT_CONFIG[routeKey]
    limiters.set(
      routeKey,
      new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.fixedWindow(requests, `${windowSeconds}s`),
        prefix: `ratelimit:${routeKey}`,
      })
    )
  }
  return limiters.get(routeKey)!
}

function matchRateLimitKey(pathname: string): string | null {
  for (const routeKey of Object.keys(RATE_LIMIT_CONFIG)) {
    if (pathname.startsWith(routeKey)) return routeKey
  }
  return null
}

// ─── Proxy ────────────────────────────────────────────────────────────────────

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. CSRF check for API routes
  if (!isCsrfSafe(request)) {
    return new NextResponse(
      JSON.stringify({ error: 'Forbidden: CSRF check failed' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // 2. Rate limiting for configured API routes
  const routeKey = matchRateLimitKey(pathname)
  if (
    routeKey &&
    !['GET', 'HEAD', 'OPTIONS'].includes(request.method) &&
    process.env.UPSTASH_REDIS_REST_URL
  ) {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'anonymous'

    const { success, limit, remaining, reset } = await getLimiter(routeKey).limit(ip)

    if (!success) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please slow down.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': String(limit),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(reset),
            'Retry-After': String(Math.ceil((reset - Date.now()) / 1000)),
          },
        }
      )
    }
  }

  // 3. Auth session refresh + route guards
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder',
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  // Admin guard
  if (pathname.startsWith('/admin')) {
    if (!user) return NextResponse.redirect(new URL('/login', request.url))
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    if (profile?.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Dashboard / exam / study / results guard
  if (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/exam') ||
    pathname.startsWith('/study') ||
    pathname.startsWith('/results')
  ) {
    if (!user) return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect logged-in users away from auth pages
  if ((pathname === '/login' || pathname === '/register') && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/api/:path*',
    '/admin/:path*',
    '/dashboard/:path*',
    '/exam/:path*',
    '/study/:path*',
    '/results/:path*',
    '/login',
    '/register',
  ],
}
