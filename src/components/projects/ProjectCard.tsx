import { Link } from 'react-router'
import type { Project } from '@/types'
import { projectPath } from '@/data/projects'
import { StatusBadge } from '@/components/ui/status-badge'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project }: { project: Project }) {
  const tags = [project.kind, ...(project.tech ?? [])]

  return (
    <article className="group relative">
      <ProjectVisual project={project} className="aspect-[4/3] rounded-2xl sm:aspect-[16/11]" />

      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em]">
          {/* after: ile bütün kart tıklanabilir olur */}
          <Link
            to={projectPath(project)}
            className="decoration-2 underline-offset-4 after:absolute after:inset-0 after:rounded-2xl group-hover:underline focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring focus-visible:after:ring-offset-4 focus-visible:after:ring-offset-background"
          >
            {project.title}
          </Link>
        </h3>
        <StatusBadge status={project.status} className="mt-1" />
      </div>

      <p className="mt-2 text-muted-foreground text-pretty">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
