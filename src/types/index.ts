export interface NavItem {
  label: string
  href: string
}

export type ProjectCategory = 'web' | 'app'

export type ProjectStatus = 'live' | 'in-development' | 'concept'

/** Koddan çizilen önizlemeler. Yeni bir tane eklerseniz components/projects/previews/registry.ts'e de ekleyin. */
export type ProjectPreviewId = 'booking' | 'menu'

export type ProjectTone = 'blue' | 'green'

export interface Project {
  /** Benzersiz kimlik (küçük harf, tireli). */
  id: string
  title: string
  /** Kartta görünen kısa açıklama. */
  summary: string
  /** Detay penceresinde görünen uzun açıklama. */
  description: string
  category: ProjectCategory
  status: ProjectStatus
  /** Örn. "İş uygulaması · Next.js" */
  tagline: string
  tone: ProjectTone
  /** Ekran görüntüsü varsa onu kullanın (src/assets/projects/ altına koyup import edin)... */
  image?: string
  /** ...yoksa koddan çizilen bir önizleme seçin. */
  preview?: ProjectPreviewId
}

export interface Service {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
}
