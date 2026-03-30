'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CourseLogo } from '@/components/courses/CourseLogo'
import type { Course, Purchase } from '@/lib/supabase/database.types'

// ── 10 category sections for labs ──────────────────────────────────────────────
const SECTIONS = [
  {
    id: 1,
    name: 'AWS Certifications',
    slug: 'aws-saa-c03',
    color: '#232f3e',
    filter: (s: string) => s.startsWith('aws-'),
  },
  {
    id: 2,
    name: 'Azure & Microsoft',
    slug: 'azure-az-900',
    color: '#0078d4',
    filter: (s: string) => s.startsWith('azure-') || s.startsWith('microsoft-'),
  },
  {
    id: 3,
    name: 'Google Cloud',
    slug: 'google-cloud-ace',
    color: '#1a73e8',
    filter: (s: string) => s.startsWith('google-'),
  },
  {
    id: 4,
    name: 'Cisco & Networking',
    slug: 'cisco-ccna',
    color: '#1ba0d7',
    filter: (s: string) => s.startsWith('cisco-') || s.startsWith('fortinet-'),
  },
  {
    id: 5,
    name: 'CompTIA & Linux',
    slug: 'comptia-security-plus',
    color: '#c0392b',
    filter: (s: string) => s.startsWith('comptia-') || s.startsWith('linux-') || s.startsWith('redhat-'),
  },
  {
    id: 6,
    name: 'Kubernetes & Containers',
    slug: 'kubernetes-cka',
    color: '#326ce5',
    filter: (s: string) => s.startsWith('kubernetes-') || s.startsWith('docker-'),
  },
  {
    id: 7,
    name: 'DevOps & Infrastructure',
    slug: 'hashicorp-terraform',
    color: '#7B42BC',
    filter: (s: string) => s.startsWith('hashicorp-') || s.startsWith('jenkins-') || s.startsWith('terraform-') || s.startsWith('splunk-'),
  },
  {
    id: 8,
    name: 'ServiceNow & ITSM',
    slug: 'servicenow-csa',
    color: '#3d9b3d',
    filter: (s: string) => s.startsWith('servicenow-') || s.startsWith('itil-'),
  },
  {
    id: 9,
    name: 'Project Mgmt & Agile',
    slug: 'pmp-certification',
    color: '#e74c3c',
    filter: (s: string) => s.startsWith('pmp-') || s.startsWith('scrum-') || s.startsWith('pmi-') || s.startsWith('jira-') || s.startsWith('kanban-') || s.startsWith('prince2-'),
  },
  {
    id: 10,
    name: 'Databases & Security',
    slug: 'vmware-vcp-dcv',
    color: '#8b2fc9',
    filter: (s: string) =>
      s.startsWith('mongodb-') || s.startsWith('oracle-') || s.startsWith('sqlserver-') ||
      s.startsWith('cissp-') || s.startsWith('ceh-') || s.startsWith('vmware-'),
  },
]

const LAB_TYPES = [
  { key: 'mock', label: 'Mock Exam', icon: '🧪' },
  { key: 'study', label: 'Study Mode', icon: '📖' },
]

interface LabsGridProps {
  courses: Course[]
  ownedCourseIds: Set<string>
  ownedPlans: Record<string, string>
}

export function LabsGrid({ courses, ownedCourseIds, ownedPlans }: LabsGridProps) {
  const [activeSection, setActiveSection] = useState(1)

  const section = SECTIONS.find(s => s.id === activeSection)!
  const filtered = courses.filter(c => section.filter(c.slug))

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
      {/* ── Section navigation ── */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-1">Certification Practice Labs</h2>
        <p className="text-slate-500 text-sm mb-5">Browse by certification category — {courses.length} labs total</p>

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
            const count = courses.filter(c => sec.filter(c.slug)).length
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
            {filtered.length} lab{filtered.length !== 1 ? 's' : ''} available
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
            Section {section.id} of 10
          </span>
        </div>
      </div>

      {/* ── Lab cards ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          No labs yet in this section.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filtered.map((course, i) => {
            const hasAccess = ownedCourseIds.has(course.id)
            const plan = ownedPlans[course.id] ?? null
            const planLevel = ['starter', 'pro', 'platinum', 'all_access'].indexOf(plan ?? '')

            return (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition-shadow"
              >
                {/* Card header */}
                <div className="relative h-20 flex items-center justify-center" style={{ background: course.brand_color }}>
                  <div className="w-14 h-14 flex items-center justify-center">
                    <CourseLogo slug={course.slug} fill />
                  </div>
                  {hasAccess && (
                    <div className="absolute top-1.5 right-1.5 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                      ✓
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-3">
                  <div className="font-bold text-slate-900 text-xs leading-tight mb-1">{course.title}</div>

                  {/* Lab quick links */}
                  <div className="space-y-1.5 mb-3">
                    {LAB_TYPES.map(lt => {
                      const accessible = hasAccess && planLevel >= 0
                      return (
                        <div key={lt.key} className="flex items-center justify-between">
                          <span className="text-[10px] text-slate-600 font-medium">{lt.icon} {lt.label}</span>
                          {accessible ? (
                            <Link
                              href={lt.key === 'mock' ? `/exam/${course.id}` : `/study/${course.id}`}
                              className="text-[9px] font-bold text-sky-600 hover:text-sky-700"
                            >
                              Start →
                            </Link>
                          ) : (
                            <span className="text-[8px] text-slate-300">🔒</span>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* CTA Button */}
                  {hasAccess ? (
                    <Link
                      href={`/exam/${course.id}`}
                      className="w-full block text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-1.5 rounded-lg text-[10px] transition-colors"
                    >
                      Launch Labs
                    </Link>
                  ) : (
                    <Link
                      href={`/courses/${course.slug}`}
                      className="w-full block text-center border border-sky-200 hover:bg-sky-50 text-sky-600 font-bold py-1.5 rounded-lg text-[10px] transition-colors"
                    >
                      Unlock
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
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
