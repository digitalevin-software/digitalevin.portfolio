import { team } from '@/data/team'
import { initials, numberWord } from '@/lib/utils'
import { Container } from '@/components/ui/container'

export function Team() {
  const hasPlaceholder = team.some((m) => m.placeholder)

  return (
    <section id="ekip" aria-labelledby="ekip-baslik" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="house-inset">
          <div className="reveal">
            <h2 id="ekip-baslik" className="section-title">
              Ekip
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground text-pretty">
              Digitalevin, şirketlere yazılım çözümleri sunmak için yola çıkan {numberWord(team.length)} kişilik bir
              ekip. Farklı beceriler, aynı masa.
            </p>
          </div>

          <ul className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.id}
                className="grid grid-cols-[auto_1fr] items-center gap-x-4 rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                ) : (
                  <span
                    className="grid size-14 place-items-center rounded-full bg-secondary font-display text-lg font-semibold text-accent"
                    aria-hidden="true"
                  >
                    {initials(member.name)}
                  </span>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug tracking-[-0.015em]">{member.name}</h3>
                  <p className="text-sm font-medium text-accent">{member.role}</p>
                </div>
                {member.bio && <p className="col-span-2 mt-4 text-muted-foreground text-pretty">{member.bio}</p>}
              </li>
            ))}
          </ul>

          {hasPlaceholder && (
            <p className="mt-6 text-sm text-muted-foreground">Ekip bilgileri örnektir, yakında güncellenecek.</p>
          )}
        </div>
      </Container>
    </section>
  )
}
