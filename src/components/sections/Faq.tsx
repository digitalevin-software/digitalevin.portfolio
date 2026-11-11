import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { Container } from '@/components/ui/container'

export function Faq() {
  return (
    <section id="sss" aria-labelledby="sss-baslik" className="border-y border-border bg-card py-20 sm:py-28">
      <Container>
        <div className="house-inset grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <h2 id="sss-baslik" className="section-title">
              Sık sorulan sorular
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground text-pretty">
              Aradığınız cevap burada yoksa{' '}
              <a href="#iletisim" className="font-medium text-accent underline-offset-4 hover:underline">
                bize yazın
              </a>
              .
            </p>
          </div>

          <div className="reveal divide-y divide-border border-y border-border lg:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-5 font-display text-lg font-semibold leading-snug tracking-[-0.015em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-prose pb-6 text-muted-foreground text-pretty">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
