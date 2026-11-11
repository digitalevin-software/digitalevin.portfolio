# Digitalevin

Digitalevin'in portfolyo ve tanıtım sitesi: projelerimizi sergilediğimiz, yeni projeler eklendikçe büyüyen site.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v3 · React Router · framer-motion · lucide-react · ESLint
Fontlar (Bricolage Grotesque, Instrument Sans) `@fontsource` ile siteyle birlikte sunulur; dış bir font servisine istek gitmez.

## Kurulum

Node.js 20.19+ veya 22.12+ gerekir.

```bash
npm install
npm run dev       # geliştirme sunucusu → http://localhost:5173
```

| Komut             | Ne yapar                                                                   |
| ----------------- | -------------------------------------------------------------------------- |
| `npm run dev`     | Değişiklikleri anında gösteren geliştirme sunucusu                         |
| `npm run build`   | Tip kontrolü + derleme + her sayfanın statik HTML'e çevrilmesi (`dist/`)   |
| `npm run preview` | `dist/` klasörünü yerelde sunar                                            |
| `npm run lint`    | ESLint kontrolü                                                            |

## Sayfalar

| Adres                 | İçerik                                                      |
| --------------------- | ----------------------------------------------------------- |
| `/`                   | Ana sayfa                                                   |
| `/projeler/{id}/`     | Her proje için ayrı sayfa (`src/data/projects.ts`'ten)      |
| Diğer her adres       | "Bu oda boş" (404) sayfası                                  |

## Klasör yapısı

```
public/                 favicon, logo.png (arama motorları), og-image.png (paylaşım görseli)
scripts/prerender.mjs   Derlemede sayfaları HTML'e çevirir, sitemap.xml ve robots.txt üretir
src/
├─ assets/              logo-mark(-light).png (sitedeki logo), digitalevin-logo.png (orijinal)
├─ components/
│  ├─ brand/            Logo, HouseFrame (ev çizimi), QR deseni, sosyal medya ikonları
│  ├─ contact/          Teklif formu, e-posta kopyalama
│  ├─ hero/             Hero'daki ürün kolajı (web sitesi, randevu telefonu, bildirim, QR menü)
│  ├─ layout/           Header, Footer, WhatsApp butonu, tema butonu, sayfa geçişleri
│  ├─ projects/         Proje kartı, filtre, telefon önizlemeleri
│  ├─ sections/         Ana sayfa bölümleri (Hero, Projects, Services, Packages, Faq…)
│  ├─ services/         Hizmet kartlarındaki çizimler
│  └─ ui/               Button, StatusBadge, Container (shadcn/ui düzeninde)
├─ config/site.ts       Site adı, e-posta, WhatsApp, telefon, sosyal medya, form anahtarı, menü
├─ data/                Sayfa içeriği: projects, services, packages, faqs, reasons, team, testimonials
├─ hooks/               Aktif bölüm takibi, kaydırınca belirme
├─ lib/                 head.ts (SEO etiketleri), theme.ts (koyu mod), quote-store.ts, utils.ts
├─ pages/               HomePage, ProjectPage, NotFoundPage
├─ styles/index.css     Renk tokenları (açık/koyu), animasyonlar
├─ App.tsx              Sayfa yönlendirmeleri
├─ main.tsx             Tarayıcı girişi
└─ entry-server.tsx     Derleme girişi (sayfaları HTML'e çevirmek için)
```

## İletişim bilgilerini doldurmak

Hepsi `src/config/site.ts` içinde. **Boş bırakılan alan sayfada hiç görünmez**, doldurduğunuz an ilgili buton çıkar:

| Alan            | Örnek                                   | Nerede görünür                                   |
| --------------- | --------------------------------------- | ------------------------------------------------ |
| `whatsapp`      | `'905321234567'` (ülke koduyla, boşluksuz) | Sağ altta WhatsApp butonu, iletişim, footer   |
| `phone`         | `'0532 123 45 67'`                      | İletişim bölümü, footer                          |
| `social`        | `instagram: 'https://instagram.com/…'`  | İletişim bölümü, footer                          |
| `formAccessKey` | web3forms anahtarı                      | Teklif formu                                     |

### Teklif formunun doğrudan e-postanıza gelmesi

1. [web3forms.com](https://web3forms.com) adresine gidip `digitaleviniz@gmail.com` adresini girin; erişim anahtarı (access key) e-postanıza gelir.
2. Anahtarı `src/config/site.ts` → `formAccessKey` alanına yazın.

Anahtar yokken form çalışmaya devam eder: "E-posta ile gönder" butonu ziyaretçinin e-posta uygulamasını mesaj hazır şekilde açar.

## Yeni proje eklemek

`src/data/projects.ts` içindeki `projects` dizisine bir nesne ekleyin. Kart, filtre sayıları, proje sayfası, sitemap ve sayfa başlıkları kendiliğinden oluşur.

```ts
import kapak from '@/assets/projects/yeni-proje.png'
import ekran1 from '@/assets/projects/yeni-proje-1.png'

{
  id: 'yeni-proje',                       // adres: /projeler/yeni-proje/
  title: 'Yeni Proje',
  summary: 'Kartta görünen tek cümle.',
  description: 'Proje sayfasının giriş paragrafı.',
  category: 'web',                        // 'web' | 'app'
  status: 'live',                         // 'live' | 'in-development' | 'concept'
  kind: 'E-ticaret sitesi',
  tech: ['React', 'Node.js'],
  problem: 'Hangi sorunu çözüyor?',
  solution: 'Nasıl çözüyor?',
  highlights: ['Özellik 1', 'Özellik 2'],
  gallery: [
    { src: ekran1, alt: 'Ürün sayfası', caption: 'İsteğe bağlı açıklama' },  // tarayıcı çerçevesinde
    { src: telefon1, alt: 'Telefonda ana sayfa', device: 'mobile' },          // telefon çerçevesinde
  ],
  links: { live: 'https://…' },           // "Siteyi aç" bağlantısı
  featured: true,                         // hero'nun üstündeki duyuru etiketinde gösterilir (ilk true olan)
  tone: 'green',                          // önizleme zemini: 'blue' | 'green' | 'amber'
  image: kapak,                           // kapak görseli (yaklaşık 16:11)
}
```

`problem`, `solution`, `highlights`, `gallery`, `links`, `image` isteğe bağlıdır. Kapak görseli yoksa koddan çizilen bir telefon ekranı kullanılabilir (`preview: 'booking'`); yeni ekranlar `src/components/projects/previews/` altına eklenip `registry.ts`'e kaydedilir.

## Diğer içerik

- **Hizmetler:** `src/data/services.ts` (ikonlar [lucide](https://lucide.dev/icons))
- **Paketler:** `src/data/packages.ts`. Fiyat yazılmaz; "Teklif alın" formu o paket seçili açar. *İçerikler taslaktır, kendi kapsamınıza göre düzenleyin.*
- **Sık sorulan sorular:** `src/data/faqs.ts`. Google için FAQ verisi de buradan üretilir. *Cevaplar taslaktır.*
- **Neden Digitalevin:** `src/data/reasons.ts`
- **Ekip:** `src/data/team.ts`. İsteğe bağlı `bio` ve `photo` eklenebilir; fotoğraf yoksa baş harfler gösterilir.
- **Müşteri yorumları:** `src/data/testimonials.ts`. Liste boşken bölüm görünmez; sadece gerçek, izin alınmış yorumları ekleyin.
- **Renkler:** `src/styles/index.css` (açık ve koyu tema için ayrı HSL değişkenleri)

## SEO ve paylaşım

- `npm run build` her sayfayı statik HTML'e çevirir; Google içeriği JavaScript beklemeden okur.
- Her sayfanın kendi başlığı, açıklaması ve canonical adresi vardır (`src/lib/head.ts`).
- Link paylaşılınca `public/og-image.png` (1200×630) görünür. Değiştirmek için aynı ölçüde yeni bir PNG koyun.
- `sitemap.xml` ve `robots.txt` derlemede üretilir. Google Search Console'a sitemap'i ekleyebilirsiniz.

## Yayına alma (GitHub Pages)

`main` dalına her push'ta `.github/workflows/deploy.yml` siteyi derleyip GitHub Pages'e yükler.

1. İlk seferde reponun **Settings → Pages → Build and deployment → Source** ayarını **GitHub Actions** yapın.
2. Sitenin adresi ve alt dizini (`/digitalevin.portfolio/`) iş akışında otomatik belirlenir; özel alan adı bağlarsanız ayrıca bir şey değiştirmeniz gerekmez.

## Notlar

- Koyu mod ilk açılışta işletim sisteminin ayarını izler; header'daki butonla değiştirilen tercih tarayıcıda saklanır.
- Animasyonlar (evin çizilmesi, kaydırınca belirme, filtre geçişleri) "hareketi azalt" açıksa kapanır.
