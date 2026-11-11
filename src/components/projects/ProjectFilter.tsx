import type { ProjectCategory } from '@/types'
import { categoryLabels } from '@/data/projects'

export type ProjectFilterValue = 'all' | ProjectCategory

interface ProjectFilterProps {
  value: ProjectFilterValue
  /** Sadece en az bir projesi olan kategoriler gösterilir. */
  categories: ProjectCategory[]
  onChange: (value: ProjectFilterValue) => void
}

export function ProjectFilter({ value, categories, onChange }: ProjectFilterProps) {
  const options: { value: ProjectFilterValue; label: string }[] = [
    { value: 'all', label: 'Hepsi' },
    ...categories.map((c) => ({ value: c, label: categoryLabels[c] })),
  ]

  return (
    <div className="tabs" role="group" aria-label="Projeleri filtrele">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={option.value === value ? 'active' : undefined}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
