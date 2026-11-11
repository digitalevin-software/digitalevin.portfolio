import type { ProjectCategory } from '@/types'
import { categoryLabels } from '@/data/projects'
import { cn } from '@/lib/utils'

export type ProjectFilterValue = 'all' | ProjectCategory

interface ProjectFilterProps {
  value: ProjectFilterValue
  /** Her seçenek için proje sayısı; sadece en az bir projesi olan kategoriler verilir. */
  counts: { value: ProjectFilterValue; count: number }[]
  onChange: (value: ProjectFilterValue) => void
}

export function ProjectFilter({ value, counts, onChange }: ProjectFilterProps) {
  return (
    <div role="group" aria-label="Projeleri filtrele" className="inline-flex self-start rounded-full border border-border bg-card p-1">
      {counts.map((option) => {
        const active = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              active ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {option.value === 'all' ? 'Hepsi' : categoryLabels[option.value]}
            <span className={cn('tabular-nums', active ? 'opacity-70' : 'opacity-60')}>{option.count}</span>
          </button>
        )
      })}
    </div>
  )
}
