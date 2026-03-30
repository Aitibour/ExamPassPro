import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface RoadmapContent {
  title: string
  description: string
  metaDescription: string
  totalMonths: string
  role: string
  overview: string
  stages: Array<{
    stageName: string
    certs: Array<{
      certName: string
      difficulty: string
      timeMonth: string
      salary: string
      description: string
      skills: string[]
      role: string
    }>
  }>
}

const roadmapsData: Record<string, RoadmapContent> = {
  'aws-certification-path': {
    title: 'AWS Cloud Architect Certification Path: Complete Roadmap',
    description: 'Step-by-step learning path from AWS Cloud Practitioner to Solutions Architect Professional.',
    metaDescription: 'AWS certification roadmap: Cloud Practitioner → SAA → SAP. Complete path for cloud architects with timeline, salary, and skills.',
    totalMonths: '12-18 months',
    role: 'Cloud Architect / AWS Solutions Architect',
    overview: `This roadmap takes you from AWS cloud basics to enterprise architecture expertise. Perfect for developers transitioning to cloud architecture or operations engineers moving to AWS.`,
    stages: [
      {
        stageName: 'Stage 1: Foundation (Months 1-2)',
        certs: [
          {
            certName: 'AWS Cloud Practitioner (CLF-C02)',
            difficulty: 'Beginner',
            timeMonth: '3-4 weeks',
            salary: 'Foundation knowledge (not a paid role)',
            description: 'Learn AWS fundamentals, core services, and cloud concepts. Perfect entry point for newcomers.',
            skills: ['AWS core services', 'Cloud economics', 'Security basics', 'AWS support plans'],
            role: 'Cloud Support Associate',
          },
        ],
      },
      {
        stageName: 'Stage 2: Associate Level (Months 3-8)',
        certs: [
          {
            certName: 'AWS Solutions Architect Associate (SAA-C03)',
            difficulty: 'Intermediate',
            timeMonth: '12-16 weeks',
            salary: '$100,000 - $140,000/year',
            description: 'Master AWS architecture design for resilient, high-performing, and cost-optimized systems.',
            skills: ['Multi-AZ architecture', 'High availability & disaster recovery', 'Database design', 'Cost optimization', 'Security architecture', 'Networking (VPC, subnets, routing)'],
            role: 'Solutions Architect Associate / Junior Cloud Architect',
          },
        ],
      },
      {
        stageName: 'Stage 3: Professional Level (Months 9-18)',
        certs: [
          {
            certName: 'AWS Solutions Architect Professional (SAP)',
            difficulty: 'Advanced',
            timeMonth: '16-20 weeks',
            salary: '$140,000 - $180,000+/year',
            description: 'Design complex enterprise architectures across multiple AWS regions and accounts.',
            skills: ['Complex multi-region architectures', 'Enterprise governance', 'Advanced networking', 'Hybrid cloud solutions', 'Migration strategies', 'Cost management at scale'],
            role: 'Senior Solutions Architect / Enterprise Architect',
          },
        ],
      },
    ],
  },
  'kubernetes-devops-path': {
    title: 'Kubernetes & DevOps Engineer Path: From Docker to CKA',
    description: 'Master containerization and Kubernetes orchestration for DevOps and SRE roles.',
    metaDescription: 'Kubernetes DevOps roadmap: Docker → Kubernetes CKA → CKAD. Complete path for DevOps engineers with timeline and career progression.',
    totalMonths: '8-12 months',
    role: 'DevOps Engineer / Site Reliability Engineer (SRE)',
    overview: `This roadmap takes you from containerization basics (Docker) through production Kubernetes administration and development. Ideal for backend engineers, system administrators, or anyone moving into DevOps.`,
    stages: [
      {
        stageName: 'Stage 1: Containerization Fundamentals (Months 1-3)',
        certs: [
          {
            certName: 'Docker Certified Associate (DCA)',
            difficulty: 'Intermediate',
            timeMonth: '8-10 weeks',
            salary: '$85,000 - $110,000/year',
            description: 'Master Docker containerization, image building, and container orchestration basics.',
            skills: ['Docker images & registries', 'Container networking', 'Volume management', 'Docker Compose', 'Security & optimization'],
            role: 'DevOps Engineer / Docker specialist',
          },
        ],
      },
      {
        stageName: 'Stage 2: Kubernetes Administration (Months 4-9)',
        certs: [
          {
            certName: 'Kubernetes Certified Administrator (CKA)',
            difficulty: 'Advanced',
            timeMonth: '20-24 weeks (intensive)',
            salary: '$120,000 - $160,000/year',
            description: 'Become a Kubernetes expert. Master cluster management, debugging, and production operations.',
            skills: ['Kubernetes architecture', 'Pod & deployment management', 'Networking & services', 'Storage orchestration', 'Cluster troubleshooting', 'Security policies', 'RBAC'],
            role: 'Kubernetes Administrator / Platform Engineer',
          },
        ],
      },
      {
        stageName: 'Stage 3: Advanced - Kubernetes Development (Months 10-12)',
        certs: [
          {
            certName: 'Kubernetes Certified Application Developer (CKAD)',
            difficulty: 'Advanced',
            timeMonth: '12-16 weeks (parallel with CKA)',
            salary: '$130,000 - $170,000/year',
            description: 'Design and deploy applications on Kubernetes. Complement CKA with developer perspective.',
            skills: ['Application deployment', 'ConfigMaps & Secrets', 'Multi-container pods', 'Observability', 'Helm basics'],
            role: 'Senior DevOps Engineer / SRE',
          },
        ],
      },
    ],
  },
  'azure-certification-path': {
    title: 'Microsoft Azure Certification Roadmap: Administrator to Solutions Architect',
    description: 'Complete learning path for Azure cloud platform from fundamentals to architecture design.',
    metaDescription: 'Azure certification roadmap: AZ-900 → AZ-104 → AZ-305. Complete path for Azure administrators and architects with salary info.',
    totalMonths: '10-16 months',
    role: 'Azure Administrator / Cloud Architect',
    overview: `Master Microsoft Azure from cloud fundamentals through enterprise solution architecture. Great for IT professionals moving from on-premises to cloud.`,
    stages: [
      {
        stageName: 'Stage 1: Azure Fundamentals (Months 1-1.5)',
        certs: [
          {
            certName: 'Azure Fundamentals (AZ-900)',
            difficulty: 'Beginner',
            timeMonth: '3-4 weeks',
            salary: 'Foundation knowledge ($50,000-70,000)',
            description: 'Learn Azure cloud concepts, core services, and pricing models.',
            skills: ['Azure cloud concepts', 'Core services overview', 'Azure storage and compute', 'Networking basics', 'Security and compliance'],
            role: 'Cloud Support, Junior Cloud Engineer',
          },
        ],
      },
      {
        stageName: 'Stage 2: Administrator Level (Months 2-10)',
        certs: [
          {
            certName: 'Azure Administrator (AZ-104)',
            difficulty: 'Intermediate',
            timeMonth: '16-20 weeks',
            salary: '$95,000 - $135,000/year',
            description: 'Manage Azure subscriptions, resources, networks, storage, compute, and identity.',
            skills: ['Azure subscriptions & management', 'Virtual machines & scaling', 'Azure Storage & databases', 'Virtual networking', 'Identity & access management', 'Monitoring & backups'],
            role: 'Azure Administrator / Cloud Operations Engineer',
          },
        ],
      },
      {
        stageName: 'Stage 3: Solutions Architect Level (Months 11-16)',
        certs: [
          {
            certName: 'Azure Solutions Architect Expert (AZ-305)',
            difficulty: 'Advanced',
            timeMonth: '16-20 weeks',
            salary: '$130,000 - $170,000/year',
            description: 'Design complex Azure solutions for enterprise workloads and organizations.',
            skills: ['Solution design patterns', 'Hybrid solutions', 'Governance & compliance', 'Advanced networking', 'Disaster recovery & business continuity', 'Cost optimization'],
            role: 'Solutions Architect / Senior Cloud Architect',
          },
        ],
      },
    ],
  },
  'comptia-security-path': {
    title: 'CompTIA Security Career Path: A+ Through CISSP',
    description: 'Comprehensive IT security certification roadmap from fundamentals to expert-level CISSP.',
    metaDescription: 'CompTIA security roadmap: A+ → Network+ → Security+ → CEH/CISSP. Complete IT security career path with timeline.',
    totalMonths: '18-24 months',
    role: 'Security Engineer / Information Security Professional',
    overview: `Build a career in cybersecurity starting with IT fundamentals through advanced threat analysis and enterprise security architecture.`,
    stages: [
      {
        stageName: 'Stage 1: IT Fundamentals (Months 1-4)',
        certs: [
          {
            certName: 'CompTIA A+ (220-1101 & 1102)',
            difficulty: 'Entry-level',
            timeMonth: '12-16 weeks',
            salary: '$40,000 - $60,000/year',
            description: 'Master hardware, software, networking basics, and troubleshooting.',
            skills: ['Hardware & peripherals', 'Operating systems', 'Networking fundamentals', 'Troubleshooting', 'Mobile & cloud basics'],
            role: 'Desktop Support Technician / IT Help Desk',
          },
        ],
      },
      {
        stageName: 'Stage 2: Networking Foundations (Months 5-9)',
        certs: [
          {
            certName: 'CompTIA Network+ (N10-008)',
            difficulty: 'Intermediate',
            timeMonth: '12-16 weeks',
            salary: '$55,000 - $80,000/year',
            description: 'Deep dive into networking, protocols, troubleshooting, and network design.',
            skills: ['Networking protocols & models', 'TCP/IP', 'Network devices', 'Network troubleshooting', 'Wireless networking', 'Network security basics'],
            role: 'Network Technician / Junior Network Administrator',
          },
        ],
      },
      {
        stageName: 'Stage 3: Security Fundamentals (Months 10-15)',
        certs: [
          {
            certName: 'CompTIA Security+ (SY0-701)',
            difficulty: 'Intermediate',
            timeMonth: '14-18 weeks',
            salary: '$75,000 - $110,000/year',
            description: 'Comprehensive security knowledge: threats, cryptography, compliance, and incident response.',
            skills: ['Threat management', 'Cryptography', 'Identity & access management', 'Security operations', 'Incident response', 'Compliance frameworks (SOC 2, HIPAA, PCI-DSS)'],
            role: 'Security Administrator / Security Analyst',
          },
        ],
      },
      {
        stageName: 'Stage 4: Advanced Security (Months 16-24)',
        certs: [
          {
            certName: 'CEH (Certified Ethical Hacker) or CISSP',
            difficulty: 'Advanced/Expert',
            timeMonth: '16-24 weeks',
            salary: '$120,000 - $180,000+/year',
            description: 'Advanced penetration testing (CEH) or enterprise security architecture (CISSP).',
            skills: ['Penetration testing', 'Vulnerability assessment', 'Exploit development', 'Enterprise security governance', 'Risk management', 'Security architecture'],
            role: 'Security Engineer / Penetration Tester / Enterprise Architect',
          },
        ],
      },
    ],
  },
}

