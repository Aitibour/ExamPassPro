import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Linux LPIC Certification Path — ExamPassPro',
  description: 'Complete Linux LPIC certification roadmap: LPIC-1, LPIC-2, LPIC-3. Career growth and salary insights.',
  alternates: {
    canonical: '/roadmaps/linux-lpic-path',
  },
  openGraph: {
    title: 'Linux LPIC Certification Path',
    description: 'Master Linux system administration with the LPIC certification roadmap.',
    url: 'https://exampasspro.com/roadmaps/linux-lpic-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linux LPIC Certification Path',
    description: 'Master Linux system administration with the LPIC certification roadmap.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1920&h=1280&fit=crop"
            alt="Linux system administration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-orange-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Linux LPIC Certification Path
          </h1>
          <p className="text-orange-100 text-lg">
            Master Linux system administration from beginner to expert level.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          The Linux LPIC (Linux Professional Institute Certification) path offers three levels of certification to validate your Linux system administration skills.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Levels</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">LPIC-1: Linux Administrator</h3>
            <p className="text-slate-600 text-sm mb-3">Entry-level certification covering system administration basics.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 80-120 hours</li>
              <li>• Exams: 2 exams (101 & 102)</li>
              <li>• Salary Range: $65K-$90K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">LPIC-2: Linux Engineer</h3>
            <p className="text-slate-600 text-sm mb-3">Advanced certification for experienced administrators.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 120-200 hours</li>
              <li>• Exams: 2 exams (201 & 202)</li>
              <li>• Salary Range: $95K-$130K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">LPIC-3: Linux Expert</h3>
            <p className="text-slate-600 text-sm mb-3">Expert-level specialization in virtualization or high availability.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 150-250 hours</li>
              <li>• Exams: Choose specialization</li>
              <li>• Salary Range: $125K-$170K/year</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Progression</h2>
        <p className="text-slate-600 mb-4">
          The LPIC path opens doors to various Linux-focused roles: system administrator, network administrator, DevOps engineer, cloud engineer, and infrastructure architect.
        </p>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-400 transition-colors">
              <p className="font-semibold text-slate-900">📚 Study Guides</p>
              <p className="text-sm text-slate-600">In-depth tutorials and exam strategies</p>
            </Link>
            <Link href="/comparisons" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-400 transition-colors">
              <p className="font-semibold text-slate-900">⚖️ Comparisons</p>
              <p className="text-sm text-slate-600">Compare similar certifications</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-orange-50 rounded-xl border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Start Your Linux LPIC Journey?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive exam dumps, practice tests, and AI-powered study assistance for all LPIC levels.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
