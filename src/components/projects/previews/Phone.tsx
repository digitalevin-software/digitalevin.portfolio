import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Önizlemeler için telefon çerçevesi. `light-scope`: koyu modda da ekran açık renkte kalır.
 * İçerik dekoratiftir; erişilebilir açıklamayı çerçeveyi saran öğe verir.
 */
export function Phone({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'light-scope w-[216px] rounded-[2.25rem] bg-foreground p-[7px] shadow-[0_32px_60px_-28px_rgba(15,28,54,0.55)] dark:ring-1 dark:ring-white/10',
        className,
      )}
    >
      <div className="relative h-[440px] overflow-hidden rounded-[1.85rem] bg-white" aria-hidden="true">
        <div className="absolute left-1/2 top-2 h-[18px] w-16 -translate-x-1/2 rounded-full bg-foreground" />
        <div className="px-4 pt-10">{children}</div>
      </div>
    </div>
  )
}
