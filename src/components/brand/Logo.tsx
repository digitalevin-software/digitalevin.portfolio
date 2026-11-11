import logoMark from '@/assets/logo-mark.png'
import logoMarkLight from '@/assets/logo-mark-light.png'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      {/* Koyu zeminde logonun açık renkli sürümü */}
      <img src={logoMark} alt="" width={35} height={36} className="h-9 w-auto dark:hidden" />
      <img src={logoMarkLight} alt="" width={35} height={36} className="hidden h-9 w-auto dark:block" />
      <span className="font-display text-[1.375rem] font-bold leading-none tracking-[-0.03em] text-brand-dark dark:text-foreground">
        digitalevin
      </span>
    </span>
  )
}