export function generateMetadata({ params }: { params: { roadmap: string } }): Metadata {
  const content = roadmapsData[params.roadmap]
  if (!content) return {}

  return {
    title: `${content.title} — ExamPassPro`,
    description: content.metaDescription,
    alternates: {
      canonical: `/roadmaps/${params.roadmap}`,
    },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `https://exampasspro.com/roadmaps/${params.roadmap}`,
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function RoadmapPage({ params }: { params: { roadmap: string } }) {
  const content = roadmapsData[params.roadmap]
  if (!content) return notFound()

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb & Hero */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-slate-200 transition-colors">Roadmaps</Link>
            <span>›</span>
            <span className="text-slate-200 truncate">{content.role}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div>
              <div className="text-slate-200 font-semibold">Duration</div>
              <div>{content.totalMonths}</div>
            </div>
            <div>
              <div className="text-slate-200 font-semibold">Target Role</div>
              <div>{content.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          {content.overview}
        </p>
      </section>

      {/* Stages Timeline */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Certification Timeline</h2>

        <div className="space-y-8">
          {content.stages.map((stage, stageIdx) => (
            <div key={stageIdx}>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-sky-600">
                {stage.stageName}
              </h3>

              <div className="space-y-6 ml-4 border-l-2 border-sky-200 pl-6">
                {stage.certs.map((cert, certIdx) => (
                  <div key={certIdx} className="bg-white rounded-xl border border-slate-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{cert.certName}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                            {cert.difficulty}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            ⏱️ {cert.timeMonth}
                          </span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                            {cert.salary}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 font-semibold">Primary Role</div>
                        <div className="text-sm font-bold text-slate-900">{cert.role}</div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">
                      {cert.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-slate-900 text-sm mb-2">Key Skills You'll Master:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Content */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/comparisons" className="p-5 bg-white rounded-lg border border-slate-200 hover:border-sky-400 transition-colors text-center">
              <p className="text-2xl mb-2">⚖️</p>
              <p className="font-semibold text-slate-900 mb-2">Compare Certs</p>
              <p className="text-sm text-slate-600">Side-by-side certification comparisons</p>
            </Link>
            <Link href="/resources" className="p-5 bg-white rounded-lg border border-slate-200 hover:border-sky-400 transition-colors text-center">
              <p className="text-2xl mb-2">📚</p>
              <p className="font-semibold text-slate-900 mb-2">Study Guides</p>
              <p className="text-sm text-slate-600">In-depth exam preparation guides</p>
            </Link>
            <Link href="/coaching" className="p-5 bg-white rounded-lg border border-slate-200 hover:border-sky-400 transition-colors text-center">
              <p className="text-2xl mb-2">🧑‍🎓</p>
              <p className="font-semibold text-slate-900 mb-2">Get Coaching</p>
              <p className="text-sm text-slate-600">AI-powered personalized learning</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-sky-50 border-t border-sky-100 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Start This Roadmap?</h2>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides all certifications in this roadmap with comprehensive study materials, practice exams, and expert guidance.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            Explore Courses for This Roadmap
          </Link>
        </div>
      </section>
    </div>
  )
}
