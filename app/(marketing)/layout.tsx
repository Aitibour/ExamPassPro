import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/nav/Footer'
import { AdBanner } from '@/components/ads/AdBanner'

// Ad slot IDs — replace with real IDs from your AdSense account
const AD_SLOT_TOP    = process.env.NEXT_PUBLIC_AD_SLOT_TOP    ?? '0000000000'
const AD_SLOT_BOTTOM = process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM ?? '0000000001'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {/* Top leaderboard banner — shown below the navbar */}
      <div className="w-full flex justify-center py-2 bg-white border-b border-slate-100">
        <AdBanner slot={AD_SLOT_TOP} size="responsive" className="w-full max-w-5xl" />
      </div>

      <main>{children}</main>

      {/* Bottom leaderboard banner — shown above the footer */}
      <div className="w-full flex justify-center py-2 bg-white border-t border-slate-100">
        <AdBanner slot={AD_SLOT_BOTTOM} size="responsive" className="w-full max-w-5xl" />
      </div>

      <Footer />
    </>
  )
}
