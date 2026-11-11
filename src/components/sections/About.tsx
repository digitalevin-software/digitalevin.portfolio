const principles = ['İhtiyacı anla', 'Birlikte planla', 'Özenle geliştir', 'Yanında ol']

export function About() {
  return (
    <section className="about" id="hakkimizda">
      <div>
        <div className="eyebrow">03 — Bizim yaklaşımımız</div>
        <h2>
          Yazılımınızı geliştirir,
          <br />
          yanında oluruz.
        </h2>
        <div className="note">İşiniz büyürken, yanında oluyoruz.</div>
      </div>
      <div>
        <p>
          Digitalevin, şirketlere yazılım çözümleri sunmak için yola çıkan üç kişilik bir ekip. Web
          uygulamaları, ERP çözümleri ve işletmeye özel sistemler geliştiriyor; farklı araçlarınızı
          entegrasyonlarla bir araya getiriyoruz.
        </p>
        <p>
          İşinizi dinliyor, öncelikleri birlikte belirliyor ve ihtiyacınıza uygun çözümler
          geliştiriyoruz. Yayına aldıktan sonra da bakım, geliştirme ve dijital yönetimle çalışmayı
          sürdürüyoruz.
        </p>
        <div className="skills">
          {principles.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
