import { Check } from 'lucide-react'
import { packages } from '@/data/packages'
import { quoteStore } from '@/lib/quote-store'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'

export function Packages() {
  return (
    <section id="paketler" aria-labelledby="paketler-baslik" className="py-20 sm:py-28">
      <Container>
        <div className="house-inset">
          <div className="reveal flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 id="paketler-baslik" className="section-title">
              Paketler
            </h2>
            <p className="max-w-md text-muted-foreground text-pretty">
              Her işletmenin ihtiyacı farklı. Bu paketler bir başlangıç noktası; kapsamı sizinle birlikte
              netleştiriyoruz.
            </p>
          </div>

          <ul className="reveal mt-12 grid divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {packages.map((pkg) => (
              <li key={pkg.id} className="flex flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em]">{pkg.name}</h3>
                <p className="mt-2 text-muted-foreground text-pretty">{pkg.forWho}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {/* İletişim formuna gider ve bu paketi seçili getirir */}
                <a
                  href="#iletisim"
                  onClick={() => quoteStore.set(pkg.id)}
                  aria-label={`${pkg.name} paketi için teklif alın`}
                  className={cn(buttonVariants({ variant: 'outline' }), 'mt-8 self-start')}
                >
                  Teklif alın
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm text-muted-foreground">
            Fiyat kapsama göre belirlenir; teklifi ihtiyacınızı dinledikten sonra hazırlıyoruz.
          </p>
        </div>
      </Container>
    </section>
  )
}
