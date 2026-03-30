import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Linux LPIC Study Guide — Essential Topics & Exam Tips — ExamPassPro',
  description: 'Complete Linux LPIC study guide covering LPIC-1, LPIC-2, and LPIC-3. Topics, study tips, and exam preparation strategies.',
  alternates: {
    canonical: '/resources/linux-lpic-study-guide',
  },
  openGraph: {
    title: 'Linux LPIC Study Guide',
    description: 'Master Linux system administration with our comprehensive LPIC study guide.',
    url: 'https://exampasspro.com/resources/linux-lpic-study-guide',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-red-500 to-red-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1920&h=1280&fit=crop"
            alt="Linux system administration study"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-red-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Linux LPIC Study Guide
          </h1>
          <p className="text-red-100 text-lg">
            Essential topics, study strategies, and exam preparation for all LPIC levels.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Study Guide Overview</h2>
        <p className="text-slate-600 mb-6">
          The Linux LPIC certification path requires mastery of system administration, networking, security, and troubleshooting. This guide breaks down essential topics for each level.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">LPIC-1 Essential Topics</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-5 mb-6">
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>System architecture and hardware configuration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>Linux installation and package management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>GNU and Unix commands, file operations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>Users, groups, permissions, and file security</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>System administration and processes</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Study Tips & Strategies</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">💡 Hands-On Practice</h3>
            <p className="text-slate-600 text-sm">Set up Linux VMs and practice all commands in a real environment. Theory alone isn't enough.</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">📚 Use Multiple Resources</h3>
            <p className="text-slate-600 text-sm">Combine official LPI materials, online courses, and practice exams for comprehensive coverage.</p>
          </div>
          <div className="bg-purple-50 rounded-lg border border-purple-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">⏱️ Time Management</h3>
            <p className="text-slate-600 text-sm">Allocate sufficient study time (80-120+ hours) and create a study schedule that fits your pace.</p>
          </div>
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">✅ Mock Exams</h3>
            <p className="text-slate-600 text-sm">Take full-length practice exams regularly to identify weak areas and get comfortable with exam format.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Common Exam Mistakes</h2>
        <ul className="text-slate-600 space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">✗</span>
            <span>Skipping hands-on practice and only studying theory</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">✗</span>
            <span>Not understanding the "why" behind commands</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">✗</span>
            <span>Rushing through topics without deep understanding</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">✗</span>
            <span>Ignoring security and permissions concepts</span>
          </li>
        </ul>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/roadmaps" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-red-400 transition-colors">
              <p className="font-semibold text-slate-900">🗺️ LPIC Path</p>
              <p className="text-sm text-slate-600">Complete certification roadmap</p>
            </Link>
            <Link href="/comparisons" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-red-400 transition-colors">
              <p className="font-semibold text-slate-900">⚖️ Comparisons</p>
              <p className="text-sm text-slate-600">Compare Linux certifications</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Pass Your LPIC Exam?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive LPIC exam dumps, practice tests, and AI-powered study assistance with detailed explanations.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
