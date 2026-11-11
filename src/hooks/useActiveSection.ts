import { useEffect, useState } from 'react'

/**
 * Ekranın ortasındaki bölümün id'si (menüde aktif bölümü vurgulamak için).
 * Hiçbir takip edilen bölüm ortada değilse null.
 */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    if (!enabled) return
    const order = key.split(',')
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        setActive(order.find((id) => visible.has(id)) ?? null)
      },
      // Sadece ekranın ortasındaki ince bant sayılır
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of order) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [key, enabled])

  return enabled ? active : null
}
