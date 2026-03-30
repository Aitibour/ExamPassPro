import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HashiCorp Certified Practitioner Path — ExamPassPro',
  description: 'HashiCorp certification roadmap: Terraform, Vault, Consul, and Nomad. Infrastructure as code mastery.',
  alternates: {
    canonical: '/roadmaps/hashicorp-certified-path',
  },
  openGraph: {
    title: 'HashiCorp Certified Practitioner Path',
    description: 'Master infrastructure automation with HashiCorp certifications.',
    url: 'https://exampasspro.com/roadmaps/hashicorp-certified-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HashiCorp Certified Practitioner Path',
    description: 'Master infrastructure automation with HashiCorp certifications.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-purple-500 to-purple-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1920&h=1280&fit=crop"
            alt="Infrastructure as code and automation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-purple-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            HashiCorp Certified Path
          </h1>
          <p className="text-purple-100 text-lg">
            Infrastructure automation and orchestration expertise.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          HashiCorp certifications validate expertise in infrastructure automation, configuration management, and cloud orchestration using industry-leading tools.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Specializations</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Terraform Associate</h3>
            <p className="text-slate-600 text-sm mb-3">Master infrastructure as code (IaC) with Terraform.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 60-100 hours</li>
              <li>• Topics: State management, modules, variables</li>
              <li>• Salary Range: $95K-$130K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Vault Associate</h3>
            <p className="text-slate-600 text-sm mb-3">Secure secrets management and data protection.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 50-80 hours</li>
              <li>• Topics: Authentication, encryption, secret engines</li>
              <li>• Salary Range: $100K-$140K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Consul Associate</h3>
            <p className="text-slate-600 text-sm mb-3">Service networking and infrastructure automation.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 60-100 hours</li>
              <li>• Topics: Service discovery, mesh networks</li>
              <li>• Salary Range: $105K-$145K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Nomad Associate</h3>
            <p className="text-slate-600 text-sm mb-3">Container and workload orchestration.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 70-120 hours</li>
              <li>• Topics: Job scheduling, deployments</li>
              <li>• Salary Range: $110K-$150K/year</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Paths</h2>
        <p className="text-slate-600 mb-4">
          HashiCorp certifications lead to roles in DevOps engineering, infrastructure architecture, cloud engineering, and site reliability engineering (SRE).
        </p>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-purple-400 transition-colors">
              <p className="font-semibold text-slate-900">📚 Study Guides</p>
              <p className="text-sm text-slate-600">In-depth tutorials and exam strategies</p>
            </Link>
            <Link href="/comparisons" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-purple-400 transition-colors">
              <p className="font-semibold text-slate-900">⚖️ Comparisons</p>
              <p className="text-sm text-slate-600">Compare DevOps certifications</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-purple-50 rounded-xl border border-purple-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Master Infrastructure Automation?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive HashiCorp exam dumps, practice tests, and AI-powered study assistance for all specializations.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
