import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExamPassPro — Pass Your IT Certification First Try',
  description: 'Real exam-style questions, timed mock exams, Gemini AI study assistant, and a 100% Pass Guarantee for 10 top IT certifications.',
  metadataBase: new URL('https://exampasspro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://exampasspro.com',
    siteName: 'ExamPassPro',
    title: 'ExamPassPro — Pass Your IT Certification First Try',
    description: 'Real exam-style questions, timed mock exams, and a 100% Pass Guarantee.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ExamPassPro - IT Certification Prep',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExamPassPro — Pass Your IT Certification First Try',
    description: 'Real exam-style questions, timed mock exams, and a 100% Pass Guarantee.',
    images: ['/og-image.png'],
  },
}

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google AdSense — only injected when publisher ID is set */}
        {PUBLISHER_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

        {/* Claspo Chat Widget */}
        <Script
          id="claspo-init"
          dangerouslySetInnerHTML={{
            __html: `
              !function (t, e, c, n) {
                var s = e.createElement(c);
                s.async = 1;
                s.src = 'https://scripts.claspo.io/scripts/' + n + '.js';
                var r = e.scripts[0];
                r.parentNode.insertBefore(s, r);
                var f = function () { f.c(arguments); };
                f.q = [];
                f.c = function () { f.q.push(arguments); };
                t['claspo'] = t['claspo'] || f;
              }(window, document, 'script', 'F2FADCC8DF06494299B898BD09E565FB');
              claspo('init');
            `,
          }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
