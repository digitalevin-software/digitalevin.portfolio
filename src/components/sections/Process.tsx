import { Container } from '@/components/ui/container'

const steps = [
  {
    title: 'İhtiyacı anlıyoruz',
    text: 'İşinizi, müşterilerinizi ve sizi yoran işleri dinleyerek başlıyoruz.',
  },
  {
    title: 'Birlikte planlıyoruz',
    text: 'Öncelikleri sizinle belirliyor, neyin önce yapılacağına birlikte karar veriyoruz.',
  },
  {
    title: 'Özenle geliştiriyoruz',
    text: 'İhtiyacınıza uygun çözümü geliştiriyor, hazır olduğunda yayına alıyoruz.',
  },
  {
    title: 'Yanınızda oluyoruz',
    text: 'Yayından sonra da bakım, geliştirme ve dijital yönetimle devam ediyoruz.',
  },
]

export function Process() {
  return (
    <section id="surec" aria-labelledby="surec-baslik" className="border-y border-border bg-card py-20 sm:py-28">
      <Container>
        <div className="house-inset">
          <div className="reveal">
            <h2 id="surec-baslik" className="section-title">
              Nasıl çalışıyoruz
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground text-pretty">
              Küçük bir web sitesi de olsa kapsamlı bir yazılım da olsa, her proje aynı dört adımla ilerler.
            </p>
          </div>

          <ol className="reveal mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <li key={step.title}>
                <div className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-accent font-display text-base font-semibold text-accent">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && <span className="hidden h-0.5 flex-1 bg-border lg:block" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-2 text-muted-foreground text-pretty">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
