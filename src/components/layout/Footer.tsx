import { Link } from 'react-router'
import { mailto, site, whatsappLink } from '@/config/site'
import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/ui/container'
import { SectionLink } from './SectionLink'
import { SocialLinks } from './SocialLinks'

const link =
  'rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsapp = whatsappLink()

  return (
    <footer className="border-t border-border">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1fr_auto]">
        <div>
          <Link to="/" aria-label={`${site.name} ana sayfa`} className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Logo />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">İşletmelerin dijitaldeki evi. {site.city}.</p>
          <SocialLinks className="mt-5" />
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
          <nav aria-label="Alt menü">
            <p className="font-semibold">Site</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <SectionLink section={item.href} className={link}>
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold">İletişim</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={mailto()} className={`${link} break-all`}>
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className={link}>
                    {site.phone}
                  </a>
                </li>
              )}
              {whatsapp && (
                <li>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:col-span-2">
          {/* Yıl derleme anında yazılır; yılbaşında tarayıcıdaki değer farklıysa uyarı verme */}
          <span suppressHydrationWarning>
            © {year} {site.name}
          </span>
          <div className="flex items-center gap-5">
            <Link to="/gizlilik/" className={link}>
              Gizlilik Politikası
            </Link>
            <a href="#" className={link}>
              Başa dön
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
