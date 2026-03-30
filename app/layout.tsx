import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExamPassPro — Pass Your IT Certification First Try',
  description: 'Real exam-style questions, timed mock exams, Gemini AI study assistant, and a 100% Pass Guarantee for 10 top IT certifications.',
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

        {/* Poptin Pixel */}
        <Script
          id="pixel-script-poptin"
          src="https://cdn.popt.in/pixel.js?id=9c22f6ba3a968"
          async
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
