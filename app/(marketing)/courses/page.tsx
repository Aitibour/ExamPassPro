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
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-800 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1280&fit=crop"
            alt="IT Certification Exam Prep"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-orange-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Dumps</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">All Certification Dumps</h1>
          <p className="text-orange-100 text-base max-w-2xl">
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
