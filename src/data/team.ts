import type { TeamMember } from '@/types'
import avatar1 from '@/assets/team/avatar-1.svg'
import avatar2 from '@/assets/team/avatar-2.svg'
import avatar3 from '@/assets/team/avatar-3.svg'

// Örnek veri: isimler, avatarlar ve görevler gerçek ekip bilgileriyle değiştirilecek.
export const team: TeamMember[] = [
  {
    id: 'deniz',
    name: 'Deniz Yılmaz',
    role: 'Yazılım & sistemler',
    bio: 'İş süreçlerini anlayan, sağlam ve sürdürülebilir yazılım çözümleri.',
    avatar: avatar1,
  },
  {
    id: 'ece',
    name: 'Ece Demir',
    role: 'Tasarım & web deneyimi',
    bio: 'Markanın karakterini yansıtan, kullanımı kolay dijital deneyimler.',
    avatar: avatar2,
  },
  {
    id: 'mert',
    name: 'Mert Kaya',
    role: 'İçerik & dijital iletişim',
    bio: 'Markalar için tutarlı bir dil, düzenli içerik ve sosyal medya yönetimi.',
    avatar: avatar3,
  },
]
