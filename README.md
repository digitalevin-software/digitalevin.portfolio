# Digitalevin

Digitalevin'in portfolyo ve tanıtım sitesi: projelerimizi sergilediğimiz, yeni projeler eklendikçe büyüyen site.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v3 · React Router · framer-motion · lucide-react · ESLint
Fontlar (Bricolage Grotesque, Instrument Sans) `@fontsource` ile siteyle birlikte sunulur; dış bir font servisine istek gitmez.

## Kurulum

Node.js 22.12+ gerekir; CI ve yayın `.nvmrc` dosyasındaki sürümü (24) kullanır. `nvm use` / `fnm use` aynı sürümü kurar.

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
| `npm run verify`  | `dist/` çıktısını kontrol eder (ön-render, başlık, canonical, yollar, sitemap) |

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

## CI/CD (GitHub Actions)

| İş akışı                         | Ne zaman                                   | Ne yapar                                                                                       |
| -------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `.github/workflows/ci.yml`       | `main`'e açılan her PR, haftalık, elle     | Derleme kontrolü, `npm audit`, PR'daki yeni bağımlılıkların incelemesi (yalnızca repo herkese açıksa) |
| `.github/workflows/deploy.yml`   | `main`'e her push, elle (yalnızca `main`)  | Derler, kontrol eder ve GitHub Pages'e yükler. Bir adım başarısız olursa yayındaki site değişmez |
| `.github/workflows/build.yml`    | Diğer iki iş akışı çağırır                 | Ortak adımlar: `npm ci` → imza kontrolü → lint → tip kontrolü + derleme + ön-render → `verify` |
| `.github/workflows/workflow-lint.yml` | `.github/` değişince                  | İş akışlarını actionlint (hatalar) ve zizmor (güvenlik) ile denetler                           |

Dependabot (`.github/dependabot.yml`) npm paketleri ve Actions sürümleri için her pazartesi PR açar.

**Güvenlik önlemleri:** Actions sürümleri commit SHA'sına sabitlenir (Dependabot günceller); her iş yalnızca ihtiyacı olan izinle çalışır; `npm ci --ignore-scripts` paketlerin kurulumda kod çalıştırmasını engeller; paket imzaları doğrulanır; yayına giden derleme npm önbelleği kullanmaz.

### Reponun ayarları (bir kez)

1. **Settings → Pages → Build and deployment → Source:** **GitHub Actions**.
2. **Settings → Rules → Rulesets → New branch ruleset** (hedef: `main`):
   - *Require a pull request before merging*
   - *Require status checks to pass* → `Build / Build`, `npm audit`
     (`Workflow lint` yalnızca `.github/` değişince çalıştığı için zorunlu yapmayın; yoksa diğer PR'lar bekler.)
   - *Block force pushes*
3. **Settings → Advanced Security:** *Dependency graph*, *Dependabot alerts* ve *Dependabot security updates* açık olsun.

## Yayına alma (GitHub Pages + özel alan adı)

`main` dalına her push'ta `deploy.yml` siteyi derleyip GitHub Pages'e yükler. Sitenin adresi ve alt dizini Pages ayarlarından otomatik okunur; alan adı bağlayınca iş akışında bir şey değiştirmeniz gerekmez.

Site **https://www.digitalevin.com** adresinde yayındadır; `digitalevin.com` buraya yönlenir. Alan adı Namecheap'te.
Alt alan adları (ör. VDS'e giden) bu ayarlardan etkilenmez; kendi kayıtlarıyla çalışmaya devam eder.

**Alan adını bağlamak (bir kez):**

1. **Organizasyon → Settings → Pages → Add a domain:** `digitalevin.com`'u ekleyin, verilen TXT kaydını Namecheap'e girip **Verify**'a basın
   (başkasının alan adınızı kendi Pages sitesine bağlamasını engeller).
2. **Repo → Settings → Pages → Custom domain:** `www.digitalevin.com`.
3. **Namecheap → Domain List → Manage → Advanced DNS:**
   - `@` için **A** → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     ve **AAAA** → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` için **CNAME** → `digitalevin-software.github.io`
   - `@` ve `www` için eski (VDS'e giden) kayıtları ve Namecheap'in varsayılan URL Redirect kaydını silin.
     MX/e-posta kayıtlarına ve alt alan adlarına dokunmayın. Alt alan adı `@`'a CNAME ise önce VDS IP'sine A kaydı yapın.
4. DNS kontrolü geçip sertifika çıkınca **Enforce HTTPS**'i işaretleyin.
5. **Actions → Deploy → Run workflow** ile yeniden yayınlayın (canonical ve sitemap yeni adresi alır).

## Notlar

- Koyu mod ilk açılışta işletim sisteminin ayarını izler; header'daki butonla değiştirilen tercih tarayıcıda saklanır.
- Animasyonlar (evin çizilmesi, kaydırınca belirme, filtre geçişleri) "hareketi azalt" açıksa kapanır.
