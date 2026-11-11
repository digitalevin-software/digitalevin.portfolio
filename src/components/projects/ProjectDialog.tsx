import { useEffect, useRef, type MouseEvent } from 'react'
import type { Project } from '@/types'
import { statusLabels } from '@/data/projects'
import { mailto } from '@/config/site'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  // Seçili proje değişince yerel <dialog>'u aç/kapat.
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  // Arka plana (pencerenin dışına) tıklayınca kapat.
  function handleBackdropClick(e: MouseEvent<HTMLDialogElement>) {
    if (e.target !== e.currentTarget) return
    const r = e.currentTarget.getBoundingClientRect()
    const outside =
      e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom
    if (outside) e.currentTarget.close()
  }

  return (
    <dialog ref={ref} onClose={onClose} onClick={handleBackdropClick}>
      <button type="button" onClick={() => ref.current?.close()} aria-label="Kapat">
        ✕
      </button>
      {project && (
        <>
          <div className="eyebrow">{statusLabels[project.status]}</div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </>
      )}
      <a className="btn" href={mailto}>
        Bu fikri konuşalım ↗
      </a>
    </dialog>
  )
}
