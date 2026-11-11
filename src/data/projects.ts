import type { Project, ProjectCategory, ProjectStatus } from '@/types'

/**
 * Portfolyodaki projeler. Yeni proje eklemek için bu diziye bir nesne ekleyin;
 * sıra, sayfadaki sırayı ve numarayı belirler.
 */
export const projects: Project[] = [
  {
    id: 'randevu-defteri',
    title: 'Randevu Defteri',
    summary:
      'Salonlar için usta seçimini ve randevu planlamasını bir araya getiren çözüm üzerinde çalışıyoruz.',
    description:
      'Berber ve erkek kuaförlerinde müşterinin ustasını seçebildiği, uygun saatleri görebildiği bir randevu deneyimi üzerinde çalışıyoruz. Bu sayfadaki görünüm, projenin tasarım temsilidir; canlı bir müşteri uygulaması değildir.',
    category: 'app',
    status: 'in-development',
    tagline: 'İş uygulaması · Next.js',
    tone: 'blue',
    preview: 'booking',
  },
  {
    id: 'masadaki-menu',
    title: 'Masadaki Menü',
    summary:
      'Küçük kafe ve restoranlar için telefonda rahatça gezilen, sade bir QR menü konsepti.',
    description:
      'QR kodla açılan, okunaklı ve kolay güncellenebilir bir dijital menü fikri. Amaç, müşterinin aradığını uzun listeler arasında kaybolmadan bulması. Bu çalışma, kafe ve restoranlar için hazırlanan bir tasarım konseptidir.',
    category: 'web',
    status: 'concept',
    tagline: 'Web deneyimi · Konsept',
    tone: 'green',
    preview: 'menu',
  },
]

/** Filtre sekmelerinin sırası ve etiketleri. */
export const categoryLabels: Record<ProjectCategory, string> = {
  web: 'Web',
  app: 'Uygulama',
}

export const statusLabels: Record<ProjectStatus, string> = {
  live: 'Yayında',
  'in-development': 'Geliştirme aşamasında',
  concept: 'Konsept çalışma',
}
