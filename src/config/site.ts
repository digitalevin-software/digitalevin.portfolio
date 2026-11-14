import type { NavItem } from '@/types'

/**
 * Sitenin temel bilgileri. Boş bırakılan iletişim alanları sayfada hiç görünmez;
 * değer girdiğiniz an ilgili buton/bağlantı kendiliğinden çıkar.
 */
export const site = {
  name: 'Digitalevin',
  email: 'digitaleviniz@gmail.com',
  city: 'İstanbul',

  /**
   * Sitenin tam adresi (sonunda / olmadan). Yayında GitHub Actions bunu Pages ayarlarından
   * otomatik verir; buradaki değer yerel derlemelerde ve CI'da kullanılır.
   */
  url: (import.meta.env.VITE_SITE_URL || 'https://www.digitalevin.com').replace(/\/$/, ''),

  /** WhatsApp numarası: ülke koduyla, boşluksuz. Örn. '905321234567'. Boşsa WhatsApp butonları gizlenir. */
  whatsapp: '',
  /** Sitede görünecek telefon. Örn. '0532 123 45 67'. Boşsa gizlenir. */
  phone: '',

  /** Sosyal medya adresleri (tam URL). Boş olanlar gizlenir. */
  social: {
    instagram: '',
    linkedin: '',
    github: '',
  },

  /**
   * Teklif formunun doğrudan e-postanıza düşmesi için web3forms.com'dan alınan erişim anahtarı.
   * Boşsa form, ziyaretçinin e-posta uygulamasını mesaj hazır şekilde açar.
   */
  formAccessKey: '',

  nav: [
    { label: 'Projeler', href: '#projeler' },
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Paketler', href: '#paketler' },
    { label: 'Ekip', href: '#ekip' },
    { label: 'SSS', href: '#sss' },
  ] satisfies NavItem[],
}

/** E-posta bağlantısı; konu ve gövde verilirse önceden doldurulur. */
export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${site.email}${query ? `?${query}` : ''}`
}

/** WhatsApp sohbet bağlantısı; numara yoksa null. */
export function whatsappLink(text = 'Merhaba Digitalevin, projem hakkında görüşmek istiyorum.') {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : null
}

/** Dolu olan sosyal medya hesapları, gösterim sırasıyla. */
export function socialLinks() {
  const labels = { instagram: 'Instagram', linkedin: 'LinkedIn', github: 'GitHub' } as const
  return (Object.keys(labels) as (keyof typeof labels)[])
    .filter((key) => site.social[key])
    .map((key) => ({ key, label: labels[key], href: site.social[key] }))
}
