import { site, socialLinks } from '@/config/site'
import { projectPath, projects } from '@/data/projects'
import { faqs } from '@/data/faqs'

/**
 * Sayfa başına <head> bilgileri. Derlemede (scripts/prerender.mjs) HTML'e yazılır,
 * tarayıcıda sayfa değişince HeadManager tarafından güncellenir.
 */
export interface HeadData {
  title: string
  description: string
  /** Router yolu ("/" veya "/projeler/x/"). Verilirse canonical ve og:url yazılır. */
  path?: string
  noindex?: boolean
  jsonLd?: object[]
}

const defaultDescription =
  'Digitalevin, işletmeler için web siteleri, randevu sistemleri, QR menüler ve özel yazılımlar geliştiren İstanbul merkezli bir yazılım ekibi.'

/** Açıklamayı arama sonuçlarına sığacak uzunlukta, kelime ortasından bölmeden kısaltır. */
function clip(text: string, max = 160) {
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[,;:]$/, '') + '…'
}

export const absoluteUrl = (path: string) => site.url + path

function organizationLd() {
  const sameAs = socialLinks().map((s) => s.href)
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo.png'),
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'TR' },
    ...(sameAs.length ? { sameAs } : {}),
  }
}

function faqLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function headForPath(pathname: string): HeadData {
  if (pathname === '/' || pathname === '') {
    return {
      title: 'Digitalevin — İşletmenizin dijitaldeki evi',
      description: defaultDescription,
      path: '/',
      jsonLd: [organizationLd(), faqLd()],
    }
  }

  if (/^\/gizlilik\/?$/.test(pathname)) {
    return {
      title: 'Gizlilik ve Çerez Politikası — Digitalevin',
      description:
        'Digitalevin gizlilik ve çerez politikası: iletişim bilgilerinizin kullanımı, çerezler, ürünlerimizdeki Google AdSense reklamları ve KVKK kapsamındaki haklarınız.',
      path: '/gizlilik/',
    }
  }

  const match = pathname.match(/^\/projeler\/([^/]+)\/?$/)
  const project = match && projects.find((p) => p.id === decodeURIComponent(match[1]))
  if (project) {
    return {
      title: `${project.title}: ${project.kind} — Digitalevin`,
      description: clip(`${project.summary} ${project.description}`),
      path: projectPath(project),
    }
  }

  return { title: 'Sayfa bulunamadı — Digitalevin', description: defaultDescription, noindex: true }
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Derleme: <head> içine yazılacak etiketler. */
export function renderHeadTags(head: HeadData): string {
  const tags = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta name="description" content="${escapeHtml(head.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(head.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(head.description)}" />`,
    `<meta property="og:image" content="${escapeHtml(absoluteUrl('/og-image.png'))}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Digitalevin: İşletmenizin dijitaldeki evi" />`,
  ]
  if (head.path) {
    const url = escapeHtml(absoluteUrl(head.path))
    tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`)
  }
  if (head.noindex) tags.push('<meta name="robots" content="noindex" />')
  for (const ld of head.jsonLd ?? []) {
    // "</script>" kaçışı: JSON içinde < karakterini kodla
    tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`)
  }
  return tags.join('\n    ')
}

function setMeta(attr: 'name' | 'property', key: string, value: string | null) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (value === null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (href === null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

/** Tarayıcı: sayfa değişince başlık ve meta etiketlerini güncelle. */
export function applyHead(head: HeadData) {
  document.title = head.title
  const url = head.path ? absoluteUrl(head.path) : null
  setMeta('name', 'description', head.description)
  setMeta('property', 'og:title', head.title)
  setMeta('property', 'og:description', head.description)
  setMeta('property', 'og:url', url)
  setMeta('name', 'robots', head.noindex ? 'noindex' : null)
  setCanonical(url)
}
