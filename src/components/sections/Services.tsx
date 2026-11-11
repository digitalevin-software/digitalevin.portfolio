import { services } from '@/data/services'
import { Container } from '@/components/ui/container'
import { ServiceScene } from '@/components/services/ServiceScene'

export function Services() {
  return (
    <section id="hizmetler" aria-labelledby="hizmetler-baslik" className="py-20 sm:py-28">
      <Container>
        <div className="house-inset">
          <div className="reveal flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 id="hizmetler-baslik" className="section-title">
              Neler yapıyoruz
            </h2>
            <p className="max-w-md text-muted-foreground text-pretty">
              Tek bir web sitesinden işletmenizin bütün sistemine kadar. Tasarlıyor, geliştiriyor ve yayından sonra
              da bakımını üstleniyoruz.
            </p>
          </div>

          <ul className="reveal mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <li key={service.id} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <ServiceScene id={service.id} className="h-44 sm:h-48" />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary text-accent">
                        <Icon className="size-[18px]" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em]">{service.title}</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground text-pretty">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>

          <aside className="reveal mt-6 rounded-2xl bg-secondary p-6 sm:p-8">
            <p className="text-sm font-medium text-secondary-foreground">Örneğin bir restoran için</p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-balance sm:text-2xl">
              Web sitesi, QR menü, rezervasyon sistemi ve sosyal medya. Dört ayrı iş, tek ekip.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  )
}
