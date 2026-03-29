import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { AIChatWidget } from '@/components/chat/AIChatWidget'
import type { Profile, PurchaseWithCourse, ExamAttemptWithSet } from '@/lib/supabase/database.types'

// ── Plan config ────────────────────────────────────────────────────────────

const PLAN_ORDER = ['starter', 'pro', 'platinum', 'all_access']

const PLANS: Record<string, {
  label: string
  tagline: string
  badgeCls: string
  ringCls: string
  mockExams: number
  aiChat: boolean
  aiChatLabel: string
  community: 'none' | 'public' | 'private'
  coaching: null | '30-min' | '60-min'
  supportLevel: string
  lifetime: boolean
  upgradeTo: string | null
}> = {
  starter: {
    label: 'Core',
    tagline: 'Pass your first certification',
    badgeCls: 'bg-slate-100 text-slate-700 border border-slate-200',
    ringCls: 'border-slate-200',
    mockExams: 2,
    aiChat: true,
    aiChatLabel: 'Gemini AI Chat',
    community: 'none',
    coaching: null,
    supportLevel: 'Standard',
    lifetime: false,
    upgradeTo: 'pro',
  },
  pro: {
    label: 'Pro',
    tagline: 'Exam-ready in weeks',
    badgeCls: 'bg-sky-100 text-sky-700 border border-sky-200',
    ringCls: 'border-sky-200',
    mockExams: 4,
    aiChat: true,
    aiChatLabel: 'Gemini AI Chat',
    community: 'public',
    coaching: '60-min',
    supportLevel: 'Priority',
    lifetime: false,
    upgradeTo: 'all_access',
  },
  platinum: {
    label: 'Pro',
    tagline: 'Exam-ready in weeks',
    badgeCls: 'bg-sky-100 text-sky-700 border border-sky-200',
    ringCls: 'border-sky-200',
    mockExams: 4,
    aiChat: true,
    aiChatLabel: 'Gemini AI Chat',
    community: 'public',
    coaching: '60-min',
    supportLevel: 'Priority',
    lifetime: false,
    upgradeTo: 'all_access',
  },
  all_access: {
    label: 'Elite',
    tagline: '100% Pass Guarantee',
    badgeCls: 'bg-amber-100 text-amber-700 border border-amber-200',
    ringCls: 'border-amber-200',
    mockExams: 10,
    aiChat: true,
    aiChatLabel: 'Unlimited AI Chat',
    community: 'private',
    coaching: '90-min',
    supportLevel: 'VIP Priority',
    lifetime: false,
    upgradeTo: null,
  },
}

