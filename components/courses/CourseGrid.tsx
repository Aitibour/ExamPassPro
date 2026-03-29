'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CourseCard } from './CourseCard'
import { CourseLogo } from './CourseLogo'
import type { Course } from '@/lib/supabase/database.types'

// ── 10 brand sections ──────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 1, name: 'ServiceNow',         slug: 'servicenow-csa',  color: '#3d9b3d',
    filter: (s: string) => s.startsWith('servicenow-'),
  },
  {
    id: 2, name: 'Amazon AWS',         slug: 'aws-saa-c03',     color: '#232f3e',
    filter: (s: string) => s.startsWith('aws-'),
  },
  {
    id: 3, name: 'Microsoft Azure',    slug: 'azure-az-900',    color: '#0078d4',
    filter: (s: string) => s.startsWith('azure-') || s.startsWith('microsoft-'),
  },
  {
    id: 4, name: 'Google Cloud',       slug: 'google-cloud-ace', color: '#1a73e8',
    filter: (s: string) => s.startsWith('google-'),
  },
  {
    id: 5, name: 'CompTIA',            slug: 'comptia-security-plus', color: '#c0392b',
    filter: (s: string) => s.startsWith('comptia-'),
  },
  {
    id: 6, name: 'Cisco',             slug: 'cisco-ccna',       color: '#1ba0d7',
    filter: (s: string) => s.startsWith('cisco-'),
  },
  {
    id: 7, name: 'Kubernetes',        slug: 'kubernetes-cka',   color: '#326ce5',
    filter: (s: string) => s.startsWith('kubernetes-'),
  },
  {
    id: 8, name: 'HashiCorp',         slug: 'hashicorp-terraform', color: '#7B42BC',
    filter: (s: string) => s.startsWith('hashicorp-'),
  },
  {
    id: 9, name: 'VMware & Security', slug: 'vmware-vcp-dcv',  color: '#607078',
    filter: (s: string) => s.startsWith('vmware-') || s.startsWith('fortinet-'),
  },
  {
    id: 10, name: 'ITSM & Project Mgmt', slug: 'itil-4-foundation', color: '#8b2fc9',
    filter: (s: string) =>
      !['servicenow-','aws-','azure-','microsoft-','google-','comptia-','cisco-','kubernetes-','hashicorp-','vmware-','fortinet-']
        .some(p => s.startsWith(p)),
  },
]

export function CourseGrid({ courses }: { courses: Course[] }) {
  const [activeSection, setActiveSection] = useState(1)

  const section   = SECTIONS.find(s => s.id === activeSection)!
  const filtered  = courses.filter(c => section.filter(c.slug))

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">

      {/* ── Section navigation ── */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-1">All Certification Dumps</h2>
        <p className="text-slate-500 text-sm mb-5">Browse by certification brand — {courses.length} dumps total</p>

        {/* Number tabs row */}
        <div className="flex items-center gap-1 flex-wrap">
          {/* Prev arrow */}
          <button
            onClick={() => setActiveSection(s => Math.max(1, s - 1))}
            disabled={activeSection === 1}
            className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ←
          </button>

          {/* Section number tabs */}
          {SECTIONS.map(sec => {
            const count   = courses.filter(c => sec.filter(c.slug)).length
            const isActive = sec.id === activeSection
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`relative h-9 px-3 rounded-lg text-sm font-bold transition-all border ${
                  isActive
                    ? 'text-white border-transparent shadow-md'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
                style={isActive ? { background: sec.color } : {}}
                title={sec.name}
              >
                {sec.id}
                {count > 0 && (
                  <span className={`ml-1 text-[10px] font-semibold ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                    ({count})
                  </span>
                )}
              </button>
            )
          })}

          {/* Next arrow */}
          <button
            onClick={() => setActiveSection(s => Math.min(10, s + 1))}
            disabled={activeSection === 10}
            className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            →
          </button>
        </div>
      </div>

      {/* ── Active section header ── */}
      <div
        className="rounded-2xl px-6 py-5 mb-6 flex items-center gap-4"
        style={{ background: section.color }}
      >
        <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 p-2">
          <CourseLogo slug={section.slug} fill />
        </div>
        <div>
          <div className="text-white font-black text-xl">{section.name}</div>
          <div className="text-white/70 text-sm mt-0.5">
            {filtered.length} certification{filtered.length !== 1 ? 's' : ''} available
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
            Section {section.id} of 10
          </span>
        </div>
      </div>

      {/* ── Course cards ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          No dumps yet in this section.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} rank={i + 1} />
          ))}
        </div>
      )}

      {/* ── Section switcher footer ── */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => setActiveSection(s => Math.max(1, s - 1))}
          disabled={activeSection === 1}
          className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← {activeSection > 1 ? SECTIONS[activeSection - 2].name : ''}
        </button>

        <div className="flex gap-1.5">
          {SECTIONS.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`w-2 h-2 rounded-full transition-all ${
                sec.id === activeSection ? 'w-5' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              style={sec.id === activeSection ? { background: section.color } : {}}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveSection(s => Math.min(10, s + 1))}
          disabled={activeSection === 10}
          className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {activeSection < 10 ? SECTIONS[activeSection].name : ''} →
        </button>
      </div>
    </section>
  )
}
