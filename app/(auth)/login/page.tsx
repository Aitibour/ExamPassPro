'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { safeRedirectPath } from '@/lib/security'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    const next = safeRedirectPath(
      new URLSearchParams(window.location.search).get('next'),
      '/dashboard'
    )
    window.location.href = next
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left panel */}
      <div className="relative hidden lg:flex flex-col justify-center p-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=60')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 mb-12 no-underline">
            <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
                <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-white text-lg">ExamPassPro</span>
          </Link>
          <h2 className="text-3xl font-black text-white leading-tight mb-4">
            Pass Your IT Certification <span className="text-sky-400">First Try</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Join 12,400+ IT professionals who passed their certification on the first attempt.
          </p>
          {[
            '850+ real exam-style questions per course',
            'Timed mock exams with domain breakdown',
            'Gemini AI study assistant 24/7',
            '100% Pass Guarantee or full refund',
          ].map(f => (
            <div key={f} className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</div>
              <span className="text-slate-300 text-sm">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-8 bg-slate-50">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 w-full max-w-md shadow-sm">
          {/* Mobile logo */}
          <Link href="/" className="flex lg:hidden items-center gap-2 mb-6 no-underline">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-slate-900">ExamPassPro</span>
          </Link>

          <h2 className="text-xl font-black text-slate-900 mb-1">Welcome back</h2>
          <p className="text-slate-500 text-sm mb-6">Sign in to continue your exam prep</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-4">{error}</div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Email Address</label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 transition-colors"
                placeholder="you@example.com" required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Password</label>
              <input
                type="password" value={password} onChange={e => setPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 transition-colors"
                placeholder="••••••••" required
              />
            </div>
            <div className="text-right">
              <Link href="/forgot-password" className="text-xs text-sky-500 font-semibold">Forgot password?</Link>
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg text-sm font-bold transition-colors disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign In →'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 border-t border-slate-200" />
            <span className="text-xs text-slate-400">or continue with</span>
            <div className="flex-1 border-t border-slate-200" />
          </div>

          <div className="space-y-2">
            <button
              onClick={async () => {
                const supabase = createClient()
                const next = new URLSearchParams(window.location.search).get('next') ?? '/dashboard'
                await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` } })
              }}
              className="w-full border border-slate-200 rounded-lg py-2.5 text-sm font-semibold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <button
              onClick={async () => {
                const supabase = createClient()
                await supabase.auth.signInWithOAuth({ provider: 'linkedin_oidc', options: { redirectTo: `${window.location.origin}/auth/callback` } })
              }}
              className="w-full border border-slate-200 rounded-lg py-2.5 text-sm font-semibold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Continue with LinkedIn
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            No account? <Link href="/register" className="text-sky-500 font-semibold">Sign up free</Link>
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <span className="text-xs text-slate-400">Admin? </span>
            <Link href="/admin" className="text-xs text-amber-500 font-semibold">Sign in to Admin Dashboard →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
