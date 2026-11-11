import type { Service } from '@/types'
import webIcon from '@/assets/icons/web.svg'
import erpIcon from '@/assets/icons/erp.svg'
import bookingIcon from '@/assets/icons/booking.svg'
import socialIcon from '@/assets/icons/social.svg'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web geliştirme & e-ticaret',
    description:
      'Markanızın internetteki adresini tasarlıyor, hızlı ve kolay kullanılan web deneyimleri geliştiriyoruz.',
    tags: ['Kurumsal web sitesi', 'Ürün kataloğu', 'E-ticaret'],
    icon: webIcon,
  },
  {
    id: 'erp',
    title: 'Özel yazılım & ERP çözümleri',
    description:
      'Hazır kalıplara sığmayan ihtiyaçlarınız için iş süreçlerinize uygun yazılım çözümleri üretiyoruz.',
    tags: ['Stok ve sipariş takibi', 'İş akışları', 'Entegrasyonlar'],
    icon: erpIcon,
  },
  {
    id: 'booking',
    title: 'Randevu sistemleri & QR menü',
    description:
      'Müşterilerinizin işini kolaylaştıran, ekibinizin zamanını geri kazandıran uygulamalar hazırlıyoruz.',
    tags: ['Online randevu', 'Usta seçimi', 'Dijital menü'],
    icon: bookingIcon,
  },
  {
    id: 'social',
    title: 'Sosyal medya yönetimi',
    description:
      'Markanızın dijital sesini birlikte kuruyor, hesaplarınızı düzenli bir içerik planıyla yönetiyoruz.',
    tags: ['İçerik planlama', 'Görsel tasarım', 'Paylaşım yönetimi'],
    icon: socialIcon,
  },
]
