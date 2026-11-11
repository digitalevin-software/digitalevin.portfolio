import { mailto, site } from '@/config/site'

export function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div>
        <div className="eyebrow">05 — Yeni bir sayfa</div>
        <h2>Yazılım projenizi konuşalım.</h2>
        <p>İşletmenizin ihtiyacını anlatın; uygun yazılım çözümünü birlikte planlayalım.</p>
      </div>
      <a href={mailto}>{site.email} ↗</a>
    </section>
  )
}
