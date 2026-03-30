import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ComparisonContent {
  title: string
  description: string
  metaDescription: string
  sections: Array<{
    title: string
    subsections?: Array<{ subtitle: string; points: string[] }>
    text?: string
  }>
}

const comparisonsData: Record<string, ComparisonContent> = {
  'aws-saa-vs-developer': {
    title: 'AWS Solutions Architect Associate vs Developer Associate',
    description: 'Compare AWS SAA-C03 vs AWS Developer Associate certifications.',
    metaDescription: 'AWS SAA vs Developer Associate: difficulty, exam topics, jobs, and salary.',
    sections: [
      {
        title: 'Quick Overview',
        text: 'AWS SAA (Solutions Architect Associate) focuses on infrastructure design, while AWS Developer Associate focuses on application development. Both are intermediate-level certifications.',
      },
      {
        title: 'Difficulty Comparison',
        subsections: [
          {
            subtitle: 'AWS SAA-C03',
            points: ['Difficulty: Moderate-Hard', 'Pass Rate: 45-55%', 'Study Time: 120-200 hours', 'Questions: 65'],
          },
          {
            subtitle: 'Developer Associate',
            points: ['Difficulty: Moderate', 'Pass Rate: 55-65%', 'Study Time: 100-150 hours', 'Questions: 65'],
          },
        ],
      },
      {
        title: 'Career Paths',
        subsections: [
          {
            subtitle: 'After AWS SAA',
            points: ['Solutions Architect', 'Cloud Infrastructure Engineer', 'DevOps Engineer', 'Salary: $130K-$160K/year'],
          },
          {
            subtitle: 'After Developer Associate',
            points: ['AWS Developer', 'Backend Engineer', 'Full Stack Developer', 'Salary: $120K-$150K/year'],
          },
        ],
      },
      {
        title: 'Which Should You Choose?',
        subsections: [
          {
            subtitle: 'Choose SAA If:',
            points: ['Want to design cloud architecture', 'Prefer infrastructure over coding', 'Target architect roles', 'Coming from IT Operations'],
          },
          {
            subtitle: 'Choose Developer If:',
            points: ['Are a software developer', 'Build applications on AWS', 'Prefer hands-on coding', 'Want backend/full-stack roles'],
          },
        ],
      },
    ],
  },
  'azure-az900-vs-administrator': {
    title: 'Azure AZ-900 vs Azure Administrator (AZ-104)',
    description: 'Compare Azure fundamentals vs administrator certification levels.',
    metaDescription: 'Azure AZ-900 vs AZ-104 Administrator: difficulty, jobs, and learning path.',
    sections: [
      {
        title: 'Overview',
        text: 'AZ-900 is entry-level fundamentals. AZ-104 is intermediate administration. Most start with AZ-900 then progress to AZ-104.',
      },
      {
        title: 'Exam Comparison',
        subsections: [
          {
            subtitle: 'AZ-900 Fundamentals',
            points: ['Level: Beginner', 'Pass Rate: 70%+', 'Study Time: 20-40 hours', 'Duration: 85 minutes'],
          },
          {
            subtitle: 'AZ-104 Administrator',
            points: ['Level: Intermediate', 'Pass Rate: 40-50%', 'Study Time: 100-150 hours', 'Duration: 150 minutes'],
          },
        ],
      },
      {
        title: 'Career Impact',
        subsections: [
          {
            subtitle: 'AZ-900 Roles',
            points: ['Cloud Support Associate', 'Junior Cloud Engineer', 'Salary: $45K-$65K/year'],
          },
          {
            subtitle: 'AZ-104 Roles',
            points: ['Azure Administrator', 'Cloud Operations Engineer', 'Salary: $90K-$130K/year'],
          },
        ],
      },
    ],
  },
  'comptia-aplus-vs-network': {
    title: 'CompTIA A+ vs CompTIA Network+',
    description: 'Compare CompTIA entry-level IT and networking certifications.',
    metaDescription: 'CompTIA A+ vs Network+: difficulty, jobs, which to take first.',
    sections: [
      {
        title: 'Overview',
        text: 'A+ covers hardware and OS fundamentals. Network+ covers networking. Many pursue A+ first, then Network+.',
      },
      {
        title: 'Difficulty & Requirements',
        subsections: [
          {
            subtitle: 'CompTIA A+',
            points: ['Exams: 2 required', 'Pass Rate: 50-60%', 'Study Time: 150-200 hours'],
          },
          {
            subtitle: 'CompTIA Network+',
            points: ['Exams: 1', 'Pass Rate: 40-50%', 'Study Time: 120-180 hours'],
          },
        ],
      },
      {
        title: 'Career Paths',
        subsections: [
          {
            subtitle: 'A+ Careers',
            points: ['Desktop Support Tech', 'IT Help Desk', 'Salary: $38K-$52K/year'],
          },
          {
            subtitle: 'Network+ Careers',
            points: ['Network Technician', 'Junior Network Admin', 'Salary: $50K-$70K/year'],
          },
        ],
      },
    ],
  },
  'kubernetes-cka-vs-docker': {
    title: 'Kubernetes CKA vs Docker Certified Associate',
    description: 'Compare Kubernetes and Docker container certifications.',
    metaDescription: 'Kubernetes CKA vs Docker Certified: hands-on focus, difficulty, and career paths.',
    sections: [
      {
        title: 'What They Cover',
        text: 'Docker is containerization (building containers). Kubernetes is orchestration (managing containers at scale).',
      },
      {
        title: 'Exam Format',
        subsections: [
          {
            subtitle: 'Kubernetes CKA',
            points: ['Format: 100% hands-on lab', 'Duration: 2 hours', 'Pass Rate: 45-55%', 'Study Time: 200-300 hours'],
          },
          {
            subtitle: 'Docker Certified',
            points: ['Format: Multiple choice + practical', 'Duration: 90 minutes', 'Pass Rate: 60-70%', 'Study Time: 80-120 hours'],
          },
        ],
      },
      {
        title: 'Careers',
        subsections: [
          {
            subtitle: 'CKA Path',
            points: ['Kubernetes Admin', 'DevOps Engineer', 'SRE', 'Salary: $120K-$170K/year'],
          },
          {
            subtitle: 'Docker Path',
            points: ['DevOps Engineer', 'Backend Developer', 'Salary: $100K-$150K/year'],
          },
        ],
      },
    ],
  },
  'aws-vs-azure-vs-gcp': {
    title: 'AWS vs Microsoft Azure vs Google Cloud',
    description: 'Compare the three major cloud platforms.',
    metaDescription: 'AWS vs Azure vs GCP: market share, job demand, learning path comparison.',
    sections: [
      {
        title: 'Platform Overview',
        subsections: [
          {
            subtitle: 'Amazon Web Services (AWS)',
            points: ['Market Share: 32% (largest)', 'Services: 200+', 'Job Demand: Highest'],
          },
          {
            subtitle: 'Microsoft Azure',
            points: ['Market Share: 23% (second)', 'Services: 200+', 'Job Demand: Very High'],
          },
          {
            subtitle: 'Google Cloud (GCP)',
            points: ['Market Share: 11% (third)', 'Services: 100+', 'Job Demand: Growing'],
          },
        ],
      },
      {
        title: 'Learning Difficulty',
        subsections: [
          {
            subtitle: 'AWS',
            points: ['Easiest to learn (most resources)', 'Largest community', 'Most documentation'],
          },
          {
            subtitle: 'Azure',
            points: ['Good for Windows/Office users', 'Growing documentation', 'Enterprise focus'],
          },
          {
            subtitle: 'GCP',
            points: ['Smallest learning community', 'Best for data/ML', 'Fewer study resources'],
          },
        ],
      },
    ],
  },
}

export function generateMetadata({ params }: { params: { comparison: string } }): Metadata {
  const content = comparisonsData[params.comparison]
  if (!content) return {}

  return {
    title: `${content.title} — ExamPassPro`,
    description: content.metaDescription,
    alternates: {
      canonical: `/comparisons/${params.comparison}`,
    },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `https://exampasspro.com/comparisons/${params.comparison}`,
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function ComparisonPage({ params }: { params: { comparison: string } }) {
  const content = comparisonsData[params.comparison]
  if (!content) return notFound()

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/comparisons" className="hover:text-slate-200 transition-colors">Comparisons</Link>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">
            {content.title}
          </h1>
          <p className="text-slate-400 text-base">
            {content.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-12 px-6">
        {content.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {section.title}
            </h2>

            {section.text && (
              <p className="text-slate-600 mb-6 leading-relaxed">
                {section.text}
              </p>
            )}

            {section.subsections && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="bg-white rounded-lg border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900 mb-3">{sub.subtitle}</h3>
                    <ul className="space-y-2">
                      {sub.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-sky-600 font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        <div className="mt-12 p-8 bg-sky-50 rounded-xl border border-sky-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Study for Your Certification?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive exam dumps, practice tests, and AI-powered study assistance for all these certifications.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
