'use client'
import { useState } from 'react'
import { CourseCard } from './CourseCard'
import type { Course } from '@/lib/supabase/database.types'

type SortKey = 'enrolled_count' | 'created_at' | 'price_cents' | 'title'

export function CourseGrid({ courses: initial }: { courses: Course[] }) {
  const [sort, setSort] = useState<SortKey>('enrolled_count')
  const [search, setSearch] = useState('')

  const sorted = [...initial]
    .filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title)
      if (sort === 'price_cents') return a.price_cents - b.price_cents
      if (sort === 'created_at') return b.created_at.localeCompare(a.created_at)
      return b.enrolled_count - a.enrolled_count
    })

  return (
    <section id="courses" className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Top 10 Certification Courses</h2>
          <p className="text-slate-500 text-sm mt-1">Industry-leading practice exams, real exam-style questions</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 min-w-[200px]">
            <svg width="13" height="13" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search certifications..."
              className="text-sm outline-none text-slate-700 bg-transparent w-full"
            />
          </div>
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortKey)}
              className="appearance-none bg-white border border-slate-200 rounded-lg px-3 py-2 pr-8 text-sm font-semibold text-slate-700 outline-none cursor-pointer min-w-[160px]"
            >
              <option value="enrolled_count">Most Downloaded</option>
              <option value="created_at">Latest Added</option>
              <option value="price_cents">Lowest Price</option>
              <option value="title">A to Z</option>
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▾</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      {sorted.length === 0 ? (
        <div className="text-center py-16 text-slate-400">No courses match your search.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {sorted.map((course, i) => (
            <CourseCard key={course.id} course={course} rank={i + 1} />
          ))}
        </div>
      )}
    </section>
  )
}
