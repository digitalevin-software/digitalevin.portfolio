import { socialLinks } from '@/config/site'
import { cn } from '@/lib/utils'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/brand/BrandIcons'

const icons = { instagram: InstagramIcon, linkedin: LinkedinIcon, github: GithubIcon }

/** Doldurulmuş sosyal medya hesapları; hiçbiri yoksa hiçbir şey çizmez. */
export function SocialLinks({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  const links = socialLinks()
  if (links.length === 0) return null

  return (
    <ul className={cn('flex gap-2', className)} aria-label="Sosyal medya">
      {links.map(({ key, label, href }) => {
        const Icon = icons[key]
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={cn(
                'grid size-10 place-items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2',
                inverse
                  ? 'border-white/30 text-white hover:bg-white/10 focus-visible:ring-white'
                  : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-ring',
              )}
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
