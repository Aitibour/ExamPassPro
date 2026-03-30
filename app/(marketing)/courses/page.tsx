import Link from 'next/link'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { CourseGrid } from '@/components/courses/CourseGrid'
import { FALLBACK_COURSES } from '@/lib/courses-data'
import type { Course } from '@/lib/supabase/database.types'

export const metadata: Metadata = {
  title: 'IT Certification Exam Dumps & Practice Tests — ExamPassPro',
  description: 'Browse 40+ IT certification exam prep courses with real exam-style questions, mock exams, and guaranteed results. CompTIA, Cisco, Microsoft, AWS and more.',
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'IT Certification Exam Dumps & Practice Tests',
    description: 'Browse 40+ IT certification exam prep courses with real exam-style questions and mock exams.',
    url: 'https://exampasspro.com/courses',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT Certification Courses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Certification Exam Dumps & Practice Tests',
    description: 'Browse 40+ IT certification exam prep courses with real exam-style questions.',
  },
}

export default async function CoursesPage() {
  const supabase = await createClient()
  const { data: coursesRaw } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true)
    .order('enrolled_count', { ascending: false })
    .limit(40)

  const courses = coursesRaw as Course[] | null
  const displayCourses = courses && courses.length >= 40 ? courses : FALLBACK_COURSES

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-200">Dumps</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">All Certification Dumps</h1>
          <p className="text-slate-400 text-base max-w-2xl">
            {displayCourses.length} IT certification dumps with real exam-style questions, mock exams, and AI-powered study assistance.
          </p>
        </div>
      </section>

      {/* Course grid */}
      <div className="py-12">
        <CourseGrid courses={displayCourses} />
      </div>
    </div>
  )
}
