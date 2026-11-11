import { MessageCircle, Phone as PhoneIcon } from 'lucide-react'
import { mailto, site, whatsappLink } from '@/config/site'
import { Container } from '@/components/ui/container'
import { ContactForm } from '@/components/contact/ContactForm'
import { CopyEmailButton } from '@/components/contact/CopyEmailButton'
import { SocialLinks } from '@/components/layout/SocialLinks'

const channelLink =
  'rounded-sm font-display text-xl font-semibold underline decoration-white/40 decoration-2 underline-offset-[5px] transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-2xl'

export function Contact() {
  const whatsapp = whatsappLink()

  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="py-20 sm:py-28">
      <Container>
        <div className="house-inset grid gap-10 rounded-3xl bg-gradient-to-br from-brand-light to-brand-dark py-12 text-white sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-14">
          <div className="reveal">
            <h2
              id="iletisim-baslik"
              className="max-w-[14ch] text-[clamp(2.25rem,1.3rem+3.2vw,4rem)] font-bold leading-[1] tracking-[-0.04em]"
            >
              Aklınızdaki projeyi konuşalım.
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/80 text-pretty">
              Formu doldurun ya da size en kolay gelen yoldan yazın; ihtiyacınıza uygun çözümü birlikte planlayalım.
            </p>

            <ul className="mt-10 space-y-6">
              <li>
                <p className="text-sm text-white/70">E-posta</p>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <a href={mailto()} className={`${channelLink} break-all`}>
                    {site.email}
                  </a>
                  <CopyEmailButton />
                </div>
              </li>
              {whatsapp && (
                <li>
                  <p className="text-sm text-white/70">WhatsApp</p>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${channelLink} mt-1 inline-flex items-center gap-2`}>
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Mesaj gönderin
                  </a>
                </li>
              )}
              {site.phone && (
                <li>
                  <p className="text-sm text-white/70">Telefon</p>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className={`${channelLink} mt-1 inline-flex items-center gap-2`}>
                    <PhoneIcon className="size-5" aria-hidden="true" />
                    {site.phone}
                  </a>
                </li>
              )}
            </ul>

            <SocialLinks inverse className="mt-8" />
          </div>

          <div className="reveal rounded-2xl bg-card p-5 text-foreground shadow-[0_30px_60px_-30px_rgba(8,20,45,0.6)] sm:p-8">
            <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">Teklif isteyin</h3>
            <p className="mt-1 text-sm text-muted-foreground">Birkaç bilgi yeterli; size dönüş yapalım.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
