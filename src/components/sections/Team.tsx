import { team } from '@/data/team'
import { pad2 } from '@/lib/utils'

export function Team() {
  return (
    <section className="team-section" id="ekip">
      <div className="section-head">
        <div>
          <div className="eyebrow">04 — Tanışalım</div>
          <h2>Evin arkasındaki ekip.</h2>
        </div>
        <p className="section-note">
          Farklı beceriler.
          <br />
          Aynı masada buluşan fikirler.
        </p>
      </div>

      <div className="team-grid">
        {team.map((person, i) => (
          <article key={person.id} className="person">
            <div className="portrait">
              <img src={person.avatar} alt={`${person.name} için örnek avatar`} width={180} height={180} />
              <span className="portrait-index">{pad2(i + 1)}</span>
            </div>
            <h3>{person.name}</h3>
            <div className="person-role">{person.role}</div>
            <p>{person.bio}</p>
          </article>
        ))}
      </div>

      <p className="placeholder-note">
        Bu bölüm şablondur. İsimler, avatarlar ve görev dağılımları örnek olarak yerleştirilmiştir.
      </p>
    </section>
  )
}
