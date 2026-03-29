import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { CourseCard } from '@/components/courses/CourseCard'
import { PartnerLogo } from '@/components/courses/CourseLogo'
import { FALLBACK_COURSES } from '@/lib/courses-data'
import type { Course } from '@/lib/supabase/database.types'

const TOTAL_COURSES = 40

const TESTIMONIALS = [
  { name: 'Marcus Rivera', role: 'Cloud Engineer', text: 'Passed AWS SAA on the first attempt! The mock exams are incredibly realistic.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80' },
  { name: 'Sarah Chen', role: 'IT Manager', text: 'The AI study assistant is a game changer. It pinpointed my weak domains instantly.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80' },
  { name: 'James Wilson', role: 'DevOps Lead', text: 'Got my CKA and CCNA in the same month. The study mode explanations are excellent.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80' },
  { name: 'Priya Sharma', role: 'Cloud Architect', text: 'Azure AZ-900 was a breeze. The domain breakdown helped me focus my study time.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80' },
  { name: 'David Kim', role: 'Security Analyst', text: 'Security+ certified! The explanations for every wrong answer are invaluable.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80' },
  { name: 'Emma Johnson', role: 'SRE', text: 'Terraform Associate passed first try. The question bank is massive and very current.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80' },
  { name: 'Carlos Martinez', role: 'Network Engineer', text: 'CCNA 200-301 done! The timed exams prepare you perfectly for the real thing.', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&q=80' },
  { name: 'Aisha Patel', role: 'IT Consultant', text: 'ITIL 4 passed with distinction. The study mode is perfect for building confidence.', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&q=80' },
  { name: 'Tom Bradley', role: 'Platform Engineer', text: 'VCP-DCV certified in 3 weeks. The AI chat explained every concept I was unsure about.', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&q=80' },
  { name: 'Lisa Wang', role: 'Solutions Architect', text: 'Google ACE done! The 100% pass guarantee gave me the confidence to invest.', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&q=80' },
]

const PARTNERS = [
  { name: 'ServiceNow', logoSlug: 'servicenow' },
  { name: 'Amazon AWS', logoSlug: 'aws' },
  { name: 'Microsoft Azure', logoSlug: 'azure' },
  { name: 'Google Cloud', logoSlug: 'googlecloud' },
  { name: 'VMware', logoSlug: 'vmware' },
  { name: 'Cisco', logoSlug: 'cisco' },
  { name: 'CompTIA', logoSlug: 'comptia' },
  { name: 'HashiCorp', logoSlug: 'hashicorp' },
]

const PRICING_PLANS = [
  {
    key: 'free', name: 'Free', price: 0, period: ' forever',
    subline: 'Try before you buy',
    features: [
      '🎯  1 mock exam — 30 questions',
      '📖  1 practice exam — 30 questions',
      '💡  Instant answer explanations',
    ],
    cta: 'Start Free — No Card',
    href: '/register',
    highlight: false,
  },
  {
    key: 'starter', name: 'Core', price: 39, period: ' one-time',
    subline: 'Pass your first cert',
    features: [
      '🧪  2 mock exams — 60Q each · timed',
      '📖  2 practice exams with explanations',
      '🤖  Gemini AI study assistant',
      '📊  Score report & domain breakdown',
      '✅  Instant corrections',
    ],
    cta: 'Get Core — $39',
    href: '/checkout?plan=starter',
    highlight: false,
  },
  {
    key: 'pro', name: 'Pro', price: 99, period: ' one-time',
    subline: 'Exam-ready in weeks',
    features: [
      '🧪  4 mock exams — 60Q each · timed',
      '📖  4 practice exams with explanations',
      '🎓  1× 60-min 1:1 coaching (worth $99)',
      '🤖  Unlimited Gemini AI assistant',
      '📊  Performance analytics',
      '🏆  Priority support',
    ],
    cta: 'Get Pro — $99',
    href: '/checkout?plan=pro',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    key: 'all_access', name: 'Elite', price: 199, period: ' one-time',
    subline: '100% Pass Guarantee',
    features: [
      '🧪  10 mock exams — full question bank',
      '📖  10 practice exams with explanations',
      '🎓  1× 90-min 1:1 coaching (worth $149)',
      '🤖  Unlimited Gemini AI assistant',
      '📊  Full performance analytics',
      '🛡️  100% Pass Guarantee or full refund',
    ],
    cta: 'Get Elite — $199',
    href: '/checkout?plan=all_access',
    highlight: false,
    badge: 'Best Value',
  },
]

export default async function HomePage() {
  const supabase = await createClient()
  const { data: coursesRaw } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true)
    .order('enrolled_count', { ascending: false })
    .limit(10)

  const courses = coursesRaw as Course[] | null
  const displayCourses = FALLBACK_COURSES.slice(0, 10)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        {/* Video background */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://eahvn7qpmxkqatpm.public.blob.vercel-storage.com/Homepage_Video_-_New_Year_2026_-_Final_-_NoCTA_-_wHeader_-_noCC.mp4"
          style={{ objectFit: 'cover' }}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-7">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                98.2% Pass Rate
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-3 py-1.5 rounded-full">
                12,400+ Certified Professionals
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Pass Your IT Certification <span className="text-sky-400">First Try</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Real exam-style questions, timed mock exams, Gemini AI assistant, and a <strong className="text-white">100% Pass or 100% Refund</strong> guarantee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#pricing"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg">
                Get Started →
              </Link>
              <Link href="#courses"
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-colors">
                Browse Dumps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '12,400+', label: 'IT Professionals Certified' },
            { value: '8,700+', label: 'Exam-Style Questions' },
            { value: '98.2%', label: 'First Attempt Pass Rate' },
            { value: '100%', label: 'Pass Guarantee' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses — featured 10 */}
      <div id="courses" className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Top Certification Dumps</h2>
              <p className="text-slate-500 text-sm mt-1">Industry-leading practice exams and real exam-style questions</p>
            </div>
            <Link href="/courses" className="text-sky-600 hover:text-sky-700 text-sm font-bold flex items-center gap-1 whitespace-nowrap">
              View all {TOTAL_COURSES} dumps →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {displayCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} rank={i + 1} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Browse All {TOTAL_COURSES} Dumps
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 text-base">One-time payment per course. No subscription, no recurring fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map(plan => (
              <div
                key={plan.key}
                className={`relative rounded-2xl p-7 flex flex-col border ${
                  plan.highlight
                    ? 'border-sky-500 bg-sky-50 shadow-lg shadow-sky-100'
                    : plan.key === 'free'
                    ? 'border-slate-200 bg-slate-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                    plan.highlight ? 'bg-sky-500 text-white' : 'bg-violet-600 text-white'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="font-black text-slate-900 text-xl mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-3">{(plan as any).subline}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${plan.key === 'free' ? 'text-slate-400' : 'text-slate-900'}`}>
                      {plan.key === 'free' ? 'Free' : `$${plan.price}`}
                    </span>
                    {plan.key !== 'free' && (
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="text-sm text-slate-600 leading-snug">{f}</li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-colors ${
                    plan.highlight
                      ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-100'
                      : plan.key === 'all_access'
                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                      : plan.key === 'free'
                      ? 'border border-slate-300 hover:bg-slate-100 text-slate-600'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Elite includes a <strong className="text-slate-600">100% Pass Guarantee</strong> — pass your exam or get a full refund. Coaching sessions worth up to <strong className="text-slate-600">$149</strong> included in Pro & Elite.
          </p>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-slate-50 py-14 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">
            Content Aligned With Official Certification Bodies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
            {PARTNERS.map(p => (
              <div key={p.name} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="h-10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                  <PartnerLogo slug={p.logoSlug} size={44} />
                </div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider group-hover:text-slate-600 transition-colors">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-2">What Our Students Say</h2>
          <p className="text-slate-500 text-center text-sm">Join thousands of professionals who passed with ExamPassPro</p>
        </div>
        <div className="relative">
          <div className="flex gap-5 animate-[slide-left_40s_linear_infinite] w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 w-80 flex-shrink-0 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sky-500 py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Pass Your Certification?</h2>
          <p className="text-sky-100 text-base mb-8">
            Join 12,400+ professionals. 100% Pass Guarantee — or your money back.
          </p>
          <Link
            href="/register"
            className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-10 py-4 rounded-xl text-base transition-colors shadow-lg inline-block"
          >
            Start Free Today →
          </Link>
        </div>
      </section>
    </>
  )
}
