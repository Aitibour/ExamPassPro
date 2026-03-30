import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Cloud Certification Path: Cloud Engineer to Architect — ExamPassPro',
  description: 'Complete Google Cloud Platform certification roadmap from Cloud Engineer to Professional Cloud Architect. 12-16 month learning path.',
  alternates: {
    canonical: '/roadmaps/google-cloud-path',
  },
  openGraph: {
    title: 'Google Cloud Certification Path & Learning Roadmap',
    description: 'Step-by-step GCP career path from Associate Cloud Engineer to Professional Cloud Architect.',
    url: 'https://exampasspro.com/roadmaps/google-cloud-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-yellow-500 to-red-500 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-yellow-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Google Cloud Certification Path
              </h1>
              <p className="text-yellow-100 text-base mb-6">
                Complete 12-16 month learning path from Cloud Engineer to Professional Cloud Architect on GCP.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-yellow-50 transition-colors">
                  Start GCP Path
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1280&fit=crop"
                alt="Google Cloud Platform"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          The Google Cloud Platform path specializes in data analytics, machine learning, and cloud engineering. Perfect for professionals in tech-forward organizations leveraging GCP's data and AI capabilities.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Progression</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 1: Cloud Foundations</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Google Cloud Digital Leader</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 3-4 weeks study</li>
              <li>• Pass Rate: 70%+</li>
              <li>• Cost: $200</li>
              <li>• Focus: GCP services, cloud concepts, business use cases</li>
              <li>• Salary: $45K-$65K</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 2: Cloud Infrastructure</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Google Cloud Associate Cloud Engineer</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 8-12 weeks study</li>
              <li>• Pass Rate: 50-60%</li>
              <li>• Cost: $200</li>
              <li>• Focus: Compute, networking, storage, security</li>
              <li>• Salary: $110K-$140K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: Digital Leader (recommended)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 3: Cloud Architecture</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Google Cloud Professional Cloud Architect</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 12-16 weeks study</li>
              <li>• Pass Rate: 40-50%</li>
              <li>• Cost: $200</li>
              <li>• Focus: Advanced architecture, ML integration, optimization</li>
              <li>• Salary: $150K-$180K+</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: Associate Cloud Engineer (required)</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Total Time Investment</h2>
        <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-black text-yellow-600">3-4 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Digital Leader</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-yellow-600">8-12 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Associate Cloud Engineer</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-yellow-600">12-16 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Professional Architect</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 text-center">
            <strong>Total: 23-32 weeks (5-8 months intensive, 12-16 months at moderate pace)</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Who Should Follow This Path?</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>✓ Data engineers and ML specialists</li>
            <li>✓ Cloud infrastructure engineers</li>
            <li>✓ DevOps professionals in GCP environments</li>
            <li>✓ Solutions architects for tech startups</li>
            <li>✓ Professionals in analytics-heavy organizations</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-yellow-50 rounded-xl border border-yellow-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master Google Cloud Platform</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides comprehensive GCP training and practice exams for all certification levels.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Browse GCP Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
