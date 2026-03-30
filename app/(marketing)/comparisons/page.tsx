import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Certification Comparisons — AWS vs Azure vs CompTIA — ExamPassPro',
  description: 'Compare IT certifications side-by-side. AWS SAA vs Developer Associate, Azure AZ-900 vs Administrator, CompTIA A+ vs Network+, and more. Choose the right cert for your career.',
  alternates: {
    canonical: '/comparisons',
  },
  openGraph: {
    title: 'IT Certification Comparisons & Guide',
    description: 'Compare IT certifications and find the perfect certification path for your IT career goals.',
    url: 'https://exampasspro.com/comparisons',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT Certification Comparisons' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Certification Comparisons',
    description: 'Compare IT certifications and choose the right path for your career.',
  },
}

const comparisons = [
  {
    slug: 'aws-saa-vs-developer',
    title: 'AWS SAA vs AWS Developer Associate',
    shortDesc: 'Solutions Architect Associate vs Developer Associate — which AWS cert is right for you?',
    difficulty: 'Expert Comparison',
  },
  {
    slug: 'azure-az900-vs-administrator',
    title: 'Azure AZ-900 vs Azure Administrator (AZ-104)',
    shortDesc: 'Fundamentals vs Administrator cert — path and difficulty comparison for Microsoft Azure.',
    difficulty: 'Beginner to Advanced',
  },
  {
    slug: 'comptia-aplus-vs-network',
    title: 'CompTIA A+ vs CompTIA Network+',
    shortDesc: 'Hardware & OS vs Networking — comparing CompTIA entry-level certifications.',
    difficulty: 'Entry-Level Comparison',
  },
  {
    slug: 'kubernetes-cka-vs-docker',
    title: 'Kubernetes CKA vs Docker Certified',
    shortDesc: 'Container orchestration vs containerization — choose your container path.',
    difficulty: 'Advanced Comparison',
  },
  {
    slug: 'aws-vs-azure-vs-gcp',
    title: 'AWS vs Microsoft Azure vs Google Cloud',
    shortDesc: 'Compare the 3 major cloud platforms. Market share, job demand, salary, and learning paths.',
    difficulty: 'Strategic Comparison',
  },
  {
    slug: 'aws-saa-vs-google-cloud-ace',
    title: 'AWS SAA-C03 vs Google Cloud Associate Cloud Engineer',
    shortDesc: 'Amazon Web Services vs Google Cloud Platform — head-to-head comparison.',
    difficulty: 'Expert Comparison',
  },
  {
    slug: 'comptia-security-plus-vs-cisco-ccna',
    title: 'CompTIA Security+ vs Cisco CCNA',
    shortDesc: 'Offense vs Defense — comparing cybersecurity and networking certifications.',
    difficulty: 'Professional Comparison',
  },
  {
    slug: 'kubernetes-vs-docker',
    title: 'Kubernetes vs Docker: What\'s the Difference?',
    shortDesc: 'Container basics vs orchestration — understand the Docker and Kubernetes relationship.',
    difficulty: 'Technical Comparison',
  },
]

export default function ComparisonsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-200">Comparisons</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">IT Certification Comparisons</h1>
          <p className="text-slate-400 text-base max-w-3xl">
            Compare IT certifications side-by-side. Understand difficulty levels, job demand, salary expectations, and which certification is right for your career goals.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
            <div className="text-3xl font-black text-sky-600 mb-2">8</div>
            <p className="text-slate-600 text-sm">Popular certification comparisons available</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
            <div className="text-3xl font-black text-sky-600 mb-2">40+</div>
            <p className="text-slate-600 text-sm">Certifications analyzed and compared</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
            <div className="text-3xl font-black text-sky-600 mb-2">100k+</div>
            <p className="text-slate-600 text-sm">Learners using these comparisons</p>
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/comparisons/${comparison.slug}`}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {comparison.title}
                </h2>
                <span className="text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full whitespace-nowrap ml-3">
                  {comparison.difficulty}
                </span>
              </div>
              <p className="text-slate-600 mb-4 line-clamp-2">
                {comparison.shortDesc}
              </p>
              <div className="text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Compare →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 border-t border-sky-100 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Still Unsure Which Cert to Choose?</h2>
          <p className="text-slate-600 mb-6">
            Our AI tutor can help you determine the best certification path based on your experience, goals, and learning style.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Browse All Courses
            </Link>
            <Link
              href="/coaching"
              className="inline-flex items-center px-6 py-3 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-sky-600 hover:text-sky-600 transition-colors"
            >
              Get Coaching
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
