import type { Project } from '@/types'
import { cn, hostOf } from '@/lib/utils'
import { Phone } from './previews/Phone'
import { projectScreens } from './previews/registry'
import { BrowserFrame } from './ScreenFrames'
import { toneClass } from './tones'

interface ProjectVisualProps {
  project: Project
  /** card: proje kartı; page: proje sayfasındaki büyük görsel */
  variant?: 'card' | 'page'
  className?: string
}

/**
 * Projenin görseli: kapak ekran görüntüsü varsa tarayıcı çerçevesinde, yoksa koddan çizilen telefon ekranı.
 * Her ikisi de renkli zeminin üstünden başlar ve alttan taşar.
 */
export function ProjectVisual({ project, variant = 'card', className }: ProjectVisualProps) {
  const screen = project.preview ? projectScreens[project.preview] : null

  return (
    <div className={cn('relative overflow-hidden', toneClass[project.tone], className)}>
      {project.image ? (
        <BrowserFrame
          src={project.image}
          alt={`${project.title} ekran görüntüsü`}
          host={hostOf(project.links?.live)}
          loading={variant === 'page' ? 'eager' : 'lazy'}
          className={cn(
            'absolute -bottom-6 rounded-b-none',
            variant === 'page' ? 'inset-x-[6%] top-[7%]' : 'inset-x-[7%] top-[9%]',
          )}
          imgClassName="min-h-0 flex-1 object-cover object-top"
        />
      ) : (
        screen && (
          <div
            role="img"
            aria-label={screen.label}
            className={cn(
              'absolute inset-x-0 flex justify-center',
              variant === 'page' ? 'top-10 sm:top-14' : 'top-8 sm:top-10',
            )}
          >
            <Phone className={variant === 'page' ? 'origin-top sm:scale-125' : undefined}>
              <screen.Screen />
            </Phone>
          </div>
        )
      )}
    </div>
  )
}
