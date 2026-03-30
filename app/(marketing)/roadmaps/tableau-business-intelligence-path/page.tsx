import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tableau Business Intelligence Certification Path — ExamPassPro',
  description: 'Tableau certification roadmap: Desktop Specialist, Server Associate, and advanced analytics. Career progression guide.',
  alternates: {
    canonical: '/roadmaps/tableau-business-intelligence-path',
  },
  openGraph: {
    title: 'Tableau Business Intelligence Path',
    description: 'Master data visualization and analytics with the Tableau certification roadmap.',
    url: 'https://exampasspro.com/roadmaps/tableau-business-intelligence-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1280&fit=crop"
            alt="Data analytics and visualization"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-green-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Tableau Business Intelligence Path
          </h1>
          <p className="text-green-100 text-lg">
            Master data visualization and analytics with Tableau certifications.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          Tableau certifications validate expertise in data visualization and business intelligence. Multiple levels progress from beginner to expert data analyst.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Levels</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Tableau Desktop Specialist</h3>
            <p className="text-slate-600 text-sm mb-3">Entry-level certification for data visualization professionals.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 50-80 hours</li>
              <li>• Exam Duration: 1 hour</li>
              <li>• Salary Range: $70K-$95K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Tableau Server Associate</h3>
            <p className="text-slate-600 text-sm mb-3">Intermediate certification covering server administration and collaboration.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 80-120 hours</li>
              <li>• Exam Duration: 2 hours</li>
              <li>• Salary Range: $95K-$130K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Tableau Advanced Developer</h3>
            <p className="text-slate-600 text-sm mb-3">Expert-level certification for advanced analytics and visualization.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 120-200 hours</li>
              <li>• Exam Duration: 2 hours</li>
              <li>• Salary Range: $125K-$170K/year</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Opportunities</h2>
        <p className="text-slate-600 mb-4">
          Tableau certifications open doors to roles in data analysis, business intelligence, data science, and analytics engineering across finance, healthcare, tech, and retail industries.
        </p>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-green-400 transition-colors">
              <p className="font-semibold text-slate-900">📚 Study Guides</p>
              <p className="text-sm text-slate-600">In-depth tutorials and exam strategies</p>
            </Link>
            <Link href="/comparisons" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-green-400 transition-colors">
              <p className="font-semibold text-slate-900">⚖️ Comparisons</p>
              <p className="text-sm text-slate-600">Compare data analytics certifications</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-green-50 rounded-xl border border-green-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Master Tableau?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive Tableau exam dumps, practice tests, and AI-powered study assistance for all certification levels.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
