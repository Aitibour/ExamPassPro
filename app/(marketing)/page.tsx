import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { CourseGrid } from '@/components/courses/CourseGrid'
import type { Course } from '@/lib/supabase/database.types'

// Fallback courses for when DB is not connected
const FALLBACK_COURSES: Course[] = [
  { id: '1', slug: 'servicenow-csa', title: 'ServiceNow CSA', description: 'Certified System Administrator', icon_url: null, brand_color: '#3d9b3d', price_cents: 1900, enrolled_count: 4210, is_published: true, created_at: '2026-01-01' },
  { id: '2', slug: 'aws-saa-c03', title: 'AWS SAA-C03', description: 'Solutions Architect Associate', icon_url: null, brand_color: '#232f3e', price_cents: 1900, enrolled_count: 3840, is_published: true, created_at: '2026-01-02' },
  { id: '3', slug: 'azure-az-900', title: 'Azure AZ-900', description: 'Fundamentals Certification', icon_url: null, brand_color: '#0078d4', price_cents: 1900, enrolled_count: 3110, is_published: true, created_at: '2026-01-03' },
  { id: '4', slug: 'google-cloud-ace', title: 'Google Cloud ACE', description: 'Associate Cloud Engineer', icon_url: null, brand_color: '#1a73e8', price_cents: 1900, enrolled_count: 2700, is_published: true, created_at: '2026-01-04' },
  { id: '5', slug: 'comptia-security-plus', title: 'CompTIA Security+', description: 'SY0-701 Certification', icon_url: null, brand_color: '#c0392b', price_cents: 1900, enrolled_count: 2400, is_published: true, created_at: '2026-01-05' },
  { id: '6', slug: 'vmware-vcp-dcv', title: 'VMware VCP-DCV', description: 'Data Center Virtualization', icon_url: null, brand_color: '#607078', price_cents: 1900, enrolled_count: 1900, is_published: true, created_at: '2026-01-06' },
  { id: '7', slug: 'cisco-ccna', title: 'Cisco CCNA 200-301', description: 'Network Associate', icon_url: null, brand_color: '#1ba0d7', price_cents: 1900, enrolled_count: 1750, is_published: true, created_at: '2026-01-07' },
  { id: '8', slug: 'kubernetes-cka', title: 'Kubernetes CKA', description: 'Certified Kubernetes Admin', icon_url: null, brand_color: '#326ce5', price_cents: 1900, enrolled_count: 1600, is_published: true, created_at: '2026-01-08' },
  { id: '9', slug: 'hashicorp-terraform', title: 'HashiCorp Terraform', description: 'Infrastructure as Code', icon_url: null, brand_color: '#7B42BC', price_cents: 1900, enrolled_count: 1400, is_published: true, created_at: '2026-01-09' },
  { id: '10', slug: 'itil-4-foundation', title: 'ITIL 4 Foundation', description: 'IT Service Management', icon_url: null, brand_color: '#8b2fc9', price_cents: 1900, enrolled_count: 1200, is_published: true, created_at: '2026-01-10' },
]

