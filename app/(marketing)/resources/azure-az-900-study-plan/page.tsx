import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Azure AZ-900 Fundamentals: 4-Week Study Plan — ExamPassPro',
  description: 'Quick 4-week study plan for Azure AZ-900 Fundamentals. Learn core concepts, practice with free resources, and pass quickly.',
  alternates: {
    canonical: '/resources/azure-az-900-study-plan',
  },
  openGraph: {
    title: 'Azure AZ-900 4-Week Study Plan',
    description: 'Fast-track plan to pass Azure Fundamentals certification in just 4 weeks.',
    url: 'https://exampasspro.com/resources/azure-az-900-study-plan',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Azure AZ-900 4-Week Plan
              </h1>
              <p className="text-blue-100 text-base mb-6">
                Fast-track study plan to pass Azure Fundamentals in just 4 weeks.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Start Study Plan
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&h=1280&fit=crop"
                alt="Azure fundamentals"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4-Week Accelerated Plan</h2>
        <p className="text-slate-600 mb-6">
          The Azure AZ-900 is the easiest Azure certification and can be mastered in just 4 weeks with focused study. This fast-track plan covers all essential concepts.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Week 1: Cloud Fundamentals</h2>
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 mb-2">Topics</h3>
          <ul className="text-slate-600 text-sm space-y-1 mb-3">
            <li>• Cloud computing concepts (IaaS, PaaS, SaaS)</li>
            <li>• Azure services overview</li>
            <li>• Pricing and support models</li>
          </ul>
          <p className="text-slate-600 text-sm"><strong>Study Time:</strong> 1-2 hours/day</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Week 2: Core Azure Services</h2>
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 mb-2">Topics</h3>
          <ul className="text-slate-600 text-sm space-y-1 mb-3">
            <li>• Virtual machines and compute</li>
            <li>• Networking and databases</li>
            <li>• Storage services</li>
          </ul>
          <p className="text-slate-600 text-sm"><strong>Study Time:</strong> 1-2 hours/day</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Week 3: Security & Compliance</h2>
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 mb-2">Topics</h3>
          <ul className="text-slate-600 text-sm space-y-1 mb-3">
            <li>• Security and identity</li>
            <li>• Compliance and privacy</li>
            <li>• Governance</li>
          </ul>
          <p className="text-slate-600 text-sm"><strong>Study Time:</strong> 1-2 hours/day</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Week 4: Practice & Review</h2>
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-2">Activities</h3>
          <ul className="text-slate-600 text-sm space-y-1">
            <li>• Take 3-4 full-length practice exams</li>
            <li>• Review weak topics</li>
            <li>• Final review before exam</li>
          </ul>
          <p className="text-slate-600 text-sm mt-3"><strong>Study Time:</strong> 2 hours/day</p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Pass AZ-900 Fast</h3>
          <p className="text-slate-600 mb-6">
            Get our complete AZ-900 study guide and practice exams.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Azure Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
