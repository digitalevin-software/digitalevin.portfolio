import { useEffect } from 'react'

/**
 * `.reveal` sınıflı blokları ekrana girerken yumuşakça gösterir.
 * Ekranda zaten görünenler hemen işaretlenir; böylece sayfa açılışında hiçbir şey yanıp sönmez.
 * JavaScript yoksa ya da "hareketi azalt" açıksa içerik hiç gizlenmez.
 */
export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))
    const viewport = window.innerHeight
    for (const el of elements) {
      if (el.getBoundingClientRect().top < viewport * 0.92) el.classList.add('is-visible')
    }
    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    for (const el of elements) {
      if (!el.classList.contains('is-visible')) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [routeKey])
}
