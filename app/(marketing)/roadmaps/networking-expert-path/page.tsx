import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Networking Expert Path: CompTIA Network+ to CCNP — ExamPassPro',
  description: 'Complete networking certification roadmap from CompTIA Network+ to Cisco CCNP expert. 14-20 month learning path.',
  alternates: {
    canonical: '/roadmaps/networking-expert-path',
  },
  openGraph: {
    title: 'Networking Expert Certification Path',
    description: 'Step-by-step networking career path from CompTIA Network+ to Cisco CCNP expert certification.',
    url: 'https://exampasspro.com/roadmaps/networking-expert-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-purple-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Networking Expert Path
              </h1>
              <p className="text-purple-100 text-base mb-6">
                Complete 14-20 month learning path from network fundamentals to Cisco expert-level certification.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                  Start Networking Path
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&h=1280&fit=crop"
                alt="Network infrastructure and Cisco equipment"
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
          The networking expert path builds deep expertise in network design, routing, and switching. Progress from CompTIA fundamentals through Cisco certifications to achieve expert-level networking credentials.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Progression</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 1: Networking Fundamentals</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>CompTIA Network+</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 8-10 weeks study</li>
              <li>• Pass Rate: 50-60%</li>
              <li>• Cost: $370</li>
              <li>• Focus: OSI model, TCP/IP, wireless, security basics</li>
              <li>• Salary: $50K-$75K</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 2: Cisco Associate</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Cisco Certified Network Associate (CCNA)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 10-14 weeks study</li>
              <li>• Pass Rate: 50-60%</li>
              <li>• Cost: $330</li>
              <li>• Focus: Routing, switching, IP routing protocols, network security</li>
              <li>• Salary: $75K-$105K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: Network+ (recommended)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 3: Cisco Professional</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Cisco Certified Network Professional (CCNP)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 12-16 weeks study</li>
              <li>• Pass Rate: 40-50%</li>
              <li>• Cost: $500 (exam bundle)</li>
              <li>• Focus: Advanced routing, switching, network design, troubleshooting</li>
              <li>• Salary: $120K-$160K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: CCNA (required)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 4: Cisco Expert (Optional)</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Cisco Certified Internetwork Expert (CCIE)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 20-30 weeks study</li>
              <li>• Pass Rate: 30-35%</li>
              <li>• Cost: $600 (written + lab exams)</li>
              <li>• Focus: Advanced network design, complex troubleshooting, lab-based practical exam</li>
              <li>• Salary: $160K-$220K+</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: CCNP (recommended)</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Total Time Investment</h2>
        <div className="bg-purple-50 rounded-lg border border-purple-200 p-6 mb-8">
          <div className="text-center mb-4">
            <div className="text-3xl font-black text-purple-600">14-20 months</div>
            <p className="text-slate-600 mt-2">Network+ → CCNA → CCNP at moderate pace</p>
          </div>
          <p className="text-slate-600 text-sm text-center">
            <strong>Intensive track: 6-9 months | Moderate pace: 14-20 months | CCIE (optional): +20-30 weeks</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Who Should Follow This Path?</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>✓ Network engineers advancing their expertise</li>
            <li>✓ System administrators specializing in networking</li>
            <li>✓ IT professionals in networking-focused roles</li>
            <li>✓ Infrastructure engineers managing Cisco equipment</li>
            <li>✓ Solutions architects designing network solutions</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-purple-50 rounded-xl border border-purple-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master Advanced Networking</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides comprehensive training for CompTIA Network+, Cisco CCNA, CCNP, and CCIE certifications.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse Networking Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
