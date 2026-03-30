import Link from 'next/link'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { CourseLogo } from '@/components/courses/CourseLogo'
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

const LAB_TYPES = [
  { key: 'mock',  label: 'Mock Exam',    icon: '🧪', desc: 'Full timed exam — real format', plans: ['starter','pro','platinum','all_access'] },
  { key: 'study', label: 'Study Mode',   icon: '📖', desc: 'Q&A with AI explanations',       plans: ['starter','pro','platinum','all_access'] },
  { key: 'ai',    label: 'AI Tutor',     icon: '🤖', desc: 'Ask Gemini anything',            plans: ['pro','platinum','all_access'] },
]

const CATEGORIES = [
  { label: 'All',                  filter: () => true },
  // AWS Certifications
  { label: 'AWS Solutions Architect',    filter: (s: string) => s.startsWith('aws-saa') },
  { label: 'AWS Developer Associate',    filter: (s: string) => s.startsWith('aws-dva') },
  { label: 'AWS SysOps Admin',          filter: (s: string) => s.startsWith('aws-soa') },
  // Azure Certifications
  { label: 'Azure Fundamentals',        filter: (s: string) => s.startsWith('azure-az-900') },
  { label: 'Azure Administrator',       filter: (s: string) => s.startsWith('azure-az-104') },
  { label: 'Azure Security Engineer',   filter: (s: string) => s.startsWith('azure-az-500') },
  // Google Cloud
  { label: 'Google Cloud Associate',    filter: (s: string) => s.startsWith('google-') },
  // Cisco
  { label: 'Cisco CCNA',               filter: (s: string) => s.startsWith('cisco-ccna') },
  { label: 'Cisco CCNP',               filter: (s: string) => s.startsWith('cisco-ccnp') },
  // CompTIA
  { label: 'CompTIA A+',               filter: (s: string) => s.startsWith('comptia-aplus') },
  { label: 'CompTIA Network+',         filter: (s: string) => s.startsWith('comptia-network') },
  { label: 'CompTIA Security+',        filter: (s: string) => s.startsWith('comptia-security') },
  // Kubernetes & Container
  { label: 'Kubernetes CKA',           filter: (s: string) => s.startsWith('kubernetes-cka') },
  { label: 'Docker Certified',         filter: (s: string) => s.startsWith('docker-') },
  // DevOps & Infrastructure
  { label: 'Terraform Associate',      filter: (s: string) => s.startsWith('hashicorp-terraform') },
  { label: 'Jenkins',                  filter: (s: string) => s.startsWith('jenkins-') },
  // Project Management
  { label: 'PMP (PMBOK)',             filter: (s: string) => s.startsWith('pmp-') },
  { label: 'Scrum Master (CSPO)',     filter: (s: string) => s.startsWith('scrum-') },
  { label: 'Agile Certified',          filter: (s: string) => s.startsWith('agile-') },
  // IT Service Management
  { label: 'ITIL 4 Foundation',        filter: (s: string) => s.startsWith('itil-') },
  { label: 'ServiceNow Certified',     filter: (s: string) => s.startsWith('servicenow-') },
  // Virtualization
  { label: 'VMware VCP-DCV',          filter: (s: string) => s.startsWith('vmware-vcp') },
  { label: 'Hyper-V',                 filter: (s: string) => s.startsWith('hyperv-') },
  // Database
  { label: 'Oracle Database',          filter: (s: string) => s.startsWith('oracle-') },
  { label: 'SQL Server DBA',          filter: (s: string) => s.startsWith('sqlserver-') },
  { label: 'MongoDB Associate',        filter: (s: string) => s.startsWith('mongodb-') },
  // Security & Compliance
  { label: 'CEH (Certified Ethical)',  filter: (s: string) => s.startsWith('ceh-') },
  { label: 'CISSP',                   filter: (s: string) => s.startsWith('cissp-') },
  // Other Popular Certs
  { label: 'Linux+',                  filter: (s: string) => s.startsWith('linux-') },
  { label: 'Red Hat Certified',       filter: (s: string) => s.startsWith('redhat-') },
  { label: 'HashiCorp Vault',         filter: (s: string) => s.startsWith('vault-') },
]

export default async function LabsPage() {
  const supabase = await createClient()

  // Courses
  const { data: coursesRaw } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true)
    .order('enrolled_count', { ascending: false })
    .limit(35)
  const courses = (coursesRaw as Course[] | null) ?? FALLBACK_COURSES

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
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1600&q=60')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            Practice Labs · Mock Exams · Study Mode
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Certification Practice Labs
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Hands-on labs for every certification. Full mock exams, study mode with AI explanations, and domain-by-domain tracking. Access requires an active course plan.
          </p>
          <div className="flex flex-wrap gap-5 mt-8">
            {[
              { icon: '🧪', label: '8,700+ Practice Questions' },
              { icon: '📊', label: 'Domain Score Tracking' },
              { icon: '🤖', label: 'Gemini AI Explanations' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                <span>{item.icon}</span>{item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab types legend */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Available labs:</span>
          {LAB_TYPES.map(lt => (
            <div key={lt.key} className="flex items-center gap-2 text-xs text-slate-600">
              <span>{lt.icon}</span>
              <span className="font-semibold">{lt.label}</span>
              <span className="text-slate-400">— {lt.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto pb-0.5">
          {CATEGORIES.map(cat => (
            <span
              key={cat.label}
              className="px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200 text-slate-600 bg-white whitespace-nowrap cursor-default select-none"
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      {/* Labs grid */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayCourses.map(course => {
            const hasAccess = ownedCourseIds.has(course.id)
            const plan = ownedPlans[course.id] ?? null
            const planLevel = ['starter','pro','platinum','all_access'].indexOf(plan ?? '')

            return (
              <div key={course.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                {/* Card header */}
                <div className="relative h-24 flex items-center justify-center" style={{ background: course.brand_color }}>
                  <div className="w-16 h-16 flex items-center justify-center">
                    <CourseLogo slug={course.slug} fill />
                  </div>
                  {hasAccess && (
                    <div className="absolute top-2.5 right-2.5 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Enrolled
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-4">
                  <div className="font-black text-slate-900 text-sm leading-tight mb-0.5">{course.title}</div>
                  <div className="text-xs text-slate-400 mb-4">{course.description}</div>

                  {/* Labs list */}
                  <div className="space-y-2 mb-4">
                    {LAB_TYPES.map(lt => {
                      const accessible = hasAccess && planLevel >= ['starter','pro','platinum','all_access'].indexOf(lt.plans[0])
                      return (
                        <div key={lt.key} className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span>{lt.icon}</span>
                            <span className="font-medium">{lt.label}</span>
                          </div>
                          {accessible ? (
                            <Link
                              href={lt.key === 'mock' ? `/exam/${course.id}` : lt.key === 'study' ? `/study/${course.id}` : `/dashboard`}
                              className="text-[10px] font-bold text-sky-600 hover:text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full"
                            >
                              Launch →
                            </Link>
                          ) : (
                            <span className="text-[10px] text-slate-300 font-medium">🔒 Locked</span>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* CTA */}
                  {hasAccess ? (
                    <Link
                      href={`/exam/${course.id}`}
                      className="w-full block text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 rounded-xl text-xs transition-colors"
                    >
                      Go to Labs →
                    </Link>
                  ) : (
                    <Link
                      href={`/courses/${course.slug}`}
                      className="w-full block text-center border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-2 rounded-xl text-xs transition-colors"
                    >
                      Get Access →
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
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