const TESTIMONIALS = [
  { name: 'Marcus Rivera', role: 'Cloud Engineer', text: 'Passed AWS SAA on the first attempt! The mock exams are incredibly realistic.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80' },
  { name: 'Sarah Chen', role: 'IT Manager', text: 'The AI study assistant is a game changer. It pinpointed my weak domains instantly.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80' },
  { name: 'James Wilson', role: 'DevOps Lead', text: 'Got my CKA and CCNA in the same month. The study mode explanations are excellent.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80' },
  { name: 'Priya Sharma', role: 'Cloud Architect', text: 'Azure AZ-900 was a breeze. The domain breakdown helped me focus my study time.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80' },
  { name: 'David Kim', role: 'Security Analyst', text: 'Security+ certified! The explanations for every wrong answer are invaluable.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80' },
  { name: 'Emma Johnson', role: 'SRE', text: 'Terraform Associate passed first try. The question bank is massive and very current.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80' },
  { name: 'Carlos Martinez', role: 'Network Engineer', text: 'CCNA 200-301 done! The timed exams prepare you perfectly for the real thing.', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop&q=80' },
  { name: 'Aisha Patel', role: 'IT Consultant', text: 'ITIL 4 passed with distinction. The study mode is perfect for building confidence.', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&q=80' },
  { name: 'Tom Bradley', role: 'Platform Engineer', text: 'VCP-DCV certified in 3 weeks. The AI chat explained every concept I was unsure about.', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&q=80' },
  { name: 'Lisa Wang', role: 'Solutions Architect', text: 'Google ACE done! The 100% pass guarantee gave me the confidence to invest.', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&q=80' },
]

const PARTNERS = [
  { name: 'ServiceNow', slug: 'servicenow' },
  { name: 'Amazon AWS', slug: 'amazonaws' },
  { name: 'Microsoft Azure', slug: 'microsoftazure' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'VMware', slug: 'vmware' },
  { name: 'Cisco', slug: 'cisco' },
  { name: 'CompTIA', slug: 'comptia' },
  { name: 'HashiCorp', slug: 'hashicorp' },
]

const PRICING_PLANS = [
  {
    key: 'starter', name: 'Starter', price: 19, period: '/mo',
    features: ['1 Mock exam (100% real exam questions)', '+30 extra questions', 'Score tracking & history', 'Study mode with explanations', 'Level 1 Support'],
    cta: 'Get Starter',
    highlight: false,
  },
  {
    key: 'pro', name: 'Pro', price: 49, period: '/mo',
    features: ['3 Mock exams', '+60 extra questions', 'Study mode with explanations', 'Gemini AI Chat assistant', 'Public community access', 'Level 1 Support'],
    cta: 'Get Pro',
    highlight: false,
  },
  {
    key: 'platinum', name: 'Platinum', price: 99, period: '/mo',
    features: ['5 Mock exams', '+150 extra questions', 'Gemini AI Chat (unlimited)', 'Private community access', '1-to-1 coaching session', 'Level 2 + Priority Support'],
    cta: 'Get Platinum',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    key: 'all_access', name: 'All-Access Bundle', price: 199, period: ' one-time',
    features: ['10 Mock exams', '+300 extra questions', 'Unlimited AI Chat forever', 'Private community access', '1-hour coaching session', 'Level 3 + Priority Support', 'Lifetime access'],
    cta: 'Get All-Access',
    highlight: false,
    badge: 'Best Value',
  },
]

export default async function HomePage() {
  const supabase = await createClient()
  const { data: coursesRaw } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true)
    .order('enrolled_count', { ascending: false })
    .limit(10)

  const courses = coursesRaw as Course[] | null
  const displayCourses = courses && courses.length > 0 ? courses : FALLBACK_COURSES

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=1600&q=70')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-7">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                98.2% Pass Rate
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-3 py-1.5 rounded-full">
                12,400+ Certified Professionals
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Pass Your IT Certification <span className="text-sky-400">First Try</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Real exam-style questions, timed mock exams, Gemini AI assistant, and a <strong className="text-white">100% Pass or 100% Refund</strong> guarantee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/register"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg">
                Get Started Free →
              </Link>
              <Link href="/#courses"
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-colors">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '12,400+', label: 'IT Professionals Certified' },
            { value: '8,700+', label: 'Exam-Style Questions' },
            { value: '98.2%', label: 'First Attempt Pass Rate' },
            { value: '100%', label: 'Pass Guarantee' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="bg-slate-50 py-16">
        <CourseGrid courses={displayCourses} />
      </div>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 text-base">Choose a plan for one course. Upgrade anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map(plan => (
              <div
                key={plan.key}
                className={`relative rounded-2xl p-7 flex flex-col border ${
                  plan.highlight
                    ? 'border-sky-500 bg-sky-50 shadow-lg shadow-sky-100'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                    plan.highlight ? 'bg-sky-500 text-white' : 'bg-violet-600 text-white'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="font-black text-slate-900 text-lg mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${plan.price}</span>
                    <span className="text-slate-500 text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <polyline points="1,5 4,8 9,2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/register?plan=${plan.key}`}
                  className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-colors ${
                    plan.highlight
                      ? 'bg-sky-500 hover:bg-sky-600 text-white'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            All plans include a <strong className="text-slate-600">100% Pass Guarantee</strong> — pass your exam or get a full refund.
          </p>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-white py-14 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-10">
            Content Aligned With Official Certification Bodies
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-end">
            {PARTNERS.map(p => (
              <div key={p.name} className="flex flex-col items-center gap-2.5 group">
                <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-3 shadow-sm group-hover:shadow-md group-hover:border-slate-300 transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${p.slug}`}
                    alt={p.name}
                    width={36}
                    height={36}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span className="text-slate-500 text-[10px] font-semibold text-center leading-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-2">What Our Students Say</h2>
          <p className="text-slate-500 text-center text-sm">Join thousands of professionals who passed with ExamPassPro</p>
        </div>
        <div className="relative">
          <div className="flex gap-5 animate-[slide-left_40s_linear_infinite] w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 w-80 flex-shrink-0 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sky-500 py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Pass Your Certification?</h2>
          <p className="text-sky-100 text-base mb-8">
            Join 12,400+ professionals. 100% Pass Guarantee — or your money back.
          </p>
          <Link
            href="/register"
            className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-10 py-4 rounded-xl text-base transition-colors shadow-lg inline-block"
          >
            Start Free Today →
          </Link>
        </div>
      </section>
    </>
  )
}