const UPGRADE_LABELS: Record<string, string> = {
  pro: 'Upgrade to Pro',
  all_access: 'Upgrade to Elite',
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [profileRes, purchasesRes, attemptsRes] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('purchases').select('*, courses(*)').eq('user_id', user.id),
    supabase
      .from('exam_attempts')
      .select('*, exam_sets(title)')
      .eq('user_id', user.id)
      .not('completed_at', 'is', null)
      .order('started_at', { ascending: false })
      .limit(5),
  ])

  const profile = profileRes.data as Profile | null
  const purchases = purchasesRes.data as PurchaseWithCourse[] | null
  const attempts = attemptsRes.data as ExamAttemptWithSet[] | null

  const avgScore = attempts?.length
    ? Math.round(attempts.reduce((s, a) => s + (a.score_pct ?? 0), 0) / attempts.length)
    : 0
  const passRate = attempts?.length
    ? Math.round((attempts.filter(a => a.passed).length / attempts.length) * 100)
    : 0

  // Highest plan across all purchases
  const highestPlan = purchases?.reduce((best, p) => {
    return PLAN_ORDER.indexOf(p.plan) > PLAN_ORDER.indexOf(best) ? p.plan : best
  }, 'starter') ?? 'starter'

  const plan = PLANS[highestPlan] ?? PLANS.starter
  const firstName = profile?.full_name?.split(' ')[0] || user.email?.split('@')[0] || 'there'

  const hasCourses = (purchases?.length ?? 0) > 0

  return (
    <div className="space-y-8">

      {/* ── Header ── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-900">Welcome back, {firstName} 👋</h1>
          <div className="flex items-center gap-2 mt-1.5">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${plan.badgeCls}`}>
              {plan.label} Member
            </span>
            <span className="text-slate-400 text-xs">{plan.tagline}</span>
            {plan.lifetime && (
              <span className="text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full">
                ♾ Lifetime Access
              </span>
            )}
          </div>
        </div>
        {plan.upgradeTo && (
          <Link
            href="/#pricing"
            className="text-xs font-bold px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            {UPGRADE_LABELS[plan.upgradeTo]} ↗
          </Link>
        )}
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Exams Taken', value: attempts?.length ?? 0, icon: '📝' },
          { label: 'Avg Score',   value: attempts?.length ? `${avgScore}%` : '—', icon: '📊' },
          { label: 'Pass Rate',   value: attempts?.length ? `${passRate}%` : '—', icon: '✅' },
          { label: 'Dumps',       value: purchases?.length ?? 0, icon: '📚' },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-base">{icon}</span>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{label}</div>
            </div>
            <div className="text-3xl font-black text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      {/* ── Plan Benefits bar ── */}
      <div className={`border rounded-2xl p-5 ${plan.ringCls} bg-white`}>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-black text-slate-900 text-sm">Your Plan Includes</h2>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${plan.badgeCls}`}>{plan.label}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

          {/* Mock Exams */}
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="text-xl mb-1">📝</div>
            <div className="font-black text-slate-900 text-sm">{plan.mockExams} Mock Exam{plan.mockExams > 1 ? 's' : ''}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Timed · Auto-graded</div>
          </div>

          {/* AI Chat */}
          <div className={`rounded-xl p-3 ${plan.aiChat ? 'bg-sky-50' : 'bg-slate-50 opacity-60'}`}>
            <div className="text-xl mb-1">{plan.aiChat ? '🤖' : '🔒'}</div>
            <div className={`font-black text-sm ${plan.aiChat ? 'text-sky-700' : 'text-slate-400'}`}>
              {plan.aiChat ? plan.aiChatLabel : 'AI Chat'}
            </div>
            {plan.aiChat ? (
              <div className="text-[10px] text-sky-500 mt-0.5">Powered by Gemini</div>
            ) : (
              <div className="text-[10px] text-slate-400 mt-0.5">
                <Link href="/#pricing" className="hover:text-sky-500 transition-colors">Upgrade to Pro →</Link>
              </div>
            )}
          </div>

          {/* Community */}
          <div className={`rounded-xl p-3 ${plan.community !== 'none' ? 'bg-emerald-50' : 'bg-slate-50 opacity-60'}`}>
            <div className="text-xl mb-1">{plan.community !== 'none' ? '👥' : '🔒'}</div>
            <div className={`font-black text-sm ${plan.community !== 'none' ? 'text-emerald-700' : 'text-slate-400'}`}>
              {plan.community === 'private' ? 'Private Community' : plan.community === 'public' ? 'Public Community' : 'Community'}
            </div>
            {plan.community !== 'none' ? (
              <div className="text-[10px] text-emerald-600 mt-0.5 capitalize">{plan.community} access</div>
            ) : (
              <div className="text-[10px] text-slate-400 mt-0.5">
                <Link href="/#pricing" className="hover:text-sky-500 transition-colors">Upgrade to Pro →</Link>
              </div>
            )}
          </div>

          {/* Coaching */}
          <div className={`rounded-xl p-3 ${plan.coaching ? 'bg-violet-50' : 'bg-slate-50 opacity-60'}`}>
            <div className="text-xl mb-1">{plan.coaching ? '🎓' : '🔒'}</div>
            <div className={`font-black text-sm ${plan.coaching ? 'text-violet-700' : 'text-slate-400'}`}>
              {plan.coaching === '30-min' ? '30-Min Coaching'
               : plan.coaching === '60-min' ? '1-Hour Coaching'
               : '1-to-1 Coaching'}
            </div>
            {plan.coaching ? (
              <Link href="/coaching/book?package=quick-session" className="text-[10px] text-violet-500 mt-0.5 hover:text-violet-700 transition-colors block">
                Book session →
              </Link>
            ) : (
              <div className="text-[10px] text-slate-400 mt-0.5">
                <Link href="/#pricing" className="hover:text-sky-500 transition-colors">Upgrade to Platinum →</Link>
              </div>
            )}
          </div>

          {/* Support */}
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="text-xl mb-1">🛟</div>
            <div className="font-black text-slate-900 text-sm">{plan.supportLevel}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              {plan.supportLevel.includes('Priority') ? 'Priority response' : 'Standard support'}
            </div>
          </div>

        </div>
      </div>

      {/* ── Main content + AI Chat ── */}
      <div className={`grid gap-8 ${plan.aiChat ? 'grid-cols-1 xl:grid-cols-3' : 'grid-cols-1'}`}>

        {/* Left: Courses + Results */}
        <div className={plan.aiChat ? 'xl:col-span-2 space-y-8' : 'space-y-8'}>

          {/* My Dumps */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-black text-slate-900">My Dumps</h2>
              <Link href="/dashboard/courses" className="text-xs text-sky-500 font-semibold hover:text-sky-700">
                View all →
              </Link>
            </div>

            {hasCourses ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {purchases!.slice(0, 4).map(p => {
                  const pPlan = PLANS[p.plan] ?? PLANS.starter
                  return (
                    <div key={p.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                      <div className="h-1.5" style={{ background: p.courses?.brand_color ?? '#0ea5e9' }} />
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                            style={{ background: p.courses?.brand_color ?? '#0ea5e9' }}
                          >
                            {(p.courses?.title ?? '??').slice(0, 2)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-black text-sm text-slate-900 truncate">{p.courses?.title ?? 'Unknown'}</div>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${pPlan.badgeCls}`}>
                              {pPlan.label} · {pPlan.mockExams} exam{pPlan.mockExams > 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Link href={`/study/${p.course_id}`}
                            className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-lg transition-colors">
                            <span>📖</span> Take Dump
                          </Link>
                          <Link href={`/exam/${p.course_id}`}
                            className="flex items-center justify-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
                            <span>📝</span> Mock Exam
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
                <p className="text-slate-400 text-sm mb-4">No dumps yet. Purchase a dump to get started.</p>
                <Link href="/#pricing" className="bg-sky-500 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-sky-600 transition-colors">
                  Browse Dumps
                </Link>
              </div>
            )}
          </div>

          {/* Recent Results */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-black text-slate-900">Recent Exam Results</h2>
              <Link href="/dashboard/results" className="text-xs text-sky-500 font-semibold hover:text-sky-700">
                Full history →
              </Link>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {attempts && attempts.length > 0 ? (
                attempts.map(a => (
                  <div key={a.id} className="flex items-center gap-4 px-5 py-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <span className={`text-sm font-black px-2.5 py-1 rounded-lg min-w-[52px] text-center flex-shrink-0 ${
                      a.passed ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                    }`}>
                      {a.score_pct != null ? `${Math.round(a.score_pct)}%` : '—'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 truncate">{a.exam_sets?.title ?? 'Unknown Exam'}</div>
                      <div className="text-xs text-slate-400">{a.passed ? '✓ Passed' : '✗ Failed'} · {a.mode} mode</div>
                    </div>
                    <Link href={`/results/${a.id}`} className="text-xs text-sky-500 font-semibold flex-shrink-0 hover:text-sky-700">
                      Review →
                    </Link>
                  </div>
                ))
              ) : (
                <div className="px-5 py-8 text-center">
                  <p className="text-slate-400 text-sm mb-3">No exam results yet.</p>
                  {hasCourses && (
                    <Link href="/exam" className="text-sky-500 text-sm font-semibold hover:text-sky-700">
                      Take your first mock exam →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right: AI Chat (Pro/Platinum/All-Access) */}
        {plan.aiChat ? (
          <div className="xl:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-base font-black text-slate-900">AI Study Assistant</h2>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${plan.badgeCls}`}>
                {plan.aiChatLabel}
              </span>
            </div>
            <AIChatWidget
              initialMessage={`Hi ${firstName}! I'm your Gemini AI Study Assistant. I can help you master certification topics, explain complex concepts, quiz you, or analyze your weak areas. What are you studying today?`}
            />
          </div>
        ) : (
          /* Starter: locked AI chat teaser */
          <div className="xl:col-span-1">
            <h2 className="text-base font-black text-slate-900 mb-3">AI Study Assistant</h2>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-sky-500 to-violet-600 p-6 text-white text-center">
                <div className="text-4xl mb-3">🤖</div>
                <div className="font-black text-lg">Gemini AI Chat</div>
                <p className="text-sky-100 text-sm mt-1">Get personalized study help, concept explanations, and practice quizzes</p>
              </div>
              <div className="p-5">
                <div className="space-y-2.5 mb-5">
                  {[
                    'Explain any concept instantly',
                    'Quiz yourself on weak areas',
                    'Get domain-specific study tips',
                    'Ask about your exam results',
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-sky-500 flex-shrink-0">✓</span> {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/#pricing"
                  className="w-full block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors"
                >
                  Upgrade to Pro to unlock
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── Extra features row (community + coaching) ── */}
      {(plan.community !== 'none' || plan.coaching) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Community */}
          {plan.community !== 'none' && (
            <div className="bg-white border border-emerald-100 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">👥</div>
                <div>
                  <div className="font-black text-slate-900 text-sm">
                    {plan.community === 'private' ? 'Private Community' : 'Public Community'}
                  </div>
                  <div className="text-xs text-slate-500">
                    {plan.community === 'private'
                      ? 'Exclusive access for Platinum & All-Access members'
                      : 'Join the Pro members community'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {plan.community === 'private' && (
                  <span className="text-[10px] font-bold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">Private</span>
                )}
                <a
                  href="#community"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  Access community →
                </a>
              </div>
            </div>
          )}

          {/* Coaching */}
          {plan.coaching && (
            <div className="bg-white border border-violet-100 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-xl">🎓</div>
                <div>
                  <div className="font-black text-slate-900 text-sm">
                    1-to-1 Coaching — {plan.coaching === '30-min' ? '30 minutes' : '1 hour'}
                  </div>
                  <div className="text-xs text-slate-500">
                    {plan.coaching === '60-min'
                      ? 'Full 1-hour deep dive session included'
                      : '30-min quick session with an expert coach'}
                  </div>
                </div>
              </div>
              <Link
                href={`/coaching/book?package=${plan.coaching === '60-min' ? 'deep-dive' : 'quick-session'}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors"
              >
                Book your session →
              </Link>
            </div>
          )}

        </div>
      )}

    </div>
  )
}
