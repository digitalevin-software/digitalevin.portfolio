import heroArt from '@/assets/illustrations/hero-postcard.svg'
import { site } from '@/config/site'

export function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">
          <span className="dot" /> İşletmelere özel yazılım geliştirme
        </div>
        <h1>
          İşinize özel yazılım.
          <br />
          <em>Dijitaldeki</em> eviniz.
        </h1>
        <p className="intro">
          Şirketler için web siteleri, ERP ve özel yazılımlar geliştiriyoruz. Randevu sistemlerinden
          QR menülere kadar işinizi kolaylaştıran çözümler üretiyor; sosyal medya yönetimiyle dijital
          varlığınızı tamamlıyoruz.
        </p>
        <a className="btn" href="#hizmetler">
          Yazılım çözümlerimiz <span>↓</span>
        </a>
      </div>
      <div className="hero-art">
        <div className="tape" />
        <div className="postcard">
          <img
            src={heroArt}
            alt="Mobil uygulama, bulut ve entegrasyon çözümlerini temsil eden mavi çizgili ikonlar"
            width={460}
            height={340}
          />
          <div className="caption">
            <span>YAZILIM / BULUT / ENTEGRASYON</span>
            <span>{site.location}</span>
          </div>
        </div>
        <div className="handnote">Fikirleri çalışan sistemlere dönüştürüyoruz. ↗</div>
      </div>
    </section>
  )
}
