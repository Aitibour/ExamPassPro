import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cisco CCNP Certification Path — ExamPassPro',
  description: 'Cisco CCNP certification roadmap: CCNP Enterprise, Data Center, Security. Exam strategy and career growth.',
  alternates: {
    canonical: '/roadmaps/cisco-ccnp-path',
  },
  openGraph: {
    title: 'Cisco CCNP Certification Path',
    description: 'Master Cisco networking with the CCNP certification roadmap.',
    url: 'https://exampasspro.com/roadmaps/cisco-ccnp-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-amber-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&h=1280&fit=crop"
            alt="Cisco networking infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-amber-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Cisco CCNP Certification Path
          </h1>
          <p className="text-amber-100 text-lg">
            Advanced networking expertise with Cisco CCNP specializations.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          The Cisco CCNP (Cisco Certified Network Professional) is an advanced networking certification requiring CCNA as a prerequisite. Multiple specialization tracks are available.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Specialization Tracks</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">CCNP Enterprise</h3>
            <p className="text-slate-600 text-sm mb-3">Core networking infrastructure and enterprise routing/switching.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 150-250 hours</li>
              <li>• Exams: ENARSI, ENCOR, ENSLD</li>
              <li>• Salary Range: $110K-$150K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">CCNP Data Center</h3>
            <p className="text-slate-600 text-sm mb-3">Data center networking, virtualization, and storage.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 150-250 hours</li>
              <li>• Exams: DCCORE, DCDESN, DCCEN</li>
              <li>• Salary Range: $120K-$160K/year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">CCNP Security</h3>
            <p className="text-slate-600 text-sm mb-3">Cybersecurity, firewalls, VPN, and threat management.</p>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• Study Time: 150-250 hours</li>
              <li>• Exams: SCOR, SCFW, SCSN</li>
              <li>• Salary Range: $125K-$170K/year</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Prerequisites & Requirements</h2>
        <ul className="text-slate-600 space-y-2 mb-6">
          <li>• Valid CCNA certification (any track)</li>
          <li>• 1+ years of hands-on networking experience</li>
          <li>• Solid understanding of routing, switching, and networking protocols</li>
          <li>• Pass the core exam + specialization exams</li>
        </ul>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-400 transition-colors">
              <p className="font-semibold text-slate-900">📚 Study Guides</p>
              <p className="text-sm text-slate-600">In-depth tutorials and exam strategies</p>
            </Link>
            <Link href="/comparisons" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-400 transition-colors">
              <p className="font-semibold text-slate-900">⚖️ Comparisons</p>
              <p className="text-sm text-slate-600">Compare networking certifications</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-amber-50 rounded-xl border border-amber-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Advance Your Networking Career?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive CCNP exam dumps, practice tests, and AI-powered study assistance for all specialization tracks.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
