import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AWS vs Microsoft Azure vs Google Cloud — ExamPassPro',
  description: 'Compare the 3 major cloud platforms: AWS, Microsoft Azure, and Google Cloud Platform. Market share, job demand, salaries, and certification paths.',
  alternates: {
    canonical: '/comparisons/aws-vs-azure-vs-gcp',
  },
  openGraph: {
    title: 'AWS vs Microsoft Azure vs Google Cloud',
    description: 'Compare the 3 major cloud platforms for certifications and career paths.',
    url: 'https://exampasspro.com/comparisons/aws-vs-azure-vs-gcp',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-purple-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                AWS vs Azure vs Google Cloud
              </h1>
              <p className="text-purple-100 text-base mb-6">
                Compare the three major cloud platforms. Understand market share, job opportunities, and which cloud platform suits your career goals.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                  View Cloud Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1280&fit=crop"
                alt="Cloud platforms comparison"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
        <p className="text-slate-600 mb-6">
          AWS, Microsoft Azure, and Google Cloud Platform are the three major cloud providers. Each offers different strengths: AWS leads in market share, Azure integrates with Microsoft enterprise tools, and GCP excels in data analytics and machine learning. Your choice depends on market demand, existing infrastructure, and your career goals.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Platform Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-purple-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">AWS</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Market Share:</strong> 32%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Job Postings:</strong> 40% of cloud jobs</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Popular Cert:</strong> Solutions Architect Associate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Entry Cert:</strong> AWS Certified Cloud Practitioner</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Avg Salary:</strong> $135K-$160K</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Microsoft Azure</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Market Share:</strong> 23%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Job Postings:</strong> 25% of cloud jobs</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Popular Cert:</strong> Azure Administrator (AZ-104)</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Entry Cert:</strong> Azure Fundamentals (AZ-900)</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Avg Salary:</strong> $130K-$155K</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-yellow-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Google Cloud</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Market Share:</strong> 11%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Job Postings:</strong> 15% of cloud jobs</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Popular Cert:</strong> Associate Cloud Engineer</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Entry Cert:</strong> Cloud Digital Leader</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Avg Salary:</strong> $128K-$152K</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Differences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">AWS Strengths</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Largest ecosystem and service variety (200+ services)</li>
              <li>• Best for startups and scale-ups</li>
              <li>• Strong global infrastructure</li>
              <li>• Most job openings in cloud industry</li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">Azure Strengths</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Best for enterprises using Windows/Office 365</li>
              <li>• Strong hybrid cloud capabilities</li>
              <li>• Integrated with Microsoft ecosystem</li>
              <li>• Growing rapidly in enterprise market</li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">GCP Strengths</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Best for data analytics and ML workloads</li>
              <li>• Superior BigQuery and AI services</li>
              <li>• Lower pricing for compute resources</li>
              <li>• Growing in tech and startup sectors</li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">Choose If You Want</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• AWS: Maximum job opportunities</li>
              <li>• Azure: Enterprise integration</li>
              <li>• GCP: Data science focus</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-purple-50 rounded-xl border border-purple-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Explore All Cloud Platforms</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro covers all three major cloud platforms with dedicated courses, practice tests, and certifications for AWS, Azure, and Google Cloud.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse Cloud Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
