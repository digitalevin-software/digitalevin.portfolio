import { Ear, Hammer, Handshake, Users } from 'lucide-react'
import type { Reason } from '@/types'

/** "Neden Digitalevin" maddeleri. */
export const reasons: Reason[] = [
  {
    title: 'Tek ekip, dört iş',
    text: 'Web sitesi, yazılım, tasarım ve sosyal medya aynı masada. Her iş için ayrı bir firmayla uğraşmazsınız.',
    icon: Users,
  },
  {
    title: 'Önce dinleriz',
    text: 'Hazır paket dayatmayız. İşinizi ve sizi yoran işleri anlar, çözümü sizinle birlikte planlarız.',
    icon: Ear,
  },
  {
    title: 'Kendi ürünlerimizi de yapıyoruz',
    text: 'Randevu Defteri ve Masadaki Menü gibi ürünleri kendimiz geliştiriyoruz; işletmelerin gündelik derdini yakından tanıyoruz.',
    icon: Hammer,
  },
  {
    title: 'Yayından sonra da yanınızdayız',
    text: 'Siteniz ya da yazılımınız yayına çıktıktan sonra bakım, geliştirme ve dijital yönetimle devam ederiz.',
    icon: Handshake,
  },
]
