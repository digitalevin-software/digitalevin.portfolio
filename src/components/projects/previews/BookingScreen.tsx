import { cn } from '@/lib/utils'

const barbers = [
  { initials: 'AK', name: 'Ali' },
  { initials: 'EM', name: 'Emre', selected: true },
  { initials: 'CT', name: 'Can' },
]

const slots = [
  { time: '10.00' },
  { time: '10.30' },
  { time: '11.30', selected: true },
  { time: '13.00' },
  { time: '14.00', taken: true },
  { time: '15.30' },
]

/** Randevu Defteri ekran taslağı (telefon çerçevesinin içi). */
export function BookingScreen() {
  return (
    <>
      <p className="text-[9px] font-medium text-muted-foreground">Bugün</p>
      <p className="font-display text-[15px] font-semibold leading-tight tracking-tight">Ustanızı seçin</p>

      <div className="mt-3 flex gap-2.5">
        {barbers.map((b) => (
          <div key={b.name} className="flex flex-col items-center gap-1">
            <span
              className={cn(
                'grid size-10 place-items-center rounded-full bg-tone-blue font-display text-[11px] font-semibold text-brand-dark',
                b.selected && 'ring-2 ring-primary ring-offset-2',
              )}
            >
              {b.initials}
            </span>
            <span className={cn('text-[9px]', b.selected ? 'font-semibold' : 'text-muted-foreground')}>{b.name}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[10px] font-semibold">Uygun saatler</p>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {slots.map((s) => (
          <span
            key={s.time}
            className={cn(
              'rounded-lg border py-1.5 text-center text-[10px] font-medium tabular-nums',
              s.selected && 'border-primary bg-primary text-white',
              s.taken && 'border-transparent bg-muted text-muted-foreground/60 line-through',
              !s.selected && !s.taken && 'border-border',
            )}
          >
            {s.time}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-secondary p-2.5">
        <p className="text-[9px] text-muted-foreground">Seçiminiz</p>
        <p className="text-[11px] font-semibold">Emre ile 11.30, saç kesimi</p>
      </div>

      <div className="mt-3 grid h-8 place-items-center rounded-full bg-primary text-[10px] font-semibold text-white">
        Randevuyu onayla
      </div>
    </>
  )
}
