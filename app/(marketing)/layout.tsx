import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/nav/Footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
