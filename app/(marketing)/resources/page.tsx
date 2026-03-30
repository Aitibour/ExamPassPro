import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Certification Study Guides & Resources — ExamPassPro',
  description: 'Comprehensive study guides, tips, and resources for IT certifications. Learn exam strategies, time management, and best practices from our experts.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'IT Certification Study Guides & Learning Resources',
    description: 'Free study guides and expert tips for passing IT certification exams on your first try.',
    url: 'https://exampasspro.com/resources',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IT Certification Resources' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Certification Study Guides & Resources',
    description: 'Free study guides and expert tips for IT certifications.',
  },
}

const guides = [
  {
    slug: 'aws-saa-study-guide',
    title: 'AWS Solutions Architect Associate (SAA-C03) Study Guide',
    excerpt: 'Complete guide to passing the AWS SAA exam on your first attempt. Learn the 5 core domains, study strategies, and common pitfalls to avoid.',
    category: 'AWS',
    readTime: '15 min',
    difficulty: 'Intermediate',
  },
  {
    slug: 'how-to-pass-aws-saa-first-try',
    title: 'How to Pass AWS SAA-C03 on Your First Try: Expert Strategy',
    excerpt: 'Proven 12-week study plan for AWS Solutions Architect Associate. Learn what to prioritize, practice exam strategies, and time management techniques.',
    category: 'AWS',
    readTime: '18 min',
    difficulty: 'Intermediate',
  },
  {
    slug: 'kubernetes-cka-tips-and-tricks',
    title: 'Kubernetes CKA Tips & Tricks: Passing the Hands-On Exam',
    excerpt: 'Advanced tips for the Kubernetes Certified Administrator exam. Master kubectl shortcuts, debugging techniques, and time-saving tricks.',
    category: 'DevOps',
    readTime: '12 min',
    difficulty: 'Advanced',
  },
  {
    slug: 'azure-az-900-study-plan',
    title: 'Azure AZ-900 Fundamentals: 4-Week Study Plan',
    excerpt: 'Quick study plan for Azure fundamentals. Learn the 4 core pillars, practice with free resources, and pass in just 4 weeks.',
    category: 'Azure',
    readTime: '10 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'comptia-security-plus-domains',
    title: 'CompTIA Security+ Exam Domains Explained (SY0-701)',
    excerpt: 'Break down all 6 domains of CompTIA Security+ exam. Learn threat management, cryptography, identity management, and compliance frameworks.',
    category: 'Security',
    readTime: '14 min',
    difficulty: 'Intermediate',
  },
  {
    slug: 'docker-kubernetes-basics',
    title: 'Docker vs Kubernetes: Understanding Containerization Basics',
    excerpt: 'Learn the difference between Docker and Kubernetes. Understand when to use each, architecture differences, and how they work together.',
    category: 'DevOps',
    readTime: '11 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'exam-day-tips-strategies',
    title: '15 Proven Exam Day Tips & Strategies for IT Certification Success',
    excerpt: 'Science-backed techniques to maximize your score on exam day. Learn test strategy, time management, stress reduction, and problem-solving approaches.',
    category: 'Study Tips',
    readTime: '13 min',
    difficulty: 'All Levels',
  },
  {
    slug: 'best-study-habits-certifications',
    title: 'Building Better Study Habits: The Science of Learning IT Certifications',
    excerpt: 'Learn spaced repetition, active recall, and interleaving. Understand how to study smarter, not just longer, for your IT certification.',
    category: 'Study Tips',
    readTime: '16 min',
    difficulty: 'All Levels',
  },
]

const categoryColors: Record<string, string> = {
  'AWS': 'bg-orange-100 text-orange-700',
  'Azure': 'bg-blue-100 text-blue-700',
  'DevOps': 'bg-red-100 text-red-700',
  'Security': 'bg-purple-100 text-purple-700',
  'Study Tips': 'bg-green-100 text-green-700',
  'Kubernetes': 'bg-blue-100 text-blue-700',
}

export default function ResourcesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-200">Resources</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">IT Certification Study Guides</h1>
          <p className="text-slate-400 text-base max-w-3xl">
            Expert-written study guides, tips, and strategies to help you pass your IT certification on the first try. From AWS to Kubernetes, we cover all major certifications.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
            <div className="text-3xl font-black text-sky-600 mb-2">8+</div>
            <p className="text-slate-600 text-sm">In-depth study guides and tutorials</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
            <div className="text-3xl font-black text-sky-600 mb-2">40+</div>
            <p className="text-slate-600 text-sm">IT certifications with guides</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
            <div className="text-3xl font-black text-sky-600 mb-2">2000+ words</div>
            <p className="text-slate-600 text-sm">Per guide for comprehensive coverage</p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/${guide.slug}`}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex flex-wrap gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${categoryColors[guide.category] || 'bg-slate-100 text-slate-700'}`}>
                    {guide.category}
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                    {guide.difficulty}
                  </span>
                </div>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                {guide.title}
              </h2>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {guide.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>📖 {guide.readTime} read</span>
                <span className="text-sky-600 font-semibold group-hover:gap-1 transition-all">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Stats */}
      <section className="bg-sky-50 border-t border-sky-100 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
            <div>
              <div className="text-3xl font-black text-sky-600">50+</div>
              <p className="text-slate-600 text-sm">Study guides written</p>
            </div>
            <div>
              <div className="text-3xl font-black text-sky-600">40+</div>
              <p className="text-slate-600 text-sm">Certifications covered</p>
            </div>
            <div>
              <div className="text-3xl font-black text-sky-600">100k+</div>
              <p className="text-slate-600 text-sm">Students helped</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-sky-200 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Want Personalized Study Plan?</h2>
            <p className="text-slate-600 mb-6">
              Our AI tutor can create a customized study plan based on your experience level, learning style, and exam date.
            </p>
            <Link
              href="/coaching"
              className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Get AI-Powered Coaching
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
