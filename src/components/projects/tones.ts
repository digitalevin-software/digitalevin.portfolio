import type { ProjectTone } from '@/types'

/** Proje görsellerinin zemin rengi (index.css'teki --tone-* değişkenleri). */
export const toneClass: Record<ProjectTone, string> = {
  blue: 'bg-tone-blue',
  green: 'bg-tone-green',
  amber: 'bg-tone-amber',
}
