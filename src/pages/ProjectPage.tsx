import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { categoryLabels, projectPath, projects, statusLabels } from '@/data/projects'
import { cn, hostOf } from '@/lib/utils'
import { HouseFrame } from '@/components/brand/HouseFrame'
import { SectionLink } from '@/components/layout/SectionLink'
import { ProjectVisual } from '@/components/projects/ProjectVisual'
import { BrowserFrame, PhoneFrame } from '@/components/projects/ScreenFrames'
import { toneClass } from '@/components/projects/tones'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { StatusBadge } from '@/components/ui/status-badge'
import { NotFoundPage } from './NotFoundPage'

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

const metaLink =
  'inline-flex items-center gap-1 rounded-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function ProjectPage() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return <NotFoundPage />

  const project = projects[index]
  const previous = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null
  const draftVisual = !project.image && project.status !== 'live'

  return (
    <>
      <Container className="pt-4 sm:pt-6">
        <HouseFrame>
          <article aria-labelledby="proje-baslik">
            <SectionLink
              section="#projeler"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Tüm projeler
            </SectionLink>

            <header className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span className="text-sm text-muted-foreground">{project.kind}</span>
                </div>
                <h1
                  id="proje-baslik"
                  className="rise mt-5 text-[clamp(2.5rem,1.2rem+4.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
                  style={delay(200)}
                >
                  {project.title}
                </h1>
                <p
                  className="rise mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
                  style={delay(320)}
                >
                  {project.description}
                </p>
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: 'lg' }), 'rise mt-8')}
                    style={delay(420)}
                  >
                    Siteyi ziyaret edin
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 text-sm lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <dt className="text-muted-foreground">Durum</dt>
                  <dd className="mt-1 font-medium">{statusLabels[project.status]}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Kategori</dt>
                  <dd className="mt-1 font-medium">{categoryLabels[project.category]}</dd>
                </div>
                {project.tech && project.tech.length > 0 && (
                  <div>
                    <dt className="text-muted-foreground">Teknoloji</dt>
                    <dd className="mt-1 font-medium">{project.tech.join(', ')}</dd>
                  </div>
                )}
                {project.links?.live && (
                  <div>
                    <dt className="text-muted-foreground">Adres</dt>
                    <dd className="mt-1 min-w-0">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={cn(metaLink, 'max-w-full')}>
                        <span className="truncate">{hostOf(project.links.live) ?? 'Siteyi aç'}</span>
                        <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
                )}
                {project.links?.repo && (
                  <div>
                    <dt className="text-muted-foreground">Kaynak kod</dt>
                    <dd className="mt-1">
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={metaLink}>
                        Depoyu aç <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </header>

            <ProjectVisual project={project} variant="page" className="mt-12 aspect-[4/3] rounded-3xl sm:aspect-[16/9]" />
            {draftVisual && <p className="mt-3 text-sm text-muted-foreground">Görsel, projenin tasarım taslağıdır.</p>}

            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-12 lg:col-span-7">
                {project.problem && (
                  <section className="reveal">
                    <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">Neyi çözüyor?</h2>
                    <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">{project.problem}</p>
                  </section>
                )}
                {project.solution && (
                  <section className="reveal">
                    <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">Nasıl çözüyoruz?</h2>
                    <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">{project.solution}</p>
                  </section>
                )}
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <aside className="reveal lg:col-span-5">
                  <div className="rounded-2xl bg-secondary p-6 sm:p-8">
                    <h2 className="text-lg font-semibold">Öne çıkanlar</h2>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              )}
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <section className="reveal mt-16">
                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">Ekran görüntüleri</h2>
                {/* İlk masaüstü görüntüsü tam genişlik; sonrakiler 2/3, telefon görüntüleri 1/3 genişlik */}
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  {project.gallery.map((img, i) => {
                    const mobile = img.device === 'mobile'
                    return (
                      <figure
                        key={img.src}
                        className={cn('flex flex-col', mobile ? 'lg:col-span-1' : i === 0 ? 'lg:col-span-3' : 'lg:col-span-2')}
                      >
                        <div
                          className={cn(
                            'flex flex-1 items-center justify-center rounded-2xl p-4 sm:p-8',
                            toneClass[project.tone],
                          )}
                        >
                          {mobile ? (
                            <PhoneFrame src={img.src} alt={img.alt} className="w-[220px] sm:w-[240px]" />
                          ) : (
                            <BrowserFrame src={img.src} alt={img.alt} host={hostOf(project.links?.live)} className="w-full" />
                          )}
                        </div>
                        {img.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{img.caption}</figcaption>}
                      </figure>
                    )
                  })}
                </div>
              </section>
            )}
          </article>
        </HouseFrame>
      </Container>

      <Container className="py-16 sm:py-24">
        <div className="house-inset">
          {(previous || next) && (
            <nav aria-label="Diğer projeler" className="grid gap-4 sm:grid-cols-2">
              {previous ? (
                <Link
                  to={projectPath(previous)}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Önceki proje
                  </span>
                  <span className="mt-2 block font-display text-xl font-semibold decoration-2 underline-offset-4 group-hover:underline">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next && (
                <Link
                  to={projectPath(next)}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-right"
                >
                  <span className="flex items-center gap-2 text-sm text-muted-foreground sm:justify-end">
                    Sonraki proje
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                  <span className="mt-2 block font-display text-xl font-semibold decoration-2 underline-offset-4 group-hover:underline">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>
          )}

          <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-brand-light to-brand-dark p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
                Benzer bir proje mi düşünüyorsunuz?
              </p>
              <p className="mt-2 text-white/80">İhtiyacınızı anlatın; size uygun çözümü birlikte planlayalım.</p>
            </div>
            <SectionLink
              section="#iletisim"
              className={cn(buttonVariants({ variant: 'inverse', size: 'lg' }), 'shrink-0 self-start md:self-auto')}
            >
              Projenizi konuşalım
            </SectionLink>
          </div>
        </div>
      </Container>
    </>
  )
}
