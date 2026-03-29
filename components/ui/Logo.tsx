import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  inverted?: boolean   // true = white text (for dark backgrounds)
  className?: string
}

export function Logo({ size = 'md', inverted = false, className }: LogoProps) {
  const titleCls =
    size === 'sm' ? 'text-[18px]' :
    size === 'lg' ? 'text-[30px]' : 'text-[22px]'

  const tagCls =
    size === 'sm' ? 'text-[6.5px] tracking-[0.22em]' :
    size === 'lg' ? 'text-[10px] tracking-[0.22em]'  : 'text-[8px] tracking-[0.22em]'

  const wordColor  = inverted ? '#ffffff' : '#111111'
  const proColor   = inverted ? '#60a5fa' : '#1a5faa'
  const tagColor   = inverted ? 'rgba(255,255,255,0.6)' : '#666666'

  return (
    <Link
      href="/"
      className={`flex flex-col items-start no-underline leading-none select-none ${className ?? ''}`}
    >
      <div className={`${titleCls} font-black leading-none`} style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: '-0.5px' }}>
        <span style={{ color: wordColor }}>ExamPass</span>
        <span style={{ color: proColor }}>PRO</span>
      </div>
      <div className={`${tagCls} font-semibold mt-0.5`} style={{ color: tagColor, fontFamily: 'Arial, sans-serif' }}>
        ELEVATE YOUR SCORES
      </div>
    </Link>
  )
}
