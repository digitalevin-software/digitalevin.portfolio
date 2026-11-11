import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/** Sayfa genişliği. Ev çerçevesinin dış kenarları bu kutunun kenarlarına oturur. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-page px-4 sm:px-6', className)} {...props} />
}
