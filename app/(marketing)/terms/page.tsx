export const metadata = { title: 'Terms of Service — ExamPassPro' }

const LAST_UPDATED = 'March 26, 2026'

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 px-6 py-16 text-center">
        <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-black text-white mb-3">Terms of Service</h1>
        <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          These Terms of Service ("Terms") govern your access to and use of ExamPassPro ("Service"),
          operated by ExamPassPro ("we", "us", or "our"). By creating an account or using the Service,
          you agree to be bound by these Terms. If you do not agree, do not use the Service.
        </p>

        <Section title="1. Eligibility">
          <p>
            You must be at least 16 years old to use the Service. By using the Service, you represent
            that you meet this requirement and that all information you provide is accurate and complete.
          </p>
        </Section>

        <Section title="2. Account Registration">
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for
            all activity under your account. Notify us immediately at{' '}
            <a href="mailto:support@exampasspro.com" className="text-sky-600 hover:text-sky-800">
              support@exampasspro.com
            </a>{' '}
            if you suspect unauthorized access. We are not liable for losses resulting from unauthorized
            use of your account.
          </p>
        </Section>

        <Section title="3. Purchases and Payment">
          <ul>
            <li>All purchases are processed securely via Stripe.</li>
            <li>
              Prices are listed in USD and are one-time payments (not recurring subscriptions) unless
              otherwise stated.
            </li>
            <li>
              Upon successful payment, access to your purchased plan is granted immediately and linked
              to the associated course.
            </li>
            <li>
              We reserve the right to modify pricing at any time; changes do not affect existing
              purchases.
            </li>
            <li>
              Taxes may apply depending on your jurisdiction and will be displayed at checkout.
            </li>
          </ul>
        </Section>

        <Section title="4. Permitted Use">
          <p>You may use the Service solely for your personal, non-commercial exam preparation. You agree not to:</p>
          <ul>
            <li>Share, sell, or distribute your account credentials or access to any third party.</li>
            <li>Copy, reproduce, or redistribute any exam questions, explanations, or content.</li>
            <li>Use automated tools (bots, scrapers) to access or extract content from the Service.</li>
            <li>Reverse-engineer, decompile, or attempt to extract source code.</li>
            <li>Use the Service for any unlawful purpose or in violation of any regulations.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All content on the Service — including exam questions, explanations, course materials,
            software, logos, and designs — is the exclusive property of ExamPassPro or its licensors
            and is protected by copyright and other intellectual property laws. Nothing in these Terms
            grants you any rights to our intellectual property except the limited license to use the
            Service for personal exam preparation.
          </p>
        </Section>

        <Section title="6. AI Features">
          <p>
            The AI Study Assistant is powered by Google Gemini. AI-generated responses are provided for
            educational guidance only and may occasionally be inaccurate. You should not rely on AI
            responses as the sole source of truth for certification exam content. We are not responsible
            for outcomes based on AI-generated advice.
          </p>
        </Section>

        <Section title="7. Coaching Sessions">
          <ul>
            <li>
              Coaching sessions are booked for specific time slots. Cancellations must be made at least
              24 hours in advance to be eligible for rescheduling.
            </li>
            <li>
              No-shows without 24-hour notice forfeit the session.
            </li>
            <li>
              Sessions are conducted via Google Meet and may be recorded with your consent.
            </li>
            <li>
              Recordings are provided to you within 48 hours after the session.
            </li>
          </ul>
        </Section>

        <Section title="8. Refunds">
          <p>
            Please refer to our{' '}
            <a href="/refund" className="text-sky-600 hover:text-sky-800">Refund Policy</a>{' '}
            for full details on our 100% Pass Guarantee and eligible refund scenarios.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS
            OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
            UNINTERRUPTED, ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
          </p>
          <p>
            We do not guarantee that use of our platform will result in passing any certification exam.
            Exam content, formats, and pass scores are set by third-party certification bodies and may
            change without notice.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXAMPASSPRO SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA,
            OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF THESE TERMS OR THE SERVICE SHALL
            NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless ExamPassPro and its officers, directors, employees,
            and agents from any claims, damages, losses, and expenses (including attorneys' fees) arising
            out of your use of the Service or violation of these Terms.
          </p>
        </Section>

        <Section title="12. Termination">
          <p>
            We may suspend or terminate your account at any time, with or without cause, including for
            violation of these Terms. You may delete your account at any time by contacting us at{' '}
            <a href="mailto:support@exampasspro.com" className="text-sky-600 hover:text-sky-800">
              support@exampasspro.com
            </a>. Upon termination, your right to use the Service ceases immediately.
          </p>
        </Section>

        <Section title="13. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with applicable law. Any disputes
            arising from these Terms or the Service shall be resolved through binding arbitration or in
            the competent courts of the jurisdiction where ExamPassPro operates.
          </p>
        </Section>

        <Section title="14. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of material
            changes by posting the updated Terms on this page and updating the "Last updated" date.
            Continued use of the Service after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="15. Contact">
          <p>
            Questions about these Terms? Contact us at:{' '}
            <a href="mailto:support@exampasspro.com" className="text-sky-600 hover:text-sky-800">
              support@exampasspro.com
            </a>
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
      <div className="text-slate-600 text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-sky-600 [&_a]:hover:text-sky-800">
        {children}
      </div>
    </div>
  )
}
