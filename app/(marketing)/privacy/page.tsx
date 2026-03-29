export const metadata = { title: 'Privacy Policy — ExamPassPro' }

const LAST_UPDATED = 'March 26, 2026'

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 px-6 py-16 text-center">
        <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-slate prose-headings:font-black prose-a:text-sky-600 max-w-none">

        <p className="text-slate-500 text-sm leading-relaxed">
          ExamPassPro ("we", "us", or "our") operates the website exampasspro.com and the ExamPassPro
          platform (the "Service"). This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our Service. Please read it carefully.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li><strong>Account information</strong> — name, email address, and password when you register.</li>
            <li><strong>Payment information</strong> — billing details processed securely by Stripe. We never store raw card data.</li>
            <li><strong>Usage data</strong> — exam attempts, scores, answers, study sessions, and feature interactions.</li>
            <li><strong>Communications</strong> — messages you send us via email or our contact form.</li>
            <li><strong>Coaching bookings</strong> — name, email, selected date/time, and package details.</li>
          </ul>
          <p>We also collect certain information automatically:</p>
          <ul>
            <li>Device type, browser, operating system, and IP address.</li>
            <li>Pages visited, time on site, and referring URLs.</li>
            <li>Cookies and similar tracking technologies (see Section 7).</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul>
            <li>Provide, operate, and improve the Service.</li>
            <li>Process transactions and send related confirmations.</li>
            <li>Send account-related notifications (exam results, booking confirmations).</li>
            <li>Respond to your comments, questions, and support requests.</li>
            <li>Personalize AI-powered study recommendations.</li>
            <li>Monitor and analyze usage trends to improve platform features.</li>
            <li>Detect and prevent fraudulent or unauthorized activity.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p>We do <strong>not</strong> sell your personal data to third parties.</p>
        </Section>

        <Section title="3. How We Share Your Information">
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service providers</strong> — Supabase (database), Stripe (payments), Resend (email), Google Gemini (AI features), Vercel (hosting). Each is contractually bound to protect your data.</li>
            <li><strong>Coaching sessions</strong> — your name and email are shared with the coach assigned to your booking.</li>
            <li><strong>Legal requirements</strong> — if required by law, subpoena, or to protect the rights and safety of ExamPassPro or others.</li>
            <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <p>
            We retain your personal data for as long as your account is active or as needed to provide the
            Service. You may request deletion of your account and associated data at any time by emailing
            <a href="mailto:support@exampasspro.com"> support@exampasspro.com</a>. We will delete or
            anonymize your data within 30 days, unless we are required to retain it for legal or
            compliance reasons.
          </p>
        </Section>

        <Section title="5. Security">
          <p>
            We implement industry-standard security measures including encryption in transit (TLS/HTTPS),
            row-level security in our database, and access controls. However, no method of transmission
            over the Internet is 100% secure. We encourage you to use a strong, unique password for your
            account.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data ("right to be forgotten").</li>
            <li>Object to or restrict certain processing.</li>
            <li>Data portability — receive your data in a machine-readable format.</li>
            <li>Withdraw consent at any time where processing is based on consent.</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:support@exampasspro.com">support@exampasspro.com</a>.</p>
        </Section>

        <Section title="7. Cookies">
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Maintain your authentication session.</li>
            <li>Remember your preferences.</li>
            <li>Analyze platform usage with privacy-respecting analytics.</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect your
            ability to log in and use the Service.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            The Service is not directed to individuals under 16. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal information,
            please contact us and we will delete it promptly.
          </p>
        </Section>

        <Section title="9. International Transfers">
          <p>
            Your information may be transferred to and processed in countries other than your own,
            including the United States and European Union. We ensure appropriate safeguards are in place
            (such as standard contractual clauses) to protect your data.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the new policy on this page and updating the "Last updated" date. Continued use of
            the Service after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            Questions about this Privacy Policy? Contact us at:<br />
            <a href="mailto:support@exampasspro.com">support@exampasspro.com</a><br />
            ExamPassPro — exampasspro.com
          </p>
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-black text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}
