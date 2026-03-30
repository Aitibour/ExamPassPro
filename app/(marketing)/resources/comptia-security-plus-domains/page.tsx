import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CompTIA Security+ Exam Domains Explained (SY0-701) — ExamPassPro',
  description: 'Complete breakdown of all 6 CompTIA Security+ domains. Master threat management, cryptography, identity management, and compliance.',
  alternates: {
    canonical: '/resources/comptia-security-plus-domains',
  },
  openGraph: {
    title: 'CompTIA Security+ Domains Guide',
    description: 'Detailed explanation of all 6 Security+ exam domains and topics.',
    url: 'https://exampasspro.com/resources/comptia-security-plus-domains',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CompTIA Security+ Domains Guide',
    description: 'Detailed explanation of all 6 Security+ exam domains and topics.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1280&fit=crop"
            alt="Cybersecurity domains"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-purple-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Security+ Domains Explained
          </h1>
          <p className="text-purple-100 text-lg">
            Master all 6 CompTIA Security+ exam domains comprehensively.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">CompTIA Security+ Domains Overview</h2>
        <p className="text-slate-600 mb-6">
          CompTIA Security+ (SY0-701) covers 6 major domains that test your knowledge of cybersecurity threats, mitigation techniques, and best practices.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Domain 1: General Security Concepts (11%)</h3>
            <p className="text-slate-600 text-sm mb-3">CIA Triad, confidentiality, integrity, availability, security policies, defense mechanisms</p>
            <div className="text-xs text-slate-500">Key topics: NIST frameworks, security models, threats</div>
          </div>

          <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Domain 2: Threats, Vulnerabilities & Mitigations (21%)</h3>
            <p className="text-slate-600 text-sm mb-3">Malware, social engineering, vulnerabilities, penetration testing, risk management</p>
            <div className="text-xs text-slate-500">Key topics: Virus, ransomware, phishing, vulnerability scanning</div>
          </div>

          <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Domain 3: Cryptography (17%)</h3>
            <p className="text-slate-600 text-sm mb-3">Encryption types, hashing, digital signatures, certificate management, PKI</p>
            <div className="text-xs text-slate-500">Key topics: AES, RSA, SSL/TLS, hash algorithms, certificate authority</div>
          </div>

          <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Domain 4: Identity & Access Management (16%)</h3>
            <p className="text-slate-600 text-sm mb-3">Authentication, authorization, AAA framework, identity management, access control models</p>
            <div className="text-xs text-slate-500">Key topics: MFA, RBAC, LDAP, SSO, biometrics</div>
          </div>

          <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Domain 5: Security Program Management & Oversight (19%)</h3>
            <p className="text-slate-600 text-sm mb-3">Compliance frameworks, regulations, incident response, disaster recovery, business continuity</p>
            <div className="text-xs text-slate-500">Key topics: HIPAA, PCI-DSS, GDPR, incident handling, legal/compliance</div>
          </div>

          <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Domain 6: Infrastructure, Apps & Secure Software (16%)</h3>
            <p className="text-slate-600 text-sm mb-3">Network security, cloud security, secure development, application hardening</p>
            <div className="text-xs text-slate-500">Key topics: Firewalls, VPN, WAF, SDLC, cloud security</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-purple-50 rounded-xl border border-purple-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master Security+ Domains</h3>
          <p className="text-slate-600 mb-6">
            Get comprehensive domain breakdowns and practice exams for CompTIA Security+.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse Security+ Course
          </Link>
        </div>
      </article>
    </div>
  )
}
