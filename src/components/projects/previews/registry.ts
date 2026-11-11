import type { ComponentType } from 'react'
import type { ProjectPreviewId } from '@/types'
import { BookingScreen } from './BookingScreen'
import { MenuScreen } from './MenuScreen'

/** Koddan çizilen proje ekranları ve ekran okuyucular için açıklamaları. */
export const projectScreens: Record<ProjectPreviewId, { Screen: ComponentType; label: string }> = {
  booking: {
    Screen: BookingScreen,
    label: 'Randevu Defteri arayüz taslağı: usta seçimi ve uygun saatler',
  },
  menu: {
    Screen: MenuScreen,
    label: 'Masadaki Menü arayüz taslağı: kategoriler ve fiyatlı ürün listesi',
  },
}
