import type { Package } from '@/types'

/**
 * Çalışma paketleri. TASLAKTIR: içerikleri kendi hizmet kapsamınıza göre düzenleyin.
 * Fiyat yazılmadı; "Teklif alın" butonu iletişim formunda ilgili paketi seçili getirir.
 */
export const packages: Package[] = [
  {
    id: 'baslangic',
    name: 'Başlangıç',
    forWho: 'İnternette düzgün bir adresi olmayan işletmeler için.',
    includes: ['Kurumsal web sitesi', 'Telefona uyumlu tasarım', 'İletişim ve konum bilgileri', 'Temel arama motoru ayarları'],
  },
  {
    id: 'isletme',
    name: 'İşletme',
    forWho: 'Müşterisiyle dijitalde buluşmak isteyen salon, kafe ve mağazalar için.',
    includes: [
      'Başlangıç paketindeki her şey',
      'Online randevu sistemi veya QR menü',
      'Sosyal medya yönetimi',
      'İçerik ve görsel tasarım',
    ],
  },
  {
    id: 'ozel',
    name: 'Özel yazılım',
    forWho: 'Hazır programlara sığmayan iş süreçleri olan şirketler için.',
    includes: ['İhtiyaç analizi ve planlama', 'Stok, sipariş ve iş akışları', 'Kullandığınız araçlarla entegrasyon', 'Bakım ve geliştirme desteği'],
  },
]
