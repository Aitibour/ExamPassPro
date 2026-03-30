import Link from 'next/link'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { LabsGrid } from '@/components/labs/LabsGrid'
import { FALLBACK_COURSES } from '@/lib/courses-data'
import type { Course, Purchase } from '@/lib/supabase/database.types'

export const metadata: Metadata = {
  title: 'Certification Practice Labs — Hands-On Learning — ExamPassPro',
  description: 'Practice exam labs with mock exams, study mode, and AI tutor assistance. Master IT certifications with hands-on practice tests.',
  alternates: {
    canonical: '/labs',
  },
  openGraph: {
    title: 'Certification Practice Labs',
    description: 'Practice exam labs with mock exams, study mode, and AI tutor assistance for IT certifications.',
    url: 'https://exampasspro.com/labs',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Practice Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certification Practice Labs',
    description: 'Practice with mock exams, study mode, and AI tutor assistance.',
  },
}

export default async function LabsPage() {
  const supabase = await createClient()

  // Courses (all 40 certifications)
  const { data: coursesRaw } = await supabase
    .from('courses')
    .select('*')
    .order('enrolled_count', { ascending: false })
    .limit(40)

  // Use DB courses if available + fill with fallback to ensure 40 total
  const dbCourses = (coursesRaw as Course[] | null) ?? []
  const courseSlugs = new Set(dbCourses.map(c => c.slug))
  const fallbackCourses = FALLBACK_COURSES.filter(c => !courseSlugs.has(c.slug))
  const courses = [...dbCourses, ...fallbackCourses].slice(0, 40)

  // Current user + purchases (graceful — no error if not logged in)
  const { data: { user } } = await supabase.auth.getUser()
  let ownedCourseIds = new Set<string>()
  let ownedPlans: Record<string, string> = {}
  if (user) {
    const { data: purchasesRaw } = await supabase
      .from('purchases')
      .select('course_id, plan')
      .eq('user_id', user.id)
    const purchases = purchasesRaw as Pick<Purchase, 'course_id' | 'plan'>[] | null
    if (purchases) {
      purchases.forEach(p => {
        ownedCourseIds.add(p.course_id)
        ownedPlans[p.course_id] = p.plan
      })
    }
  }

  const displayCourses = courses.length > 0 ? courses : FALLBACK_COURSES

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1280&fit=crop"
            alt="Certification Practice Labs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-indigo-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Labs</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">Certification Practice Labs</h1>
          <p className="text-indigo-100 text-base max-w-2xl">
            {displayCourses.length} hands-on practice labs with mock exams, study mode with AI explanations, and domain score tracking.
          </p>
        </div>
      </section>

      {/* Labs grid */}
      <div className="py-12">
        <LabsGrid courses={displayCourses} ownedCourseIds={ownedCourseIds} ownedPlans={ownedPlans} />
      </div>

      {/* CTA banner */}
      {!user && (
        <section className="bg-sky-500 py-12 px-6 text-center">
          <h2 className="text-xl font-black text-white mb-2">Ready to start practicing?</h2>
          <p className="text-sky-100 text-sm mb-5">Register free and choose a plan to unlock mock exams and study labs.</p>
          <Link href="/register" className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-8 py-3 rounded-xl text-sm transition-colors inline-block">
            Get Started Free →
          </Link>
        </section>
      )}
    </div>
  )
}
