import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FrameProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
}

/** Masaüstü ekran görüntüsü için tarayıcı çerçevesi. `light-scope`: koyu modda da çerçeve açık kalır. */
export function BrowserFrame({ src, alt, host, className, imgClassName, loading = 'lazy' }: FrameProps & { host?: string | null }) {
  return (
    <div
      className={cn(
        'light-scope flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_30px_60px_-30px_rgba(15,28,54,0.45)] dark:ring-1 dark:ring-white/10',
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-border bg-muted/70 px-3 py-2" aria-hidden="true">
        <span className="size-2 rounded-full bg-[#FF5F57]" />
        <span className="size-2 rounded-full bg-[#FEBC2E]" />
        <span className="size-2 rounded-full bg-[#28C840]" />
        <span className="mx-auto flex h-5 min-w-0 max-w-[60%] flex-1 items-center justify-center gap-1 rounded-md bg-white px-2 text-[10px] text-muted-foreground">
          <Lock className="size-2.5 shrink-0" />
          {host && <span className="truncate">{host}</span>}
        </span>
        <span className="w-[42px] shrink-0" />
      </div>
      <img src={src} alt={alt} loading={loading} className={cn('block w-full', imgClassName)} />
    </div>
  )
}

/** Telefon ekran görüntüsü için ince telefon çerçevesi. */
export function PhoneFrame({ src, alt, className, loading = 'lazy' }: FrameProps) {
  return (
    <div
      className={cn(
        'light-scope overflow-hidden rounded-[2rem] border-[7px] border-foreground bg-white shadow-[0_30px_60px_-30px_rgba(15,28,54,0.5)] dark:ring-1 dark:ring-white/10',
        className,
      )}
    >
      <img src={src} alt={alt} loading={loading} className="block w-full" />
    </div>
  )
}
