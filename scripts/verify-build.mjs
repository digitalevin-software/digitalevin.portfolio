// `npm run build` çıktısını kontrol eder: her sayfa ön-render edilmiş mi, başlığı ve canonical
// adresi var mı, varlık yolları doğru alt dizini kullanıyor mu, sitemap.xml ve robots.txt üretilmiş mi.
// CI ve deploy iş akışları derlemeden sonra çalıştırır; yerelde `npm run verify` ile çalışır.
// Derlemeyle aynı BASE_PATH değeriyle çalıştırın (verilmezse "/").
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const base = process.env.BASE_PATH || '/'
const errors = []

if (!base.startsWith('/') || !base.endsWith('/')) {
  console.error(`BASE_PATH "/" ile başlayıp "/" ile bitmeli, gelen: "${base}"`)
  process.exit(1)
}
if (!existsSync(dist)) {
  console.error('dist/ bulunamadı. Önce `npm run build` çalıştırın.')
  process.exit(1)
}

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return htmlFiles(path)
    return name.endsWith('.html') ? [path] : []
  })
}

for (const required of ['index.html', '404.html', 'sitemap.xml', 'robots.txt']) {
  if (!existsSync(join(dist, required))) errors.push(`dist/${required} eksik`)
}

const pages = htmlFiles(dist)
for (const file of pages) {
  const name = relative(dist, file).replaceAll('\\', '/')
  const html = readFileSync(file, 'utf8')

  // Ön-render çalışmadıysa kök div boş kalır
  if (!/<div id="root">\s*<[a-z]/i.test(html)) errors.push(`${name}: #root boş, sayfa ön-render edilmemiş`)
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${name}: <title> yok`)
  // 404 sayfası arama motorlarına bir adres olarak bildirilmez
  if (name !== '404.html' && !/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) {
    errors.push(`${name}: canonical bağlantısı yok`)
  }

  // Vite'in ürettiği script, stil ve görsel yolları BASE_PATH ile başlamalı
  for (const [, src] of html.matchAll(/(?:src|href)="(\/[^"]*?assets\/[^"]+)"/g)) {
    if (!decodeURI(src).startsWith(base + 'assets/')) errors.push(`${name}: ${src} yolu "${base}assets/" ile başlamıyor`)
  }
}

if (existsSync(join(dist, 'sitemap.xml'))) {
  const count = (readFileSync(join(dist, 'sitemap.xml'), 'utf8').match(/<loc>https?:\/\/[^<]+<\/loc>/g) || []).length
  if (count === 0) errors.push('sitemap.xml boş')
}

if (errors.length) {
  console.error(`\nverify-build: ${errors.length} sorun bulundu\n`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}

console.log(`verify-build: ${pages.length} HTML sayfası kontrol edildi (base: ${base}) ✓`)
