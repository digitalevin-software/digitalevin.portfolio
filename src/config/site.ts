import type { NavItem } from '@/types'

export const site = {
  name: 'Digitalevin',
  email: 'digitaleviniz@gmail.com',
  location: 'İstanbul, TR',
  nav: [
    { label: 'Çözümler', href: '#hizmetler' },
    { label: 'İşler', href: '#isler' },
    { label: 'Ekip', href: '#ekip' },
    { label: 'Bir merhaba ↗', href: '#iletisim' },
  ] satisfies NavItem[],
}

export const mailto = `mailto:${site.email}`
