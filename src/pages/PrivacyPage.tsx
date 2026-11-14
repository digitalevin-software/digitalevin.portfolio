import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { HouseFrame } from '@/components/brand/HouseFrame'
import { Container } from '@/components/ui/container'
import { mailto, site } from '@/config/site'
import { projectPath, projects } from '@/data/projects'

/** Politikada bir değişiklik yaptığınızda bu tarihi güncelleyin. */
const privacyUpdated = '14 Kasım 2026'

const textLink =
  'rounded-sm font-medium text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">{title}</h2>
      <div className="mt-3 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

function Email() {
  return (
    <a href={mailto()} className={`${textLink} break-all`}>
      {site.email}
    </a>
  )
}

export function PrivacyPage() {
  const direct = Boolean(site.formAccessKey)
  const mokapla = projects.find((p) => p.id === 'mokapla')
  const host = site.url.replace(/^https?:\/\//, '')

  return (
    <Container className="pb-20 pt-4 sm:pb-28 sm:pt-6">
      <HouseFrame>
        <article aria-labelledby="gizlilik-baslik" className="pb-4">
          <p className="text-sm font-medium text-accent">Gizlilik</p>
          <h1
            id="gizlilik-baslik"
            className="rise mt-3 text-[clamp(2.5rem,1.2rem+4.6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
          >
            Gizlilik ve çerez politikası
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            Bu politika, {host} sitesini ziyaret ettiğinizde ve bizimle iletişime geçtiğinizde hangi bilgilerin
            işlendiğini, çerezlerin nasıl kullanıldığını ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
            kapsamındaki haklarınızı açıklar.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Son güncelleme: {privacyUpdated}</p>

          <div className="mt-14 max-w-3xl space-y-12">
            <Section title="Veri sorumlusu">
              <p>
                Bu sitenin ve Digitalevin tarafından geliştirilen ürünlerin veri sorumlusu {site.name}’dir ({site.city}).
                Bu politikayla ilgili tüm sorularınız ve talepleriniz için <Email /> adresine yazabilirsiniz.
              </p>
            </Section>

            <Section title="Hangi bilgileri, neden işliyoruz?">
              <p>
                <strong>Teklif ve iletişim formu:</strong> Formu doldurduğunuzda adınız, e-posta adresiniz ve
                ihtiyaçlarınız; isterseniz telefonunuz, işletmenizin adı ve mesajınız bize ulaşır.{' '}
                {direct
                  ? 'Form bu bilgileri, form hizmeti sağlayıcımız Web3Forms aracılığıyla e-posta adresimize iletir.'
                  : 'Form bu bilgileri bir sunucuya göndermez: “E-posta ile gönder” dediğinizde e-posta uygulamanız mesajı hazır şekilde açar, gönderimi siz yaparsınız.'}
              </p>
              <p>
                <strong>E-posta{site.whatsapp ? ' ve WhatsApp' : ''} yazışmaları:</strong> Bize doğrudan
                yazdığınızda iletişim bilgileriniz ve mesajınız yazışmanın yapıldığı hizmette saklanır.
              </p>
              <p>
                Bu bilgileri yalnızca size dönüş yapmak, teklif hazırlamak ve birlikte çalışmaya karar verirsek projeyi
                yürütmek için kullanırız. Bilgilerinizi satmayız, izniniz olmadan bülten veya pazarlama listelerine
                eklemeyiz. İşleme, KVKK’nın 5. maddesindeki “bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili
                olması” ve “meşru menfaat” hukuki sebeplerine dayanır. Bilgiler bu amaçlar için gereken süre ve yasal
                saklama yükümlülükleri boyunca saklanır, ardından silinir.
              </p>
            </Section>

            <Section title="Barındırma ve sunucu kayıtları">
              <p>
                Site GitHub Pages (GitHub, Inc.) üzerinde yayınlanır. Bir sayfayı açtığınızda, sayfanın size
                iletilebilmesi için IP adresiniz ve tarayıcı bilgileriniz gibi teknik veriler barındırma sağlayıcısı
                tarafından işlenir ve güvenlik amacıyla kayıt altına alınabilir. Ayrıntılar için{' '}
                <a
                  href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
                  className={textLink}
                  {...external}
                >
                  GitHub Gizlilik Bildirimi
                </a>
                ’ne bakabilirsiniz.
              </p>
            </Section>

            <Section id="cerezler" title="Çerezler">
              <p>
                Bu site çerez kullanmaz ve ziyaretçi analizi (analytics) aracı içermez. Açık ya da koyu tema tercihiniz
                yalnızca tarayıcınızın yerel depolama alanında tutulur; bize veya üçüncü taraflara gönderilmez. Yazı
                tipleri de sitenin kendi sunucusundan yüklenir.
              </p>
            </Section>

            <Section title="Ürünlerimizdeki reklamlar">
              <p>
                {host} üzerinde şu anda reklam gösterilmez. Digitalevin’in geliştirdiği bazı ücretsiz ürünlerde,
                örneğin{' '}
                {mokapla ? (
                  <Link to={projectPath(mokapla)} className={textLink}>
                    Mockup Studio
                  </Link>
                ) : (
                  'Mockup Studio'
                )}
                ’da (mokapla.digitalevin.com), ürünü ücretsiz sunabilmek için Google AdSense ile reklam gösterilir. Bu
                ürünlerde:
              </p>
              <ul>
                <li>
                  Google dahil üçüncü taraf sağlayıcılar, kullanıcının o siteye veya diğer web sitelerine yaptığı önceki
                  ziyaretlere dayalı reklamlar sunmak için çerezleri kullanır.
                </li>
                <li>
                  Google’ın reklam çerezlerini kullanması, Google’ın ve iş ortaklarının kullanıcılara bu sitelere ve/veya
                  internetteki diğer sitelere yaptıkları ziyaretlere dayalı reklamlar sunmasını sağlar.
                </li>
                <li>
                  Kişiselleştirilmiş reklamları{' '}
                  <a href="https://adssettings.google.com" className={textLink} {...external}>
                    Google Reklam Ayarları
                  </a>{' '}
                  sayfasından, üçüncü taraf sağlayıcıların kişiselleştirilmiş reklam çerezlerini{' '}
                  <a href="https://www.aboutads.info/choices" className={textLink} {...external}>
                    aboutads.info
                  </a>{' '}
                  adresinden kapatabilirsiniz.
                </li>
                <li>
                  Google’ın, hizmetlerini kullanan sitelerden gelen bilgileri nasıl kullandığını{' '}
                  <a href="https://policies.google.com/technologies/partner-sites" className={textLink} {...external}>
                    Google’ın iş ortağı siteleri politikasında
                  </a>{' '}
                  okuyabilirsiniz.
                </li>
                <li>
                  Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre’den gelen ziyaretçilere, reklam çerezleri
                  kullanılmadan önce bir onay mesajı gösterilir.
                </li>
              </ul>
              <p>
                Her ürünün kendine özgü ayrıntıları kendi gizlilik politikasında yer alır:{' '}
                <a href="https://mokapla.digitalevin.com/gizlilik" className={textLink} {...external}>
                  Mockup Studio gizlilik politikası
                </a>
                .
              </p>
            </Section>

            <Section title="Verilerin aktarılması">
              <p>
                Kişisel verilerinizi üçüncü kişilerle paylaşmayız; yalnızca yasal bir zorunluluk olduğunda yetkili
                kurumlarla paylaşabiliriz. Kullandığımız hizmet sağlayıcıları (barındırma için GitHub, e-posta için
                Google{direct ? ', form iletimi için Web3Forms' : ''}) yurt dışında bulunduğundan, verileriniz bu
                hizmetlerin sunucularında işlenebilir. Reklam gösterilen ürünlerimizde reklam çerezleriyle toplanan
                bilgiler Google tarafından işlenir.
              </p>
            </Section>

            <Section title="KVKK kapsamındaki haklarınız">
              <p>KVKK’nın 11. maddesi uyarınca bize başvurarak:</p>
              <ul>
                <li>kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,</li>
                <li>işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                <li>eksik veya yanlış işlenmişse düzeltilmesini, gerekli şartlarda silinmesini isteme,</li>
                <li>
                  münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme,
                </li>
                <li>kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini isteme</li>
              </ul>
              <p>
                haklarına sahipsiniz. Başvurularınızı <Email /> adresine iletebilirsiniz; en geç 30 gün içinde
                yanıtlarız.
              </p>
            </Section>

            <Section title="Değişiklikler">
              <p>
                Bu politikayı zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayımlanır; sayfanın
                başındaki tarih son değişikliği gösterir.
              </p>
            </Section>
          </div>
        </article>
      </HouseFrame>
    </Container>
  )
}
