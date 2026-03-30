import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Certification Roadmaps — Career Paths for 2026 — ExamPassPro',
  description: 'Complete IT certification roadmaps and learning paths. AWS, Azure, Kubernetes, CompTIA, Cisco paths from beginner to expert. Choose your IT career path.',
  alternates: {
    canonical: '/roadmaps',
  },
  openGraph: {
    title: 'IT Certification Roadmaps & Learning Paths',
    description: 'Complete career paths for IT certifications. AWS, Azure, CompTIA, Kubernetes, Cisco and more. From beginner to expert roles.',
    url: 'https://exampasspro.com/roadmaps',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT Certification Roadmaps' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Certification Roadmaps 2026',
    description: 'Complete IT career paths and learning roadmaps for all major certifications.',
  },
}

const roadmaps = [
  {
    slug: 'aws-certification-path',
    title: 'AWS Certification Path: Beginner to Solutions Architect',
    role: 'Cloud Architect',
    duration: '12-18 months',
    certs: ['Cloud Practitioner', 'Solutions Architect Associate', 'Solutions Architect Professional'],
    description: 'Complete path from AWS basics to enterprise architecture. For aspiring cloud architects.',
  },
  {
    slug: 'azure-certification-path',
    title: 'Microsoft Azure Learning Path: Fundamentals to Solutions',
    role: 'Azure Administrator',
    duration: '10-16 months',
    certs: ['AZ-900 Fundamentals', 'AZ-104 Administrator', 'AZ-305 Solutions Architect'],
    description: 'Master Microsoft Azure from cloud fundamentals to solution design.',
  },
  {
    slug: 'kubernetes-devops-path',
    title: 'Kubernetes & DevOps Career Path: Docker to CKA',
    role: 'DevOps/SRE Engineer',
    duration: '8-12 months',
    certs: ['Docker Certified Associate', 'Kubernetes CKA', 'CKAD Developer'],
    description: 'From containerization basics to advanced Kubernetes administration.',
  },
  {
    slug: 'comptia-security-path',
    title: 'CompTIA IT Security Roadmap: A+ to CISSP',
    role: 'Security Engineer',
    duration: '18-24 months',
    certs: ['A+', 'Network+', 'Security+', 'CEH or CISSP'],
    description: 'Comprehensive path from IT basics to advanced cybersecurity expertise.',
  },
  {
    slug: 'google-cloud-path',
    title: 'Google Cloud Certification Path: Cloud Engineer to Architect',
    role: 'GCP Architect',
    duration: '12-16 months',
    certs: ['Cloud Digital Leader', 'Associate Cloud Engineer', 'Professional Cloud Architect'],
    description: 'Master Google Cloud Platform from foundation to professional architect.',
  },
  {
    slug: 'networking-expert-path',
    title: 'Networking Expert Path: CompTIA Network+ to CCNP',
    role: 'Network Engineer',
    duration: '14-20 months',
    certs: ['Network+', 'CCNA', 'CCNP', 'CCIE (optional)'],
    description: 'From networking fundamentals to Cisco expert-level certification.',
  },
]

export default function RoadmapsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-200">Roadmaps</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">IT Certification Roadmaps</h1>
          <p className="text-slate-400 text-base max-w-3xl">
            Clear learning paths for every IT career goal. Choose your specialization and follow a proven roadmap to advance your career through certifications.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <div className="text-3xl font-black text-sky-600 mb-2">6</div>
            <p className="text-slate-600 text-sm"><strong>Career paths</strong> covering all major IT specializations</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <div className="text-3xl font-black text-sky-600 mb-2">18+</div>
            <p className="text-slate-600 text-sm"><strong>Certifications</strong> mapped across different levels</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <div className="text-3xl font-black text-sky-600 mb-2">2-24 mo</div>
            <p className="text-slate-600 text-sm"><strong>Time commitment</strong> varies by specialization</p>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {roadmaps.map((roadmap) => (
            <Link
              key={roadmap.slug}
              href={`/roadmaps/${roadmap.slug}`}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-2xl font-black text-sky-600 mb-2">
                    {roadmap.certs[0].split(' ')[0]}
                  </div>
                  <span className="inline-block text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {roadmap.duration}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-semibold">Role</div>
                  <div className="text-sm font-bold text-slate-900">{roadmap.role}</div>
                </div>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                {roadmap.title}
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                {roadmap.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {roadmap.certs.map((cert, idx) => (
                  <span key={idx} className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
                    {cert}
                  </span>
                ))}
              </div>
              <div className="text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                View Path →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Certification Roadmap FAQ</h2>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">How long does each roadmap take?</h3>
            <p className="text-slate-600 text-sm">
              Timelines range from 8-24 months depending on your prior experience and study intensity. Entry-level paths (CompTIA) take 8-12 months. Advanced paths (CCNP, CISSP) can take 18-24 months.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Can I skip certifications in the path?</h3>
            <p className="text-slate-600 text-sm">
              Some paths require prerequisites (e.g., you must pass CompTIA A+ before Network+). Others are optional (Cloud Practitioner before SAA). Each roadmap specifies which are required vs. recommended.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Which roadmap should I choose?</h3>
            <p className="text-slate-600 text-sm">
              Choose based on your career goal: Cloud roles → AWS/Azure/GCP paths. DevOps → Kubernetes path. Security → CompTIA/CISSP path. Networking → Networking Expert path. See detailed job descriptions in each roadmap.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Can I combine roadmaps?</h3>
            <p className="text-slate-600 text-sm">
              Yes! Many professionals combine: AWS + CompTIA (cloud + security), Kubernetes + Google Cloud, etc. See the "Hybrid Paths" section in each roadmap for recommended combinations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">What about salary after each cert?</h3>
            <p className="text-slate-600 text-sm">
              Each roadmap includes salary expectations at each level. Entry-level certs ($40-60k), intermediate ($70-110k), expert ($120-180k+). Location and experience significantly impact salary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 border-t border-sky-100 py-12 px-6 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Start Your Roadmap?</h2>
          <p className="text-slate-600 mb-6">
            Pick your certification path and get access to all study materials, practice exams, and expert guidance.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Browse Certification Courses
            </Link>
            <Link
              href="/coaching"
              className="inline-flex items-center px-6 py-3 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-sky-600 hover:text-sky-600 transition-colors"
            >
              Get AI Coaching
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
