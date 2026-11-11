import type { Project } from '@/types'
import { statusLabels } from '@/data/projects'
import { pad2 } from '@/lib/utils'
import { projectPreviews } from './previews/registry'

const toneClass = { blue: 'pblue', green: 'pgreen' } as const

interface ProjectCardProps {
  project: Project
  /** Listedeki sırası (1'den başlar). */
  number: number
  onOpen: () => void
}

export function ProjectCard({ project, number, onOpen }: ProjectCardProps) {
  const Preview = project.preview ? projectPreviews[project.preview] : null

  return (
    <article className="project">
      <div className={`preview ${toneClass[project.tone]}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} ekran görüntüsü`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          Preview && <Preview />
        )}
        <span className="label">{statusLabels[project.status]}</span>
      </div>
      <div className="project-title">
        <h3>{project.title}</h3>
        <button type="button" onClick={onOpen} aria-label={`${project.title} projesinin detayları`}>
          ↗
        </button>
      </div>
      <p>{project.summary}</p>
      <span className="tag">
        {pad2(number)} / {project.tagline}
      </span>
    </article>
  )
}
