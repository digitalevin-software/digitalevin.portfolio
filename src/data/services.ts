import { CalendarCheck, Megaphone, MonitorSmartphone, Workflow } from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web siteleri ve e-ticaret',
    description:
      'Markanızın internetteki adresini tasarlıyor, hızlı açılan ve kolay kullanılan web siteleri geliştiriyoruz.',
    tags: ['Kurumsal web sitesi', 'Ürün kataloğu', 'E-ticaret'],
    icon: MonitorSmartphone,
  },
  {
    id: 'erp',
    title: 'Özel yazılım ve ERP',
    description:
      'Hazır programlara sığmayan iş süreçleriniz için size özel yazılımlar kuruyor, kullandığınız araçları birbirine bağlıyoruz.',
    tags: ['Stok ve sipariş takibi', 'İş akışları', 'Entegrasyonlar'],
    icon: Workflow,
  },
  {
    id: 'booking',
    title: 'Randevu sistemleri ve QR menü',
    description:
      'Müşterilerinizin işini kolaylaştıran, ekibinizin zamanını geri kazandıran küçük ama etkili uygulamalar hazırlıyoruz.',
    tags: ['Online randevu', 'Usta seçimi', 'Dijital menü'],
    icon: CalendarCheck,
  },
  {
    id: 'social',
    title: 'Sosyal medya yönetimi',
    description:
      'Markanızın dijital sesini birlikte kuruyor, hesaplarınızı düzenli bir içerik planıyla yönetiyoruz.',
    tags: ['İçerik planı', 'Görsel tasarım', 'Paylaşım yönetimi'],
    icon: Megaphone,
  },
]
