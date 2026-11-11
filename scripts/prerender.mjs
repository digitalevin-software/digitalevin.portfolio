// Derlenmiş siteyi sayfa sayfa statik HTML'e çevirir: Google içeriği JavaScript beklemeden okur,
// link paylaşılınca her sayfanın kendi başlığı ve görseli görünür.
// `npm run build` bunu `vite build` ve `vite build --ssr` adımlarından sonra çalıştırır.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const server = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')

for (const marker of ['<!--app-head-->', '<div id="root"></div>']) {
  if (!template.includes(marker)) throw new Error(`index.html şablonunda ${marker} bulunamadı`)
}

console.log('\nprerender:')
for (const page of server.pages) {
  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/[ \t]*<!-- Sayfaya özel[\s\S]*?-->\s*/, '')
    .replace('<!--app-head-->', server.head(page.path))
    .replace('<div id="root"></div>', `<div id="root">${server.render(page.path)}</div>`)

  const file = join(dist, page.file)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  console.log(`  ${page.path.padEnd(30)} → dist/${page.file}`)
}

const urls = server.pages
  .filter((p) => p.sitemap)
  .map((p) => `  <url><loc>${server.siteUrl}${p.path}</loc></url>`)
  .join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${server.siteUrl}/sitemap.xml\n`)
console.log('  sitemap.xml, robots.txt')

rmSync(ssrDir, { recursive: true, force: true })
