import Link from 'next/link'

const PACKAGES = [
  {
    id: 'focus-session',
    name: 'Focus Session',
    duration: '45 minutes',
    price: '$99',
    badge: null,
    subline: 'Included in Pro plan',
    features: [
      'Full exam readiness assessment',
      'Focused on your weakest domains',
      'Live Q&A on any exam topic',
      'Personalised study plan',
      'Session recording sent after',
      'Email follow-up for 3 days',
    ],
    cta: 'Book 45-min Session',
    highlight: false,
  },
  {
    id: 'deep-dive',
    name: 'Deep Dive',
    duration: '90 minutes',
    price: '$159',
    subline: 'Included in Elite plan',
    features: [
      'Everything in Focus Session',
      'Domain-by-domain breakdown',
      'Hands-on concept walk-through',
      'Custom study roadmap (PDF)',
      'Recording + timestamped notes',
      'Email support for 7 days',
      'Mock exam strategy review',
    ],
    cta: 'Book 90-min Session',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'sprint-pack',
    name: 'Intensive Session',
    duration: '120 minutes',
    price: '$199',
    badge: null,
    subline: 'Deep preparation in one sitting',
    features: [
      'Everything in Deep Dive',
      'Full mock exam walkthrough',
      'Domain-by-domain mastery plan',
      'Unlimited email support for 14 days',
      '100% Pass Guarantee extension',
      'Priority scheduling',
    ],
    cta: 'Book 120-min Session',
    highlight: false,
  },
]

const COACHES = [
  {
    name: 'Alex Morgan',
    initials: 'AM',
    title: 'Cloud & ITSM Expert',
    certs: 'ServiceNow CSA/CSP · AWS SAA · CKA',
    exp: '12 years in cloud infrastructure & IT service management',
    sessions: '340+ sessions',
    color: 'from-sky-500 to-sky-700',
  },
  {
    name: 'Priya Nair',
    initials: 'PN',
    title: 'Azure & Google Cloud Specialist',
    certs: 'Azure 900/104 · Google ACE · ITIL 4 MP',
    exp: '9 years in enterprise cloud architecture & DevOps',
    sessions: '280+ sessions',
    color: 'from-violet-500 to-violet-700',
  },
  {
    name: 'James Okonkwo',
    initials: 'JO',
    title: 'Network & Security Coach',
    certs: 'CompTIA Sec+ · CCNA · Terraform Associate',
    exp: '14 years in network engineering, cybersecurity & IaC',
    sessions: '410+ sessions',
    color: 'from-emerald-500 to-emerald-700',
  },
]

export default function CoachingPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-slate-900 min-h-[240px] flex items-center justify-center px-6 text-center py-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            Live 1-to-1 Sessions · Certified Instructors
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Pass Faster with <span className="text-sky-400">Personal Coaching</span>
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            Book a live session with an expert who has already passed the exam you're preparing for.
          </p>
          <Link
            href="#packages"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-block"
          >
            View Packages & Book →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Choose a Package', desc: 'Pick the session length that fits your prep timeline.' },
            { step: '2', title: 'Select a Time Slot', desc: 'Pick a date and time that works for you from our live calendar.' },
            { step: '3', title: 'Pay Securely', desc: 'Complete checkout via Stripe. You\'ll get an instant confirmation email.' },
            { step: '4', title: 'Join & Pass', desc: 'Connect via Google Meet. Leave with a study roadmap and recording.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3 shadow-md">
                {step}
              </div>
              <h3 className="font-black text-slate-900 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 text-center mb-10">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 flex flex-col border ${
                  pkg.highlight
                    ? 'border-sky-500 bg-white shadow-lg shadow-sky-100'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="font-black text-slate-900 text-lg">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{pkg.duration}</p>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                    <span className="text-slate-500 text-sm">/ booking</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <polyline points="1,5 4,8 9,2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/coaching/book?package=${pkg.id}`}
                  className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-colors ${
                    pkg.highlight
                      ? 'bg-sky-500 hover:bg-sky-600 text-white'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            All sessions include a <strong className="text-slate-600">100% Satisfaction Guarantee</strong>.
          </p>
        </div>
      </section>

      {/* Meet Your Coaches */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-3">Meet Your Coaches</h2>
        <p className="text-slate-500 text-center text-sm mb-12">
          Every coach has personally passed the exams they teach — multiple times.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {COACHES.map(coach => (
            <div key={coach.name} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${coach.color} flex items-center justify-center text-white font-black text-lg flex-shrink-0 select-none`}>
                  {coach.initials}
                </div>
                <div>
                  <div className="font-black text-slate-900 text-base">{coach.name}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{coach.title}</div>
                </div>
              </div>
              {/* Certs */}
              <div className="text-xs font-semibold text-sky-600 leading-relaxed">
                {coach.certs}
              </div>
              {/* Experience */}
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{coach.exp}</p>
              {/* Sessions badge */}
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-full w-fit">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {coach.sessions} completed
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to accelerate your prep?</h2>
        <p className="text-sky-100 text-sm mb-6">Book a session today and walk into exam day with confidence.</p>
        <Link href="#packages" className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-8 py-3.5 rounded-xl transition-colors inline-block">
          Book a Session →
        </Link>
      </section>
    </div>
  )
}
