import type { CSSProperties, ReactNode } from 'react'
import { Check, Coffee, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QrPattern } from '@/components/brand/QrPattern'
import { Phone } from '@/components/projects/previews/Phone'
import { BookingScreen } from '@/components/projects/previews/BookingScreen'

/**
 * Hero'daki ürün kolajı: yaptığımız işlerin (web sitesi, randevu sistemi, QR menü) koddan çizilmiş halleri.
 * 540×500 tasarım ölçüsünde kurulur, dar ekranlarda CSS `zoom` ile orantılı küçülür. Tamamen dekoratiftir.
 */

const timing = (delay: number, float?: number) =>
  ({ '--delay': `${delay}ms`, ...(float !== undefined ? { '--float-delay': `${float}s` } : {}) }) as CSSProperties

const cardShadow = 'shadow-[0_28px_56px_-28px_rgba(15,28,54,0.5)]'

/** Kolaj parçası: belirerek gelir; `float` verilirse sonra yavaşça süzülür. */
function Piece({
  className,
  delay,
  float,
  children,
}: {
  className: string
  delay: number
  float?: number
  children: ReactNode
}) {
  return (
    <div className={cn('rise absolute', className)} style={timing(delay)}>
      {float !== undefined ? (
        <div className="float" style={timing(0, float)}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

function CafeWebsite() {
  const products = [
    { name: 'Filtre kahve', tone: 'bg-tone-amber' },
    { name: 'Cheesecake', tone: 'bg-tone-blue' },
    { name: 'Serpme kahvaltı', tone: 'bg-tone-green' },
  ]
  return (
    <div
      className={cn(
        'light-scope overflow-hidden rounded-2xl border border-black/5 bg-white dark:ring-1 dark:ring-white/10',
        'shadow-[0_40px_90px_-40px_rgba(15,28,54,0.55)]',
      )}
    >
      {/* Tarayıcı çubuğu */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/70 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
        <span className="mx-auto flex h-6 w-56 items-center gap-1.5 rounded-md bg-white px-2.5">
          <Lock className="size-3 text-muted-foreground" />
          <span className="h-1.5 w-24 rounded-full bg-muted" />
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold tracking-tight">Köşe Kafe</span>
          <span className="flex gap-4 text-[10px] text-muted-foreground">
            <span>Menü</span>
            <span>Hakkımızda</span>
            <span>İletişim</span>
          </span>
          <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold text-white">Rezervasyon</span>
        </div>

        <div className="mt-4 grid grid-cols-[1.05fr_1fr] gap-4">
          <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-[#F1D3AC] via-[#CF9862] to-[#7C4B2A]">
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-white/20" />
            <Coffee className="absolute bottom-3 left-3 size-8 text-white" strokeWidth={1.75} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-display text-[19px] font-semibold leading-[1.15] tracking-tight">Her sabah taze çekirdek.</p>
            <p className="mt-2 text-[10.5px] leading-relaxed text-muted-foreground">
              Kahvaltı, tatlı ve demleme kahveler. Menüyü masanızdan inceleyin.
            </p>
            <span className="mt-3 w-fit rounded-full bg-primary px-3 py-1.5 text-[10px] font-semibold text-white">
              Menüyü gör
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-lg border border-border p-2">
              <div className={cn('h-10 rounded-md', p.tone)} />
              <p className="mt-1.5 text-[10px] font-medium">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BookingNotification() {
  return (
    <div
      className={cn(
        'light-scope flex w-[244px] items-center gap-3 rounded-2xl border border-black/5 bg-white p-3 dark:ring-1 dark:ring-white/10',
        cardShadow,
      )}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tone-blue font-display text-xs font-semibold text-brand-dark">
        EM
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold">Yeni randevu</p>
          <span className="text-[10px] text-muted-foreground">şimdi</span>
        </div>
        <p className="truncate text-[11px] text-muted-foreground">Emre ile 11.30, saç kesimi</p>
      </div>
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-status-live/15 text-status-live">
        <Check className="size-3.5" strokeWidth={2.5} />
      </span>
    </div>
  )
}

function MenuQrCard() {
  return (
    <div
      className={cn(
        'light-scope flex w-[188px] items-center gap-3 rounded-2xl border border-black/5 bg-white p-3 dark:ring-1 dark:ring-white/10',
        cardShadow,
      )}
    >
      <div className="w-14 shrink-0 rounded-lg border border-border p-1.5">
        <QrPattern />
      </div>
      <div>
        <p className="text-xs font-semibold leading-tight">Masadaki Menü</p>
        <p className="mt-0.5 text-[10px] text-muted-foreground">Masa 4 için okutun</p>
      </div>
    </div>
  )
}

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative mx-auto h-[500px] w-[540px] shrink-0',
        // Dar ekranlarda orantılı küçült (zoom yerleşimi de küçültür, ek boşluk kalmaz)
        '[zoom:0.5] min-[380px]:[zoom:0.55] min-[420px]:[zoom:0.62] sm:[zoom:0.85] md:[zoom:1]',
        className,
      )}
    >
      <Piece className="left-[80px] top-0 w-[460px]" delay={450}>
        <CafeWebsite />
      </Piece>

      <Piece className="left-0 top-[112px]" delay={600}>
        {/* Telefon 216px tasarlandı; burada biraz küçük */}
        <div className="[zoom:0.82]">
          <Phone>
            <BookingScreen />
          </Phone>
        </div>
      </Piece>

      <Piece className="left-[296px] top-[300px]" delay={800} float={0}>
        <BookingNotification />
      </Piece>

      <Piece className="left-[352px] top-[392px]" delay={950} float={1.6}>
        <MenuQrCard />
      </Piece>
    </div>
  )
}
