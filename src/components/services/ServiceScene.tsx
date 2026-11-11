import type { ComponentType } from 'react'
import { CalendarClock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QrPattern } from '@/components/brand/QrPattern'

/**
 * Hizmet kartlarının üstündeki küçük sahneler (dekoratif, koddan çizilir).
 * `light-scope`: koyu modda da "ekranlar" açık renkte kalır.
 */

const windowCls =
  'light-scope rounded-xl border border-black/5 bg-white shadow-[0_18px_40px_-24px_rgba(15,28,54,0.45)]'

function Bar({ className }: { className?: string }) {
  return <div className={cn('h-1.5 rounded-full bg-muted-foreground/25', className)} />
}

function WebScene() {
  return (
    <div className={cn(windowCls, 'absolute inset-x-6 top-7 sm:inset-x-10')}>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-1.5 rounded-full bg-border" />
        <span className="size-1.5 rounded-full bg-border" />
        <span className="size-1.5 rounded-full bg-border" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-muted" />
      </div>
      <div className="grid grid-cols-[1.2fr_1fr] gap-4 p-4">
        <div>
          <div className="h-2.5 w-4/5 rounded-full bg-foreground/80" />
          <div className="mt-1.5 h-2.5 w-1/2 rounded-full bg-foreground/80" />
          <Bar className="mt-3 w-11/12" />
          <Bar className="mt-1.5 w-3/4" />
          <div className="mt-4 h-5 w-20 rounded-full bg-primary" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="aspect-square rounded-md bg-tone-blue" />
          <div className="aspect-square rounded-md bg-tone-amber" />
          <div className="aspect-square rounded-md bg-tone-green" />
          <div className="aspect-square rounded-md bg-tone-blue" />
        </div>
      </div>
    </div>
  )
}

function ErpScene() {
  // Logodaki gibi yükselen çubuklar
  const bars = ['h-[30%]', 'h-[45%]', 'h-[58%]', 'h-[74%]', 'h-[92%]']
  return (
    <div className={cn(windowCls, 'absolute inset-x-6 top-7 grid grid-cols-[3.25rem_1fr] sm:inset-x-10')}>
      <div className="space-y-2 border-r border-border p-2.5">
        <div className="h-1.5 rounded-full bg-primary/70" />
        <Bar />
        <Bar />
        <Bar className="w-2/3" />
      </div>
      <div className="p-3.5">
        <div className="flex h-16 items-end gap-2">
          {bars.map((h, i) => (
            <div key={h} className={cn('flex-1 rounded-t-md', h, i === bars.length - 1 ? 'bg-primary' : 'bg-primary/35')} />
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {['Sipariş 1042', 'Sipariş 1043'].map((label, i) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <span className="text-[9px] font-medium">{label}</span>
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[8px] font-semibold',
                  i === 0 ? 'bg-status-live/15 text-status-live' : 'bg-status-progress/15 text-[#9A5B00]',
                )}
              >
                {i === 0 ? 'Kargoda' : 'Hazırlanıyor'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BookingScene() {
  const selected = 17
  return (
    <div className="absolute inset-x-6 top-7 flex items-start gap-3 sm:inset-x-10">
      <div className={cn(windowCls, 'flex-1 p-3.5')}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold">Kasım</span>
          <span className="text-[9px] text-muted-foreground">3 randevu</span>
        </div>
        <div className="mt-2.5 grid grid-cols-7 gap-1">
          {Array.from({ length: 21 }, (_, i) => (
            <span
              key={i}
              className={cn(
                'aspect-square rounded-[5px]',
                i === selected ? 'bg-primary' : [3, 9, 12].includes(i) ? 'bg-tone-blue' : 'bg-muted',
              )}
            />
          ))}
        </div>
      </div>
      <div className={cn(windowCls, 'w-[5.5rem] shrink-0 p-2.5')}>
        <QrPattern />
        <p className="mt-1.5 text-center text-[8px] font-medium text-muted-foreground">Menü için okutun</p>
      </div>
    </div>
  )
}

function SocialScene() {
  const tiles = ['bg-tone-blue', 'bg-tone-amber', 'bg-tone-green', 'bg-primary/75', 'bg-tone-blue', 'bg-tone-amber']
  return (
    <>
      <div className={cn(windowCls, 'absolute inset-x-6 top-7 p-3.5 sm:inset-x-10')}>
        <div className="flex items-center gap-2">
          <span className="size-6 rounded-full bg-gradient-to-br from-brand-light to-brand-dark" />
          <div>
            <div className="h-2 w-20 rounded-full bg-foreground/80" />
            <Bar className="mt-1 w-12" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {tiles.map((t, i) => (
            <div key={i} className={cn('aspect-square rounded-md', t)} />
          ))}
        </div>
      </div>
      <div className="light-scope absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium shadow-[0_8px_20px_-10px_rgba(15,28,54,0.5)] sm:right-8">
        <CalendarClock className="size-3 text-primary" aria-hidden="true" />
        Yarın 10.00'da paylaşılacak
      </div>
    </>
  )
}

const scenes: Record<string, { Scene: ComponentType; tone: string }> = {
  web: { Scene: WebScene, tone: 'bg-tone-blue' },
  erp: { Scene: ErpScene, tone: 'bg-tone-green' },
  booking: { Scene: BookingScene, tone: 'bg-tone-amber' },
  social: { Scene: SocialScene, tone: 'bg-tone-blue' },
}

/** Hizmet id'sine göre sahne; sahnesi olmayan yeni hizmetlerde düz zemin. */
export function ServiceScene({ id, className }: { id: string; className?: string }) {
  const scene = scenes[id]
  return (
    <div className={cn('relative overflow-hidden', scene?.tone ?? 'bg-tone-blue', className)} aria-hidden="true">
      {scene && <scene.Scene />}
    </div>
  )
}
