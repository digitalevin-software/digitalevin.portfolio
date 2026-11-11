import { reasons } from '@/data/reasons'
import { team } from '@/data/team'
import { numberWord } from '@/lib/utils'
import { Container } from '@/components/ui/container'

export function WhyUs() {
  const size = numberWord(team.length)
  const sizeTitle = size.charAt(0).toLocaleUpperCase('tr-TR') + size.slice(1)

  return (
    <section id="neden" aria-labelledby="neden-baslik" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="house-inset grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <h2 id="neden-baslik" className="section-title">
              Neden Digitalevin
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground text-pretty">
              {sizeTitle} kişilik küçük bir ekibiz. Projenizi konuştuğunuz kişiler, onu geliştiren kişilerdir.
            </p>
          </div>

          <ul className="reveal grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <li key={reason.title}>
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.015em]">{reason.title}</h3>
                  <p className="mt-2 text-muted-foreground text-pretty">{reason.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
