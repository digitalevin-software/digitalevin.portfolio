import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/ui/container'

/** Müşteri yorumları. src/data/testimonials.ts boşken bölüm hiç görünmez. */
export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="yorumlar" aria-labelledby="yorumlar-baslik" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="house-inset">
          <h2 id="yorumlar-baslik" className="reveal section-title">
            Müşterilerimiz ne diyor
          </h2>
          <ul className="reveal mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={`${t.name}-${t.quote.slice(0, 12)}`}>
                <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <blockquote className="font-display text-xl leading-snug tracking-[-0.015em] text-pretty">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
