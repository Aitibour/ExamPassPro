import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { CourseLogo } from '@/components/courses/CourseLogo'
import { FALLBACK_COURSES } from '@/lib/courses-data'
import { PLAN_FEATURES, PLAN_PRICES } from '@/lib/stripe'
import type { Course } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ slug: string }>
}

const COURSE_PLANS = [
  { key: 'free',       label: 'Free',  highlight: false, badge: null,           cta: 'Try Free',    href: (_id: string) => '/register' },
  { key: 'starter',    label: 'Core',  highlight: false, badge: null,           cta: 'Get Core',    href: (_id: string) => 'https://www.paypal.com/ncp/payment/JGTBB6BGVAMC4' },
  { key: 'pro',        label: 'Pro',   highlight: true,  badge: 'Most Popular', cta: 'Get Pro',     href: (_id: string) => 'https://www.paypal.com/ncp/payment/A8CVSX89BYWZS' },
  { key: 'all_access', label: 'Elite', highlight: false, badge: 'Best Value',   cta: 'Get Elite',   href: (_id: string) => 'https://www.paypal.com/ncp/payment/RYY4VR2HE4RG6' },
]


export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: courseRaw } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  const course = (courseRaw as Course | null) ?? FALLBACK_COURSES.find(c => c.slug === slug) ?? null
  if (!course) notFound()

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: course.brand_color }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/courses" className="hover:text-white/90 transition-colors">Dumps</Link>
            <span>›</span>
            <span className="text-white/90">{course.title}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/15 backdrop-blur-sm p-4">
              <CourseLogo slug={course.slug} fill />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-2">{course.title}</h1>
              <p className="text-white/80 text-lg mb-5">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-white/15 text-white px-3 py-1.5 rounded-lg font-semibold">
                  {course.enrolled_count.toLocaleString()}+ enrolled
                </span>
                <span className="bg-white/15 text-white px-3 py-1.5 rounded-lg font-semibold">60 questions / exam</span>
                <span className="bg-white/15 text-white px-3 py-1.5 rounded-lg font-semibold">Up to 10 mock exams</span>
                <span className="bg-green-500/30 border border-green-400/40 text-green-200 px-3 py-1.5 rounded-lg font-semibold">
                  ✓ Pass Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Choose Your Plan</h2>
            <p className="text-slate-500 text-sm">One-time payment · Instant access · 100% Pass Guarantee</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COURSE_PLANS.map(plan => {
              const features = PLAN_FEATURES[plan.key] ?? []
              const price    = PLAN_PRICES[plan.key]
              return (
                <div
                  key={plan.key}
                  className={`relative rounded-2xl p-6 border flex flex-col ${
                    plan.highlight
                      ? 'border-sky-500 bg-white shadow-lg shadow-sky-100'
                      : plan.key === 'free'
                      ? 'border-slate-200 bg-slate-50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                      plan.highlight ? 'bg-sky-500 text-white' : 'bg-violet-600 text-white'
                    }`}>
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="font-black text-slate-900">{plan.label}</div>
                    <div className="flex items-baseline gap-1 mt-1">
                      {plan.key === 'free' ? (
                        <span className="text-3xl font-black text-slate-400">Free</span>
                      ) : (
                        <>
                          <span className="text-3xl font-black">${price / 100}</span>
                          <span className="text-slate-500 text-sm"> one-time</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1 text-sm text-slate-600">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2">
                        <span className={`font-bold flex-shrink-0 mt-0.5 ${plan.key === 'free' ? 'text-slate-400' : 'text-green-500'}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href(course.id)}
                    className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-colors ${
                      plan.highlight
                        ? 'bg-sky-500 hover:bg-sky-600 text-white'
                        : plan.key === 'free'
                        ? 'border border-slate-300 hover:bg-slate-100 text-slate-600'
                        : 'border border-slate-200 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              )
            })}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            Elite includes a <strong className="text-slate-600">100% Pass Guarantee</strong> — pass your exam or get a full refund.
          </p>
        </div>
      </section>

      {/* Already have access */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-10">
        <div className="bg-slate-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-black text-white text-lg">Already enrolled?</div>
            <div className="text-slate-400 text-sm mt-0.5">Sign in to access your mock exams and study materials.</div>
          </div>
          <Link
            href="/login"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm flex-shrink-0"
          >
            Sign In →
          </Link>
        </div>
      </section>
    </div>
  )
}
