import type { Testimonial } from '@/types'

/**
 * Müşteri yorumları. Liste boşken bölüm sayfada hiç görünmez.
 * Sadece gerçek, izin alınmış yorumları ekleyin. Örnek:
 *
 *   {
 *     quote: 'Randevular artık telefonla değil, uygulamadan geliyor.',
 *     name: 'Ad Soyad',
 *     role: 'Kurucu, İşletme Adı',
 *     projectId: 'randevu-defteri',
 *   },
 */
export const testimonials: Testimonial[] = []
