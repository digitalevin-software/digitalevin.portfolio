import { services } from '@/data/services'
import { pad2 } from '@/lib/utils'

export function Services() {
  return (
    <section className="section services" id="hizmetler">
      <div className="section-head">
        <div>
          <div className="eyebrow">01 — Neler yapıyoruz?</div>
          <h2>
            Yazılım geliştiriyoruz.
            <br />
            İşinizi kolaylaştırıyoruz.
          </h2>
        </div>
        <p className="section-note">
          İhtiyacınıza özel geliştirme,
          <br />
          entegrasyon, bakım ve destek.
        </p>
      </div>

      <div className="service-list">
        {services.map((service, i) => (
          <article key={service.id} className="service">
            <span className="service-num">{pad2(i + 1)}</span>
            <h3>{service.title}</h3>
            <div>
              <p>{service.description}</p>
              <span className="tag">{service.tags.join(' / ')}</span>
            </div>
            <span className="service-mark" aria-hidden="true">
              <img src={service.icon} alt="" width={42} height={42} />
            </span>
          </article>
        ))}
      </div>

      <aside className="example">
        <span className="mono">MESELA, BİR RESTORAN İÇİN</span>
        <p>
          Web sitesi + QR menü + rezervasyon sistemi + sosyal medya.
          <br />
          <em>Dört ayrı iş, tek bir ekip.</em>
        </p>
      </aside>
    </section>
  )
}
