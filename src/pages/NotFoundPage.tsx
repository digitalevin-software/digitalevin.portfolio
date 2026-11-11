import { Link } from 'react-router'
import { HouseFrame } from '@/components/brand/HouseFrame'
import { SectionLink } from '@/components/layout/SectionLink'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'

export function NotFoundPage() {
  return (
    <Container className="pb-20 pt-4 sm:pb-28 sm:pt-6">
      <HouseFrame>
        <section aria-labelledby="bulunamadi-baslik" className="pb-4">
          <p className="text-sm font-medium text-accent">Sayfa bulunamadı</p>
          <h1
            id="bulunamadi-baslik"
            className="rise mt-3 text-[clamp(2.5rem,1.2rem+4.6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
          >
            Bu oda boş.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground text-pretty">
            Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className={buttonVariants({ size: 'lg' })}>
              Ana sayfaya dön
            </Link>
            <SectionLink section="#projeler" className={buttonVariants({ size: 'lg', variant: 'outline' })}>
              Projelere göz atın
            </SectionLink>
          </div>
        </section>
      </HouseFrame>
    </Container>
  )
}
