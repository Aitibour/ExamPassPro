'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

// ── Plan options shown on step 2 ─────────────────────────────────────────────

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    highlight: 'border-slate-200 bg-white',
    badge: 'bg-slate-100 text-slate-600',
    ring: 'ring-2 ring-slate-400',
    icon: '◎',
    features: [
      '1 mock exam (30 questions)',
      '1 practice exam (30 questions)',
      'Instant answer explanations',
    ],
  },
  {
    id: 'starter',
    name: 'Core',
    price: '$39',
    period: 'one-time',
    highlight: 'border-sky-200 bg-sky-50/40',
    badge: 'bg-sky-100 text-sky-700',
    ring: 'ring-2 ring-sky-500',
    icon: '▲',
    features: [
      '2 mock exams (60Q each · timed)',
      '2 practice exams',
      'Score report & full explanations',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$99',
    period: 'one-time',
    popular: true,
    highlight: 'border-violet-200 bg-violet-50/40',
    badge: 'bg-violet-100 text-violet-700',
    ring: 'ring-2 ring-violet-500',
    icon: '◆',
    features: [
      '4 mock exams + 4 practice exams',
      '1× 60-min coaching session',
      'Gemini AI · Analytics',
    ],
  },
  {
    id: 'all_access',
    name: 'Elite',
    price: '$199',
    period: 'one-time',
    highlight: 'border-amber-200 bg-amber-50/40',
    badge: 'bg-amber-100 text-amber-700',
    ring: 'ring-2 ring-amber-500',
    icon: '★',
    features: [
      '10 mock exams + 10 practice exams',
      '1× 90-min coaching session',
      '100% Pass Guarantee',
    ],
  },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function RegisterPage() {
  const [step, setStep]               = useState<1 | 2>(1)
  const [fullName, setFullName]       = useState('')
  const [email, setEmail]             = useState('')
  const [password, setPassword]       = useState('')
  const [selectedPlan, setSelectedPlan] = useState('pro')   // default highlight
  const [error, setError]             = useState('')
  const [loading, setLoading]         = useState(false)
  const [done, setDone]               = useState(false)

  // Step 1 → validate & move to step 2
  function handleStep1(e: React.FormEvent) {
    e.preventDefault()
    if (!fullName.trim() || !email.trim() || password.length < 8) return
    setStep(2)
  }

  // Step 2 → sign up
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          plan:      selectedPlan,   // stored in auth.users.raw_user_meta_data
        },
      },
    })
    if (error) { setError(error.message); setLoading(false); return }
    setDone(true)
  }

  // ── Success screen ────────────────────────────────────────────────────────
  if (done) {
    const plan = PLANS.find(p => p.id === selectedPlan)!
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 w-full max-w-md text-center shadow-sm">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <polyline points="4,12 9,17 20,6" stroke="#059669" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-1">Check your email</h2>
          <p className="text-slate-500 text-sm mb-4">
            We sent a confirmation link to{' '}
            <strong className="text-slate-700">{email}</strong>.
          </p>

          {/* Selected plan reminder */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-bold mb-4 ${plan.badge}`}>
            <span>{plan.icon}</span>
            <span>{plan.name} Plan selected</span>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed mb-6">
            After clicking the link you&apos;ll be guided to choose your first course
            and — if you&apos;re on a paid plan — complete your one-time payment.
          </p>
          <Link href="/login"
            className="mt-2 inline-block text-sky-500 text-sm font-semibold hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* ── Left panel ── */}
      <div className="relative hidden lg:flex flex-col justify-center p-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=60')",
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 mb-12 no-underline">
            <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
                <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-white text-lg">ExamPassPro</span>
          </Link>
          <h2 className="text-3xl font-black text-white leading-tight mb-4">
            Start Your Journey to{' '}
            <span className="text-sky-400">Certification Success</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Create your free account and get instant access to the most
            comprehensive IT certification prep platform.
          </p>
          {[
            'Free to sign up — no credit card required',
            'Instant access to course previews',
            'One-time plans starting at $39',
            '100% Pass Guarantee or full refund',
          ].map(f => (
            <div key={f} className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</div>
              <span className="text-slate-300 text-sm">{f}</span>
            </div>
          ))}

          {/* Step indicator */}
          <div className="mt-10 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 1 ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-400'}`}>1</div>
            <div className={`flex-1 h-0.5 transition-colors ${step >= 2 ? 'bg-sky-500' : 'bg-slate-700'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= 2 ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-400'}`}>2</div>
          </div>
          <div className="flex justify-between mt-1.5 text-[11px] font-semibold text-slate-400">
            <span>Your details</span>
            <span>Choose plan</span>
          </div>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="flex items-center justify-center p-8 bg-slate-50">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 w-full max-w-md shadow-sm">

          {/* Mobile logo */}
          <Link href="/" className="flex lg:hidden items-center gap-2 mb-6 no-underline">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-slate-900">ExamPassPro</span>
          </Link>

          {/* Mobile step indicator */}
          <div className="flex lg:hidden items-center gap-2 mb-5">
            <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-sky-500' : 'bg-slate-300'}`} />
            <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-sky-500' : 'bg-slate-300'}`} />
            <span className="text-xs text-slate-400 ml-1">Step {step} of 2</span>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* ═══ STEP 1: Account details ═══ */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-black text-slate-900 mb-1">Create your account</h2>
              <p className="text-slate-500 text-sm mb-6">
                Start your exam prep today — free to join
              </p>

              <form onSubmit={handleStep1} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                    Full Name
                  </label>
                  <input
                    type="text" value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 transition-colors"
                    placeholder="Marcus Rivera" required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                    Email Address
                  </label>
                  <input
                    type="email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 transition-colors"
                    placeholder="you@example.com" required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                    Password
                  </label>
                  <input
                    type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 transition-colors"
                    placeholder="Min. 8 characters" required minLength={8}
                  />
                </div>
                <button type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg text-sm font-bold transition-colors">
                  Continue — Choose Your Plan →
                </button>
              </form>

              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 border-t border-slate-200" />
                <span className="text-xs text-slate-400">or continue with</span>
                <div className="flex-1 border-t border-slate-200" />
              </div>

              <button
                onClick={async () => {
                  const supabase = createClient()
                  await supabase.auth.signInWithOAuth({
                    provider: 'google',
                    options: {
                      redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent('/onboarding')}`,
                    },
                  })
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

              <p className="text-center text-xs text-slate-500 mt-4">
                Already have an account?{' '}
                <Link href="/login" className="text-sky-500 font-semibold">Sign in</Link>
              </p>
            </>
          )}

          {/* ═══ STEP 2: Choose plan ═══ */}
          {step === 2 && (
            <>
              <div className="flex items-center gap-3 mb-5">
                <button
                  onClick={() => setStep(1)}
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Go back"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div>
                  <h2 className="text-lg font-black text-slate-900">Choose your plan</h2>
                  <p className="text-slate-500 text-xs">You can upgrade anytime — one-time payment</p>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-3">
                {PLANS.map(plan => (
                  <label
                    key={plan.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? plan.ring + ' border-transparent ' + plan.highlight
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio" name="plan" value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={() => setSelectedPlan(plan.id)}
                      className="sr-only"
                    />

                    {/* Radio indicator */}
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      selectedPlan === plan.id ? 'border-sky-500 bg-sky-500' : 'border-slate-300'
                    }`}>
                      {selectedPlan === plan.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>

                    {/* Plan info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-black text-slate-900">
                          {plan.icon} {plan.name}
                        </span>
                        {plan.popular && (
                          <span className="text-[10px] font-bold bg-violet-500 text-white px-2 py-0.5 rounded-full">
                            POPULAR
                          </span>
                        )}
                        <span className="ml-auto text-sm font-black text-slate-900">
                          {plan.price}
                          <span className="text-xs font-normal text-slate-400 ml-0.5">
                            /{plan.period}
                          </span>
                        </span>
                      </div>
                      <ul className="mt-1.5 space-y-0.5">
                        {plan.features.map(f => (
                          <li key={f} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                            <span className="text-green-500 font-bold">✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </label>
                ))}

                <button
                  type="submit" disabled={loading}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg text-sm font-bold transition-colors disabled:opacity-60 mt-2"
                >
                  {loading ? 'Creating account…' : 'Create Account →'}
                </button>
              </form>

              <p className="text-center text-xs text-slate-400 mt-4">
                By signing up you agree to our{' '}
                <Link href="/terms" className="underline">Terms</Link> &amp;{' '}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
