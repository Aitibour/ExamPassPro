import Link from 'next/link'
import type { Course } from '@/lib/supabase/database.types'
import { CourseLogo } from './CourseLogo'

export function CourseCard({ course, rank }: { course: Course; rank: number }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="relative rounded-xl overflow-hidden aspect-[4/3] group block no-underline
        shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
    >
      {/* Brand color background */}
      <div className="absolute inset-0" style={{ background: course.brand_color }} />

      {/* Tech logo — fills card */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <CourseLogo slug={course.slug} fill />
      </div>

      {/* Rank badge */}
      <div className="absolute top-2.5 left-2.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full z-10">
        #{rank}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-3.5 py-2.5">
        <div className="text-white font-black text-sm leading-tight">{course.title}</div>
        <div className="flex justify-end items-center mt-1">
          <span className="text-white/75 text-[10px] font-semibold">
            {course.enrolled_count.toLocaleString('en-US')} enrolled
          </span>
        </div>
      </div>
    </Link>
  )
}
