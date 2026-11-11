import type { TeamMember } from '@/types'

// İsteğe bağlı alanlar: `bio` (tek cümlelik tanıtım) ve `photo`
// (src/assets/team/ altına koyup import edin). Fotoğraf yoksa baş harfler gösterilir.
export const team: TeamMember[] = [
  { id: 'omer-ayik', name: 'Ömer Ayık', role: 'Yazılım geliştirici' },
  { id: 'omer-kincal', name: 'Ömer Kıncal', role: 'Yazılım geliştirici' },
  { id: 'diyar-tumer', name: 'Diyar Tümer', role: 'Grafik tasarımcı' },
]
