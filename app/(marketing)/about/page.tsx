import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-4">About ExamPassPro</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          We help IT professionals pass their certification exams on the first attempt — or we refund every penny.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Certifications are the fastest path to higher pay and better opportunities in IT. But the exams are tough,
              and most study materials are outdated or don't reflect what actually appears on the test.
            </p>
            <p className="text-slate-600 leading-relaxed">
              ExamPassPro was built to fix that. We source real exam-style questions, build realistic timed mock exams,
              and layer in an AI assistant so you can understand every concept — not just memorise answers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '12,400+', label: 'Professionals Certified' },
              { value: '98.2%', label: 'First Attempt Pass Rate' },
              { value: '8,700+', label: 'Exam Questions' },
              { value: '10', label: 'Certifications Covered' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
                <div className="text-2xl font-black text-sky-600 mb-1">{value}</div>
                <div className="text-xs text-slate-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-10 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Real Exam Questions',
                desc: 'Every question is sourced and validated against the latest exam objectives. No fluff, no outdated content.',
              },
              {
                title: 'AI-Powered Learning',
                desc: 'Our Gemini AI assistant explains every concept in plain English, adapting to your weak areas automatically.',
              },
              {
                title: '100% Pass Guarantee',
                desc: "Pass your exam or we refund every cent. We're confident in our content because it works.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="w-8 h-8 bg-sky-500 rounded-lg mb-4" />
                <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-black text-slate-900 mb-4">Ready to get certified?</h2>
        <p className="text-slate-500 mb-6">Join 12,400+ professionals who trusted ExamPassPro.</p>
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
