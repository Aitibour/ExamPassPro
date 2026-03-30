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
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1280&fit=crop"
            alt="Azure cloud platform study materials"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-blue-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Azure AZ-900 4-Week Plan
          </h1>
          <p className="text-blue-100 text-lg">
            Fast-track study plan to pass Azure Fundamentals in just 4 weeks.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
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
