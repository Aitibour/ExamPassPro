'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    })
    if (error) { setError(error.message); setLoading(false); return }
    setDone(true)
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 w-full max-w-md text-center shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="4,12 9,17 20,6" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-2">Check your email</h2>
          <p className="text-slate-500 text-sm">We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.</p>
          <Link href="/login" className="mt-6 inline-block text-sky-500 text-sm font-semibold">Back to Sign In</Link>
        </div>
      </div>
    )
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
            Start Your Journey to <span className="text-sky-400">Certification Success</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Create your free account and get access to the most comprehensive IT certification prep platform.
          </p>
          {[
            'Free to sign up — no credit card required',
            'Instant access to course previews',
            'Flexible plans starting at $19/mo',
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
          <Link href="/" className="flex lg:hidden items-center gap-2 mb-6 no-underline">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-slate-900">ExamPassPro</span>
          </Link>

          <h2 className="text-xl font-black text-slate-900 mb-1">Create your account</h2>
          <p className="text-slate-500 text-sm mb-6">Start your exam prep today — free to join</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-4">{error}</div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Full Name</label>
              <input
                type="text" value={fullName} onChange={e => setFullName(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 transition-colors"
                placeholder="Marcus Rivera" required
              />
            </div>
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
                placeholder="Min. 8 characters" required minLength={8}
              />
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg text-sm font-bold transition-colors disabled:opacity-60"
            >
              {loading ? 'Creating account…' : 'Create Account →'}
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
                await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } })
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
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            Already have an account? <Link href="/login" className="text-sky-500 font-semibold">Sign in</Link>
          </p>
          <p className="text-center text-xs text-slate-400 mt-2">
            By signing up you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
