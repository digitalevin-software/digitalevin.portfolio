import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'
import { applyHead, headForPath } from '@/lib/head'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/**
 * Sayfa değişimlerinin yan etkileri: başlık/meta güncelleme, kaydırma ve kaydırınca belirme.
 * Görünür bir şey çizmez.
 */
export function RouteEffects() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const previousPath = useRef(location.pathname)

  useEffect(() => {
    applyHead(headForPath(location.pathname))
  }, [location.pathname])

  useEffect(() => {
    const pathChanged = previousPath.current !== location.pathname
    previousPath.current = location.pathname
    // Geri/ileri tuşunda tarayıcı kendi kaydırma konumunu geri yükler; ilk açılışta da dokunma.
    if (navigationType === 'POP') return

    // Aynı sayfada: CSS'teki yumuşak kaydırma ("hareketi azalt" açıksa anında). Yeni sayfada: anında.
    const behavior: ScrollBehavior = pathChanged ? 'instant' : 'auto'
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' })
        return
      }
    }
    if (pathChanged) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash, location.key, navigationType])

  useScrollReveal(location.pathname)

  return null
}
