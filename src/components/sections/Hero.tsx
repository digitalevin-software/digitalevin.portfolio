import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { featuredProject, projectPath, statusLabels } from '@/data/projects'
import { team } from '@/data/team'
import { initials, numberWord } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/button'
import { HeroVisual } from '@/components/hero/HeroVisual'

/** Açılış sırasındaki gecikme (ms) → index.css içindeki .rise animasyonu */
const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  const teamSize = numberWord(team.length)

  return (
    <section
      aria-labelledby="hero-baslik"
      className="relative isolate grid grid-cols-[minmax(0,1fr)] items-center gap-14 pb-16 sm:pb-24 xl:grid-cols-[minmax(0,1fr)_540px] xl:gap-12"
    >
      {/* Çatının altında yanan ışık + ince ızgara */}
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-6 -top-36 bottom-0 -z-10 sm:-inset-x-10">
        <div className="hero-glow absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div>
        {featuredProject && (
          <Link
            to={projectPath(featuredProject)}
            className="rise group inline-flex max-w-full items-center gap-2.5 rounded-full border border-border bg-card/80 py-1 pl-1 pr-3 text-sm shadow-[0_1px_2px_rgba(15,28,54,0.06)] backdrop-blur transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={delay(200)}
          >
            <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-accent">
              {statusLabels[featuredProject.status]}
            </span>
            <span className="min-w-0 truncate text-muted-foreground transition-colors group-hover:text-foreground">
              {featuredProject.title}
              <span className="hidden sm:inline"> projesini inceleyin</span>
            </span>
            <ChevronRight
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        )}

        <h1
          id="hero-baslik"
          className="rise mt-7 max-w-[13ch] text-[clamp(2.75rem,1.4rem+4.2vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
          style={delay(300)}
        >
          İşletmenizin dijitaldeki evi.
        </h1>

        <p
          className="rise mt-6 max-w-[32rem] text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
          style={delay(420)}
        >
          Web siteleri, randevu sistemleri, QR menüler ve işinize özel yazılımlar geliştiriyoruz. Kendi ürünlerimizi
          de bu evde büyütüyoruz.
        </p>

        <div className="rise mt-9 flex flex-wrap gap-3" style={delay(520)}>
          <ButtonLink href="#iletisim" size="lg" className="shadow-[0_12px_28px_-12px_hsl(var(--primary)/0.7)]">
            Projenizi konuşalım
          </ButtonLink>
          <ButtonLink href="#projeler" size="lg" variant="outline">
            Projeleri inceleyin
          </ButtonLink>
        </div>

        {/* Ekip: gerçek bilgilerden */}
        <div className="rise mt-10 flex items-center gap-4" style={delay(640)}>
          <div className="flex -space-x-2.5">
            {team.map((member) => (
              <span
                key={member.id}
                title={`${member.name}, ${member.role}`}
                className="grid size-10 place-items-center rounded-full bg-secondary font-display text-xs font-semibold text-accent ring-[3px] ring-background"
              >
                {initials(member.name)}
              </span>
            ))}
          </div>
          <p className="text-sm leading-snug text-muted-foreground">
            <span className="font-medium text-foreground">{teamSize.charAt(0).toLocaleUpperCase('tr-TR') + teamSize.slice(1)} kişilik ekip</span>
            , İstanbul'dan.
            <br className="hidden sm:block" /> Yazılım ve tasarım aynı masada.
          </p>
        </div>
      </div>

      <HeroVisual />
    </section>
  )
}
