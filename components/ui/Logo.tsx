import Link from 'next/link'
import { clsx } from 'clsx'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  textClass?: string
  className?: string
}

export function Logo({ size = 'md', showText = true, textClass, className }: LogoProps) {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 40 : 34

  return (
    <Link href="/" className={clsx('flex items-center gap-2.5 no-underline', className)}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 34 34" fill="none" className="flex-shrink-0">
        <rect width="34" height="34" rx="8" fill="#0ea5e9" />
        <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {showText && (
        <span className={clsx(
          'font-black',
          size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base',
          textClass ?? 'text-slate-900'
        )}>
          ExamPassPro
        </span>
      )}
    </Link>
  )
}
