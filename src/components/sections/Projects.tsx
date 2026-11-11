import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import type { ProjectCategory } from '@/types'
import { categoryLabels, projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { NextProjectCard } from '@/components/projects/NextProjectCard'
import { ProjectFilter, type ProjectFilterValue } from '@/components/projects/ProjectFilter'

// Filtre seçenekleri: "Hepsi" + en az bir projesi olan kategoriler (categoryLabels sırasıyla).
const filterCounts: { value: ProjectFilterValue; count: number }[] = [
  { value: 'all', count: projects.length },
  ...(Object.keys(categoryLabels) as ProjectCategory[])
    .map((c) => ({ value: c, count: projects.filter((p) => p.category === c).length }))
    .filter((o) => o.count > 0),
]

const ease = [0.22, 1, 0.36, 1] as const

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilterValue>('all')

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  // Proje sayısı çiftse davet kartı tam satır kaplar, tekse boş kalan hücreye oturur.
  const wideInvite = visible.length % 2 === 0

  return (
    <section id="projeler" aria-labelledby="projeler-baslik" className="border-t border-border pt-14 sm:pt-20">
      <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="projeler-baslik" className="section-title">
            Projeler
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground text-pretty">
            Geliştirdiğimiz ve üzerinde çalıştığımız ürünler. Yenileri eklendikçe bu ev büyüyor.
          </p>
        </div>
        {filterCounts.length > 2 && <ProjectFilter value={filter} counts={filterCounts} onChange={setFilter} />}
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-14 sm:mt-12 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <m.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
            >
              <ProjectCard project={project} />
            </m.li>
          ))}
          <m.li
            key="siradaki"
            layout
            transition={{ duration: 0.3, ease }}
            className={wideInvite ? 'md:col-span-2' : undefined}
          >
            <NextProjectCard wide={wideInvite} />
          </m.li>
        </AnimatePresence>
      </ul>
    </section>
  )
}
