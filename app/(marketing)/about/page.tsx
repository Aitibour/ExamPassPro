import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-slate-900 min-h-[240px] flex items-center justify-center px-6 text-center py-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            Our Story
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">About ExamPassPro</h1>
          <p className="text-slate-400 text-lg">We help IT professionals pass their certification exams on the first attempt — or we refund every penny.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '12,400+', label: 'Professionals Certified' },
            { value: '98.2%', label: 'First Attempt Pass Rate' },
            { value: '8,700+', label: 'Exam-Style Questions' },
            { value: '10', label: 'Certifications Covered' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-sky-400 mb-1">{value}</div>
              <div className="text-xs text-slate-400 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why We Built This</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              IT certifications are the fastest path to higher pay and better opportunities — but most
              study materials are outdated, generic, and don't reflect what actually appears on the exam.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              ExamPassPro was built to fix that. We source real exam-style questions, build realistic
              timed mock exams that mirror the actual test experience, and layer in a Gemini AI assistant
              so you can understand every concept deeply — not just memorise answers.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We're so confident in our content that we back it with a <strong>100% Pass Guarantee</strong>:
              pass your exam or get a full refund.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-3">What Sets Us Apart</h2>
            <p className="text-slate-400 text-base">Three things that make ExamPassPro different.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                color: 'sky',
                title: 'Real Exam Questions',
                desc: 'Every question is sourced and validated against the latest official exam objectives. No fluff, no outdated content — only what actually appears on the test.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                color: 'violet',
                title: 'Gemini AI Assistant',
                desc: 'Our AI explains every concept in plain English, identifies your weak domains automatically, and adapts to your performance — like having a personal tutor 24/7.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                color: 'green',
                title: '100% Pass Guarantee',
                desc: "Pass your certification or we refund every cent. No questions asked. We stand fully behind our content because it works — 98.2% pass on the first attempt.",
              },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className={`rounded-2xl p-8 border ${
                color === 'sky' ? 'border-sky-500/30 bg-sky-500/10' :
                color === 'violet' ? 'border-violet-500/30 bg-violet-500/10' :
                'border-green-500/30 bg-green-500/10'
              }`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  color === 'sky' ? 'bg-sky-500/20 text-sky-400' :
                  color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {icon}
                </div>
                <h3 className="font-black text-white text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-black text-slate-900 mb-3">Ready to get certified?</h2>
        <p className="text-slate-500 text-sm mb-7">Join 12,400+ professionals who trusted ExamPassPro.</p>
        <Link
          href="/register"
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors inline-block"
        >
          Start Free Today →
        </Link>
      </section>
    </div>
  )
}
