'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// ── Plan display config ───────────────────────────────────────────────────────

const PLAN_META: Record<string, { label: string; icon: string; color: string; note: string }> = {
  free:       { label: 'Free',       icon: '🎯', color: 'text-slate-300',  note: '1 mock exam (30Q) + 1 practice exam (30Q)' },
  starter:    { label: 'Starter',    icon: '🚀', color: 'text-sky-400',    note: '1 mock exam (60Q) + 1 practice exam' },
  pro:        { label: 'Pro',        icon: '⚡', color: 'text-violet-400', note: '3 mock exams (180Q) + 3 practice exams + AI chat' },
  all_access: { label: 'All-Access', icon: '👑', color: 'text-amber-400',  note: '10 mock exams + 10 practice exams + 30-min coaching' },
}

interface Course {
  id: string
  slug: string
  title: string
  description: string | null
  brand_color: string
  enrolled_count: number
}

interface Props {
  courses: Course[]
  plan: string
  firstName: string
}

// ── Component ─────────────────────────────────────────────────────────────────

export function OnboardingCourseSelector({ courses, plan, firstName }: Props) {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const meta = PLAN_META[plan] ?? PLAN_META.free

  async function handleEnroll() {
    if (!selectedCourse) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/onboarding/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: selectedCourse, plan }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body as { error?: string }).error ?? 'Enrolment failed')
      }

      const { redirect: to } = await res.json() as { redirect: string }
      router.push(to)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4">

      {/* ── Logo ── */}
      <Link href="/" className="flex items-center gap-2.5 mb-10 no-underline">
        <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
            <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-black text-white text-lg">ExamPassPro</span>
      </Link>

      {/* ── Heading ── */}
      <div className="text-center mb-8 max-w-lg">
        <h1 className="text-2xl lg:text-3xl font-black text-white mb-3">
          Welcome, {firstName}! 🎉<br />
          <span className="text-sky-400">Choose your first dump</span>
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          You can enroll in <strong className="text-white">1 dump</strong> with your plan.
          Pick the certification you want to crush first.
        </p>

        {/* Plan badge */}
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
          <span className="text-base">{meta.icon}</span>
          <span className={`text-sm font-bold ${meta.color}`}>{meta.label} Plan</span>
          <span className="text-slate-400 text-xs">·</span>
          <span className="text-slate-300 text-xs">{meta.note}</span>
        </div>
      </div>

      {/* ── Course grid ── */}
      {courses.length === 0 ? (
        <div className="text-slate-400 text-sm text-center py-12">
          No dumps available yet. Check back soon!
        </div>
      ) : (
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {courses.map(course => {
            const isSelected = selectedCourse === course.id
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`relative text-left rounded-2xl border-2 p-5 transition-all focus:outline-none group ${
                  isSelected
                    ? 'border-sky-400 bg-white/15 shadow-lg shadow-sky-500/10 scale-[1.02]'
                    : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                {/* Color bar */}
                <div
                  className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white font-black text-sm"
                  style={{ backgroundColor: course.brand_color }}
                >
                  {course.title.slice(0, 2).toUpperCase()}
                </div>

                <h3 className="text-sm font-black text-white leading-tight mb-1">
                  {course.title}
                </h3>
                {course.description && (
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                )}
                <p className="text-[11px] text-slate-500 mt-2">
                  {course.enrolled_count.toLocaleString('en-US')} enrolled
                </p>

                {/* Selected checkmark */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <polyline points="2,5 4,7 8,3" stroke="white" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* ── Error ── */}
      {error && (
        <div className="mb-4 bg-red-500/20 border border-red-400/30 text-red-300 text-sm px-4 py-3 rounded-xl max-w-sm text-center">
          {error}
        </div>
      )}

      {/* ── CTA ── */}
      <button
        onClick={handleEnroll}
        disabled={!selectedCourse || loading}
        className="px-10 py-3.5 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 disabled:text-slate-400 text-white font-black rounded-xl text-sm transition-all shadow-lg shadow-sky-500/20 disabled:shadow-none"
      >
        {loading
          ? 'Enrolling…'
          : selectedCourse
            ? plan === 'free'
              ? 'Enroll & Start Learning →'
              : 'Continue to Checkout →'
            : 'Select a course above'}
      </button>

      {plan !== 'free' && selectedCourse && (
        <p className="text-slate-500 text-xs mt-3">
          You&apos;ll complete your one-time {PLAN_META[plan]?.label} payment on the next screen.
        </p>
      )}

      <p className="text-slate-600 text-xs mt-6">
        Want to explore first?{' '}
        <Link href="/courses" className="text-sky-500 hover:underline">Browse all dumps</Link>
      </p>
    </div>
  )
}
