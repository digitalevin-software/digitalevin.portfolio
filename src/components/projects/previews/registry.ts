import type { ComponentType } from 'react'
import type { ProjectPreviewId } from '@/types'
import { BookingPreview } from './BookingPreview'
import { MenuPreview } from './MenuPreview'

export const projectPreviews: Record<ProjectPreviewId, ComponentType> = {
  booking: BookingPreview,
  menu: MenuPreview,
}
