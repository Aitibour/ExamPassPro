import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { CourseLogo } from '@/components/courses/CourseLogo'
import type { Course } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ slug: string }>
}

const PLAN_FEATURES = {
  starter: ['1 Mock exam (100% real questions)', '+30 extra questions', 'Score tracking & history', 'Study mode with explanations', 'Level 1 Support'],
  pro: ['2 Mock exams', '+60 extra questions', 'Gemini AI Chat', 'Public community access', 'Level 1 Support'],
  platinum: ['5 Mock exams', '+150 extra questions', 'Unlimited AI Chat', 'Private community', '30-min coaching', 'Level 2 + Priority Support'],
  all_access: ['10 Mock exams', '+300 extra questions', 'Unlimited AI Chat forever', 'Private community', '1-hour coaching', 'Level 3 + Priority Support', 'Lifetime access'],
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: courseRaw } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  const course = courseRaw as Course | null
  if (!course) notFound()

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
      {/* Header */}
      <div className="flex items-start gap-8 mb-12">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: course.brand_color }}
        >
          <CourseLogo slug={course.slug} size={48} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-black text-slate-900 mb-2">{course.title}</h1>
          <p className="text-slate-500 text-base leading-relaxed mb-4">{course.description}</p>
          <div className="flex gap-4 text-sm">
            <span className="text-slate-600"><strong className="text-slate-900">{course.enrolled_count.toLocaleString()}</strong> enrolled</span>
            <span className="text-slate-600"><strong className="text-slate-900">850+</strong> questions</span>
            <span className="text-slate-600"><strong className="text-slate-900">5</strong> mock exams</span>
          </div>
        </div>
      </div>

      {/* Plans */}
      <h2 className="text-xl font-black text-slate-900 mb-6">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {(Object.entries(PLAN_FEATURES) as [keyof typeof PLAN_FEATURES, string[]][]).map(([key, features], i) => {
          const prices = { starter: 19, pro: 49, platinum: 99, all_access: 199 }
          const labels = { starter: 'Starter', pro: 'Pro', platinum: 'Platinum', all_access: 'All-Access' }
          const periods = { starter: '/mo', pro: '/mo', platinum: '/mo', all_access: ' one-time' }
          const isPlatinum = key === 'platinum'

          return (
            <div key={key} className={`rounded-2xl p-6 border flex flex-col ${isPlatinum ? 'border-sky-500 bg-sky-50 shadow-md' : 'border-slate-200 bg-white'}`}>
              {isPlatinum && (
                <div className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-3">Most Popular</div>
              )}
              <div className="mb-4">
                <div className="font-black text-slate-900">{labels[key]}</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black">${prices[key]}</span>
                  <span className="text-slate-500 text-sm">{periods[key]}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 flex-1 text-sm text-slate-600">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/register?plan=${key}&course=${course.id}`}
                className={`w-full py-2.5 rounded-xl text-sm font-bold text-center transition-colors ${
                  isPlatinum
                    ? 'bg-sky-500 hover:bg-sky-600 text-white'
                    : 'border border-slate-200 hover:bg-slate-50 text-slate-800'
                }`}
              >
                Get {labels[key]}
              </Link>
            </div>
          )
        })}
      </div>

      <p className="text-center text-slate-400 text-sm mt-6">
        100% Pass Guarantee — pass your exam or get a full refund.
      </p>
    </div>
  )
}
