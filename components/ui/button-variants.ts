import { clsx } from 'clsx'

export function buttonVariants(
  variant: 'primary' | 'outline' | 'ghost' | 'danger' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md'
) {
  return clsx(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed',
    {
      'bg-sky-500 text-white hover:bg-sky-600': variant === 'primary',
      'border border-slate-200 text-slate-700 hover:bg-slate-50': variant === 'outline',
      'text-slate-600 hover:bg-slate-100': variant === 'ghost',
      'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
    },
    {
      'text-xs px-3 py-1.5': size === 'sm',
      'text-sm px-4 py-2.5': size === 'md',
      'text-base px-6 py-3': size === 'lg',
    }
  )
}
