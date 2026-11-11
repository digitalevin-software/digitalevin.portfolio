# Digitalevin

Digitalevin'in portfolyo ve tanıtım sitesi.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v3 · ESLint

## Kurulum

Node.js 20.19+ veya 22.12+ gerekir.

```bash
npm install
npm run dev       # geliştirme sunucusu → http://localhost:5173
```

| Komut             | Ne yapar                                            |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Değişiklikleri anında gösteren geliştirme sunucusu  |
| `npm run build`   | Tip kontrolü + yayına hazır çıktı (`dist/`)         |
| `npm run preview` | `dist/` klasörünü yerelde sunar                     |
| `npm run lint`    | ESLint kontrolü                                     |

## Klasör yapısı

```
src/
├─ assets/              Logo, ikonlar, çizimler, ekip avatarları
├─ components/
│  ├─ layout/           Header, Footer
│  ├─ sections/         Sayfanın bölümleri (Hero, Services, Projects…)
│  └─ projects/         Proje kartı, filtre, detay penceresi, önizlemeler
├─ config/site.ts       Site adı, e-posta, menü bağlantıları
├─ data/                Sayfa içeriği: projects.ts, services.ts, team.ts
├─ lib/utils.ts         Yardımcı fonksiyonlar (cn, pad2)
├─ styles/              Global stiller
├─ types/               Ortak TypeScript tipleri
├─ App.tsx              Bölümlerin sırası
└─ main.tsx             Giriş noktası
```

## Yeni proje eklemek

`src/data/projects.ts` içindeki `projects` dizisine bir nesne ekleyin:

```ts
{
  id: 'yeni-proje',
  title: 'Yeni Proje',
  summary: 'Kartta görünen kısa açıklama.',
  description: 'Detay penceresinde görünen uzun açıklama.',
  category: 'web',            // 'web' | 'app'
  status: 'in-development',   // 'live' | 'in-development' | 'concept'
  tagline: 'Web uygulaması · React',
  tone: 'blue',               // 'blue' | 'green'
  image: yeniProjeGorseli,    // src/assets/projects/ altına koyup import edin
}
```

Ekran görüntüsü yoksa `image` yerine koddan çizilen bir önizleme (`preview: 'booking'`) kullanılabilir.

Hizmetler `src/data/services.ts`, ekip `src/data/team.ts` içinden düzenlenir. Ekip bilgileri şu an örnektir.

## Yayına alma (GitHub Pages)

`main` dalına her push'ta `.github/workflows/deploy.yml` siteyi derleyip GitHub Pages'e yükler.

İlk seferde reponun **Settings → Pages → Build and deployment → Source** ayarını **GitHub Actions** yapın.

Site göreli yollarla derlenir (`base: './'`), bu yüzden hem özel alan adında hem de `kullanici.github.io/repo-adi/` altında çalışır.

## Notlar

- `src/styles/legacy.css` eski tek sayfalık tasarımdan birebir taşınan stillerdir; yeniden tasarımda Tailwind ile değiştirilecek. O zamana kadar Tailwind'in CSS sıfırlaması (`preflight`) `tailwind.config.ts` içinde kapalıdır.
- İletişim bağlantıları `mailto:` kullanır; sunucu veya form servisi yoktur.
