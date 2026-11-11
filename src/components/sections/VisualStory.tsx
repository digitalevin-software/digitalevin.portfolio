import solutionsArt from '@/assets/illustrations/story-solutions.svg'
import collaborationArt from '@/assets/illustrations/story-collaboration.svg'

const stories = [
  {
    id: 'solutions',
    artClass: 'code-art',
    art: solutionsArt,
    alt: 'Web, mobil uygulama, entegrasyon ve bulut çözümleri ikonları',
    kicker: '01 / Fikirden çalışan ürüne',
    title: 'İşinize uyan çözümler.',
    lines: ['Stok takibi, randevu veya e-ticaret.', 'İhtiyacınızı çalışan bir yazılıma dönüştürüyoruz.'],
  },
  {
    id: 'collaboration',
    artClass: 'people-art',
    art: collaborationArt,
    alt: 'Yazılım ekibi ve müşteriyi temsil eden, gülümseyerek el sıkışan iki kişi',
    kicker: '02 / Aynı masanın etrafında',
    title: 'Birlikte iyi çalışırız.',
    lines: ['İşinizi dinliyor, süreci birlikte planlıyoruz.', 'Yazılımınızı geliştirirken yanınızda oluyoruz.'],
  },
]

export function VisualStory() {
  return (
    <section className="visual-story" aria-label="Yazılım ve iş birliği">
      {stories.map((story) => (
        <article key={story.id} className="story-piece">
          <div className={`story-art ${story.artClass}`}>
            <img src={story.art} alt={story.alt} width={480} height={290} />
          </div>
          <div className="story-copy">
            <span className="mono">{story.kicker}</span>
            <h3>{story.title}</h3>
            <p>
              {story.lines[0]}
              <br />
              {story.lines[1]}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
