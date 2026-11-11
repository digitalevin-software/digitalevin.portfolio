import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { site } from '@/config/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button-variants'
import { Container } from '@/components/ui/container'
import { SectionLink } from './SectionLink'
import { ThemeToggle } from './ThemeToggle'

const linkFocus =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const sectionIds = site.nav.map((item) => item.href.slice(1))

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  // Menüde aktif bölüm sadece ana sayfada vurgulanır
  const active = useActiveSection(sectionIds, pathname === '/')

  // Mobil menü açıkken Esc ile kapat
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label={`${site.name} ana sayfa`} className={`rounded-md ${linkFocus}`} onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Ana menü" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <SectionLink
                    section={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'rounded-full px-3 py-2 text-[0.9375rem] transition-colors',
                      isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
                      linkFocus,
                    )}
                  >
                    {item.label}
                  </SectionLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <SectionLink section="#iletisim" className={cn(buttonVariants({ size: 'sm' }), 'hidden sm:inline-flex')}>
            Projenizi konuşalım
          </SectionLink>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </Container>

      {open && (
        <nav id="mobil-menu" aria-label="Mobil menü" className="border-t border-border/70 md:hidden">
          <Container className="pb-5 pt-2">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <SectionLink
                    section={item.href}
                    onClick={close}
                    className={`block rounded-lg px-2 py-3 text-base font-medium hover:bg-secondary ${linkFocus}`}
                  >
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
            <SectionLink section="#iletisim" onClick={close} className={cn(buttonVariants(), 'mt-3 w-full')}>
              Projenizi konuşalım
            </SectionLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
