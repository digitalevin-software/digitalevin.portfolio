import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

/** Evin henüz dolmamış odası: listenin sonunda yeni proje daveti. */
export function NextProjectCard({ wide }: { wide: boolean }) {
  return (
    <div
      className={cn(
        'flex h-full flex-col justify-between gap-6 rounded-2xl border-2 border-dashed border-primary/25 p-6 sm:p-8',
        wide && 'md:flex-row md:items-center md:gap-10',
      )}
    >
      <div>
        <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em]">
          Sıradaki proje sizinki olabilir.
        </p>
        <p className="mt-2 max-w-md text-muted-foreground text-pretty">
          Aklınızdaki fikri anlatın; kapsamını ve yol haritasını birlikte çıkaralım.
        </p>
      </div>
      <a href="#iletisim" className={cn(buttonVariants({ variant: 'outline' }), 'self-start md:self-auto')}>
        Fikrinizi anlatın
      </a>
    </div>
  )
}
