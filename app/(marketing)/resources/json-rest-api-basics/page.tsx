import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON & REST API Basics — API Development Guide — ExamPassPro',
  description: 'Complete guide to JSON and REST API fundamentals. Learn API design, HTTP methods, and practical REST principles for certification exams.',
  alternates: {
    canonical: '/resources/json-rest-api-basics',
  },
  openGraph: {
    title: 'JSON & REST API Basics',
    description: 'Master JSON and REST API fundamentals for IT certifications.',
    url: 'https://exampasspro.com/resources/json-rest-api-basics',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON & REST API Basics',
    description: 'Master JSON and REST API fundamentals for IT certifications.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-teal-500 to-teal-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1280&fit=crop"
            alt="REST API and JSON development"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-teal-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            JSON & REST API Basics
          </h1>
          <p className="text-teal-100 text-lg">
            Essential concepts for modern API development and cloud certifications.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">API Fundamentals</h2>
        <p className="text-slate-600 mb-6">
          REST APIs and JSON are foundational technologies for cloud services, microservices, and modern application development. Understanding these concepts is critical for AWS, Azure, GCP, and DevOps certifications.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Concepts</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">REST Principles</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Client-Server:</strong> Separation of concerns between client and server</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Statelessness:</strong> Each request contains all info needed for processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Cacheability:</strong> Responses can be cached for performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Uniform Interface:</strong> Consistent API design patterns</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">HTTP Methods</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>GET:</strong> Retrieve resource data (safe, idempotent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>POST:</strong> Create new resources (not idempotent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>PUT:</strong> Replace entire resource (idempotent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>DELETE:</strong> Remove resource (idempotent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>PATCH:</strong> Partial resource update</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">JSON Structure</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Objects:</strong> Key-value pairs enclosed in curly braces {}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Arrays:</strong> Ordered lists of values []</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Data Types:</strong> Strings, numbers, booleans, null</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Nesting:</strong> Objects and arrays can contain each other</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">HTTP Status Codes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-bold text-slate-900 mb-2">2xx Success</h4>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>200 OK — Request successful</li>
              <li>201 Created — Resource created</li>
              <li>204 No Content — Success, no response body</li>
            </ul>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-bold text-slate-900 mb-2">4xx Client Error</h4>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>400 Bad Request — Invalid input</li>
              <li>401 Unauthorized — Auth required</li>
              <li>404 Not Found — Resource missing</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-bold text-slate-900 mb-2">5xx Server Error</h4>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>500 Internal Server Error</li>
              <li>502 Bad Gateway</li>
              <li>503 Service Unavailable</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-bold text-slate-900 mb-2">3xx Redirection</h4>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>301 Moved Permanently</li>
              <li>302 Found (Temporary redirect)</li>
              <li>304 Not Modified</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Best Practices</h2>
        <ul className="text-slate-600 space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">✓</span>
            <span>Use plural nouns for resource URLs (/users, /products)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">✓</span>
            <span>Include API versioning in the URL (/v1/users)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">✓</span>
            <span>Use appropriate HTTP status codes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">✓</span>
            <span>Implement proper authentication (JWT, OAuth)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 font-bold">✓</span>
            <span>Provide clear error messages in responses</span>
          </li>
        </ul>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-teal-400 transition-colors">
              <p className="font-semibold text-slate-900">📚 All Guides</p>
              <p className="text-sm text-slate-600">More study resources and tutorials</p>
            </Link>
            <Link href="/courses" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-teal-400 transition-colors">
              <p className="font-semibold text-slate-900">🎯 Practice Tests</p>
              <p className="text-sm text-slate-600">API-related exam practice</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-teal-50 rounded-xl border border-teal-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master API Development for Your Certification</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive exam dumps, practice tests, and AI-powered study assistance covering REST APIs and JSON.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
