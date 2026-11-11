import { cn } from '@/lib/utils'

const categories = ['Kahveler', 'Tatlılar', 'Kahvaltı']

const items = [
  { name: 'Filtre kahve', note: 'Günün çekirdeği', price: '80' },
  { name: 'Latte', note: 'Çift shot, süt', price: '95' },
  { name: 'Türk kahvesi', note: 'Lokum ile', price: '70' },
  { name: 'Soğuk demleme', note: '16 saat demlenir', price: '110' },
]

/** Masadaki Menü ekran taslağı (telefon çerçevesinin içi). */
export function MenuScreen() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-display text-[15px] font-semibold leading-tight tracking-tight">Köşe Kafe</p>
        <span className="rounded-full bg-tone-amber px-2 py-0.5 text-[9px] font-medium">Masa 4</span>
      </div>

      <div className="mt-3 flex gap-1.5">
        {categories.map((c, i) => (
          <span
            key={c}
            className={cn(
              'rounded-full px-2.5 py-1 text-[9px] font-medium',
              i === 0 ? 'bg-foreground text-white' : 'bg-muted text-muted-foreground',
            )}
          >
            {c}
          </span>
        ))}
      </div>

      <ul className="mt-3 divide-y divide-border">
        {items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-2 py-2.5">
            <div>
              <p className="text-[11px] font-semibold">{item.name}</p>
              <p className="text-[9px] text-muted-foreground">{item.note}</p>
            </div>
            <p className="text-[11px] font-semibold tabular-nums">₺{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
