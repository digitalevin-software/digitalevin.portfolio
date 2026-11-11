/**
 * Derleme sırasında sayfaları HTML'e çevirmek için kullanılan giriş (scripts/prerender.mjs).
 * Tarayıcıya gönderilmez.
 */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from './App'
import { site } from './config/site'
import { projectPath, projects } from './data/projects'
import { basename } from './lib/basename'
import { headForPath, renderHeadTags } from './lib/head'

/** Üretilecek sayfalar ve dist/ içindeki dosya adları. */
export const pages = [
  { path: '/', file: 'index.html', sitemap: true },
  ...projects.map((p) => ({ path: projectPath(p), file: `projeler/${p.id}/index.html`, sitemap: true })),
  // GitHub Pages bulunamayan her adres için 404.html'i gösterir
  { path: '/404/', file: '404.html', sitemap: false },
]

export const siteUrl = site.url

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={basename + path} basename={basename || undefined}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

export function head(path: string) {
  return renderHeadTags(headForPath(path))
}
