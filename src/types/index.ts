import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export type ProjectCategory = 'web' | 'app'

export type ProjectStatus = 'live' | 'in-development' | 'concept'

/** Koddan çizilen önizlemeler. Yeni bir tane eklerseniz components/projects/previews/registry.ts'e de ekleyin. */
export type ProjectPreviewId = 'booking' | 'menu'

/** Önizleme alanının zemin rengi. */
export type ProjectTone = 'blue' | 'green' | 'amber'

export interface ProjectImage {
  src: string
  /** Görselde ne olduğunu anlatan kısa metin (ekran okuyucular ve SEO için). */
  alt: string
  caption?: string
  /** Hangi çerçevede gösterileceği: masaüstü ekranı (tarayıcı) ya da telefon. Varsayılan: desktop. */
  device?: 'desktop' | 'mobile'
}

export interface Project {
  /** Benzersiz kimlik (küçük harf, tireli). Sayfa adresi olur: /projeler/{id}/ */
  id: string
  title: string
  /** Kartta görünen tek cümlelik açıklama. */
  summary: string
  /** Proje sayfasının giriş paragrafı. */
  description: string
  category: ProjectCategory
  status: ProjectStatus
  /** Ne tür bir ürün olduğu, örn. "Randevu sistemi". */
  kind: string
  /** Kullanılan teknolojiler, örn. ["Next.js", "PostgreSQL"]. */
  tech?: string[]
  /** Proje sayfasında: hangi sorunu çözüyor? */
  problem?: string
  /** Proje sayfasında: nasıl çözüyor? */
  solution?: string
  /** Öne çıkan özellikler (maddeler). */
  highlights?: string[]
  /** Ekran görüntüleri; proje sayfasında galeri olarak görünür. */
  gallery?: ProjectImage[]
  /** Yayındaki adres ve/veya kaynak kod. */
  links?: { live?: string; repo?: string }
  /** Hero'da öne çıkarılacak proje (ilk true olan). */
  featured?: boolean
  tone: ProjectTone
  /** Kapak görseli varsa onu kullanın (src/assets/projects/ altına koyup import edin)... */
  image?: string
  /** ...yoksa koddan çizilen bir önizleme seçin. */
  preview?: ProjectPreviewId
}

export interface Service {
  id: string
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
}

export interface TeamMember {
  id: string
  name: string
  role: string
  /** İsteğe bağlı tek cümlelik tanıtım. */
  bio?: string
  /** İsteğe bağlı fotoğraf; yoksa baş harfler gösterilir. */
  photo?: string
  /** true ise sayfada "örnek bilgi" notu gösterilir. */
  placeholder?: boolean
}

export interface Package {
  id: string
  name: string
  /** Kime uygun olduğu, tek cümle. */
  forWho: string
  includes: string[]
}

export interface Faq {
  question: string
  answer: string
}

export interface Reason {
  title: string
  text: string
  icon: LucideIcon
}

export interface Testimonial {
  quote: string
  name: string
  /** Örn. "Kurucu, Köşe Kafe" */
  role: string
  /** İlgili projenin id'si (varsa). */
  projectId?: string
}
