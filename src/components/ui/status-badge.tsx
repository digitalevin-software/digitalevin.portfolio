import type { ProjectStatus } from '@/types'
import { statusLabels } from '@/data/projects'
import { cn } from '@/lib/utils'

const dotClass: Record<ProjectStatus, string> = {
  live: 'bg-status-live',
  'in-development': 'bg-status-progress',
  concept: 'bg-status-concept',
}

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground',
        className,
      )}
    >
      <span className={cn('size-1.5 rounded-full', dotClass[status])} aria-hidden="true" />
      {statusLabels[status]}
    </span>
  )
}
