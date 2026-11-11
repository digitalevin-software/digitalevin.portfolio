import { useState } from 'react'
import type { Project, ProjectCategory } from '@/types'
import { categoryLabels, projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectDialog } from '@/components/projects/ProjectDialog'
import { ProjectFilter, type ProjectFilterValue } from '@/components/projects/ProjectFilter'

// En az bir projesi olan kategoriler, categoryLabels'taki sırayla.
const usedCategories = (Object.keys(categoryLabels) as ProjectCategory[]).filter((c) =>
  projects.some((p) => p.category === c),
)

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilterValue>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section className="section" id="isler">
      <div className="section-head">
        <div>
          <div className="eyebrow">02 — Atölyeden</div>
          <h2>Üzerinde çalıştıklarımız.</h2>
        </div>
        <ProjectFilter value={filter} categories={usedCategories} onChange={setFilter} />
      </div>

      <div className="projects">
        {projects.map((project, i) =>
          filter === 'all' || project.category === filter ? (
            <ProjectCard
              key={project.id}
              project={project}
              number={i + 1}
              onOpen={() => setSelected(project)}
            />
          ) : null,
        )}
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
