import type { Project, ProjectCategory, ProjectStatus } from '@/types'
import mockupCover from '@/assets/projects/mockup-studio/cover.webp'
import mockupEditor from '@/assets/projects/mockup-studio/editor.webp'
import mockupTemplates from '@/assets/projects/mockup-studio/templates.webp'
import mockupMobile from '@/assets/projects/mockup-studio/mobile.webp'

/**
 * Portfolyodaki projeler. Yeni proje eklemek için bu diziye bir nesne ekleyin;
 * sayfadaki sıra bu dizideki sıradır. Her proje /projeler/{id}/ adresinde kendi sayfasını alır.
 */
export const projects: Project[] = [
  {
    id: 'mokapla',
    title: 'Mockup Studio',
    summary: 'Tarayıcıda çalışan parametrik ambalaj tasarım aracı: ölçünü gir, kutunu anında 3D gör.',
    description:
      'Ambalaj tasarımını tarayıcıya taşıyan bir web uygulaması. Kullanıcı şablonunu seçiyor, ölçülerini ve görsellerini giriyor; ambalajını her yüzünden canlı 3D önizliyor ve kesim şablonunu tek tıkla indiriyor. Kayıt ya da kurulum gerektirmiyor.',
    category: 'app',
    status: 'live',
    kind: 'Ambalaj tasarım aracı',
    tech: ['React', 'Three.js', 'Vite'],
    problem:
      'Bir ambalaj fikrini görmek için genellikle düz bir çizim üzerinden kutunun nasıl duracağını hayal etmek, ölçü her değiştiğinde açılımı baştan çizmek ve profesyonel tasarım yazılımlarını öğrenmek gerekiyor.',
    solution:
      'Mockup Studio bu süreci tek ekrana indiriyor. Ölçü girildiğinde açılım ve 3D model anında yeniden hesaplanıyor; kutu katlanıp kapağı açılarak her açıdan incelenebiliyor. Görüntü PNG, kesim şablonu SVG olarak indiriliyor.',
    highlights: [
      '12 kategoride 37 hazır şablon',
      'Katlanan, dönen canlı 3D önizleme',
      'Her yüze ayrı görsel, 30 malzeme seçeneği',
      'PNG görüntü ve SVG kesim şablonu',
      'Ücretsiz; kayıt ve kurulum gerektirmez',
    ],
    gallery: [
      {
        src: mockupEditor,
        alt: 'Mockup Studio editörü: posta kutusunun 3D önizlemesi, yüz seçimi ve katlama ayarları',
        caption: 'Editör: yüz seçimi, katlama ve kapak ayarları, canlı 3D önizleme.',
      },
      {
        src: mockupTemplates,
        alt: 'Mockup Studio şablon kataloğu: kategoriler ve hazır ölçülü kutu şablonları',
        caption: 'Şablon kataloğu: kategoriye göre gezinme ve arama.',
      },
      {
        src: mockupMobile,
        alt: 'Mockup Studio ana sayfasının telefondaki görünümü',
        caption: 'Telefonda ana sayfa.',
        device: 'mobile',
      },
    ],
    links: { live: 'https://mokapla.digitalevin.com/' },
    featured: true,
    tone: 'green',
    image: mockupCover,
  },
  {
    id: 'randevu-defteri',
    title: 'Randevu Defteri',
    summary: 'Berber ve kuaförler için usta seçimli online randevu sistemi.',
    description:
      'Berber ve erkek kuaförlerinde müşterinin ustasını seçebildiği, uygun saatleri görebildiği bir randevu deneyimi üzerinde çalışıyoruz.',
    category: 'app',
    status: 'in-development',
    kind: 'Randevu sistemi',
    tech: ['Next.js'],
    problem:
      'Berber ve kuaförlerde randevu çoğunlukla telefonla ya da mesajla alınıyor. Müşteri hangi ustanın ne zaman boş olduğunu bilmiyor; salon da gün içinde sık sık telefona bakmak zorunda kalıyor.',
    solution:
      'Müşteri ustasını seçiyor, o ustanın uygun saatlerini tek ekranda görüyor ve randevusunu telefon açmadan oluşturuyor.',
    highlights: ['Müşteri ustasını kendisi seçer', 'Uygun saatler tek ekranda görünür', 'Randevu telefonsuz alınır'],
    tone: 'blue',
    preview: 'booking',
  },
  {
    id: 'masadaki-menu',
    title: 'Masadaki Menü',
    summary: 'Kafe ve restoranlar için telefonda rahat okunan QR menü.',
    description:
      'QR kodla açılan, okunaklı ve kolay güncellenebilir bir dijital menü fikri. Kafe ve restoranlar için hazırlanmış bir tasarım konsepti.',
    category: 'web',
    status: 'concept',
    kind: 'QR menü',
    problem:
      'Basılı menüleri güncellemek zahmetli; uzun listeler arasında aranan ürünü bulmak da müşteriye vakit kaybettiriyor.',
    solution:
      'Masadaki QR kodla açılan, kategorilere ayrılmış ve telefonda rahat okunan bir menü. Fiyat ve ürün değişiklikleri yeniden baskı beklemeden yayına alınabiliyor.',
    highlights: ['Masadaki QR kodla açılır', 'Fiyat ve ürünler kolayca güncellenir', 'Kategoriler arasında hızlı geçiş'],
    tone: 'amber',
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
  'in-development': 'Geliştiriliyor',
  concept: 'Konsept',
}

/** Proje sayfası adresi (router'a göre; alt dizin otomatik eklenir). */
export const projectPath = (project: Pick<Project, 'id'>) => `/projeler/${project.id}/`

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]
