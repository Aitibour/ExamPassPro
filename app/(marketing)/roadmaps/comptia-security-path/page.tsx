import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CompTIA IT Security Roadmap: A+ to CISSP — ExamPassPro',
  description: 'Complete cybersecurity certification path from CompTIA A+ basics to CISSP expert. 18-24 month learning roadmap.',
  alternates: {
    canonical: '/roadmaps/comptia-security-path',
  },
  openGraph: {
    title: 'CompTIA & Cybersecurity Certification Path',
    description: 'Step-by-step cybersecurity career path from CompTIA fundamentals to CISSP expert certification.',
    url: 'https://exampasspro.com/roadmaps/comptia-security-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-red-600 to-purple-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-red-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                CompTIA IT Security Roadmap
              </h1>
              <p className="text-red-100 text-base mb-6">
                Complete 18-24 month learning path from IT fundamentals to advanced cybersecurity expertise.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors">
                  Start Security Path
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1280&fit=crop"
                alt="Cybersecurity monitoring and threat detection"
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
          The CompTIA security path provides a comprehensive foundation for cybersecurity careers. Progress from IT fundamentals through networking and into advanced security topics culminating in the CISSP expert certification.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Progression</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 1: IT Fundamentals</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>CompTIA A+ (Two Exams)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 6-8 weeks study</li>
              <li>• Pass Rate: 60-70%</li>
              <li>• Cost: $330 (two exams)</li>
              <li>• Focus: Hardware, OS, troubleshooting basics</li>
              <li>• Salary: $35K-$50K</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 2: Networking Foundation</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>CompTIA Network+</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 8-10 weeks study</li>
              <li>• Pass Rate: 50-60%</li>
              <li>• Cost: $370</li>
              <li>• Focus: OSI model, TCP/IP, wireless, security basics</li>
              <li>• Salary: $50K-$75K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: A+ (recommended)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 3: Cybersecurity Specialist</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>CompTIA Security+</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 10-12 weeks study</li>
              <li>• Pass Rate: 60-70%</li>
              <li>• Cost: $370</li>
              <li>• Focus: Threats, encryption, identity management, compliance</li>
              <li>• Salary: $70K-$100K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: Network+ (strongly recommended)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 4: Advanced Security</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Certified Ethical Hacker (CEH) or CISSP</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 12-16 weeks study</li>
              <li>• Pass Rate: 40-50%</li>
              <li>• Cost: $500-$700</li>
              <li>• Focus: Penetration testing, advanced threat analysis, security architecture</li>
              <li>• Salary: $120K-$180K+</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: 3-5 years experience in roles</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Total Time Investment</h2>
        <div className="bg-red-50 rounded-lg border border-red-200 p-6 mb-8">
          <div className="text-center mb-4">
            <div className="text-3xl font-black text-red-600">18-24 months</div>
            <p className="text-slate-600 mt-2">A+ → Network+ → Security+ → CEH/CISSP at moderate pace</p>
          </div>
          <p className="text-slate-600 text-sm text-center">
            <strong>Intensive track: 6-8 months | Moderate pace: 18-24 months | Note: Requires hands-on IT experience</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Who Should Follow This Path?</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>✓ IT professionals transitioning to security</li>
            <li>✓ System administrators wanting security expertise</li>
            <li>✓ Help desk staff advancing their careers</li>
            <li>✓ Network engineers specializing in security</li>
            <li>✓ Security analysts and penetration testers</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Launch Your Cybersecurity Career</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides complete training for all CompTIA and advanced security certifications.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Browse Security Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
