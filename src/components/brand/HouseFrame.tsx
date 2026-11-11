import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/**
 * Logodaki evin büyük hali: çatının sol eğimi bir büyüme okuna dönüşür,
 * duvarlar içerik uzadıkça uzar. Hero, projeler ve proje sayfaları bu evin içinde durur.
 */

interface Frame {
  w: number
  h: number
  wall: number
}

/** Çatı yüksekliği: genişliğin %11'i, 64–140px arası. Aşağıdaki CSS clamp ile aynı olmalı. */
const roofHeight = (w: number) => Math.min(140, Math.max(64, w * 0.11))

function buildPaths({ w, h, wall }: Frame) {
  const p = wall / 2
  const roof = roofHeight(w)
  const head = Math.max(14, wall * 2.6)

  const eaveL = { x: p, y: roof }
  const eaveR = { x: w - p, y: roof }
  const tip = { x: w * 0.68, y: p + head * 0.6 }

  // Okun doğrultusu
  const dx = tip.x - eaveL.x
  const dy = tip.y - eaveL.y
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len

  // Çatının tepesi okun üzerinde, genişliğin %60'ında
  const apexX = w * 0.6
  const apex = { x: apexX, y: eaveL.y + dy * ((apexX - eaveL.x) / dx) }

  // Ok başı: geri yönü ±38° döndür
  const a = (38 * Math.PI) / 180
  const rot = (x: number, y: number, t: number) => ({
    x: x * Math.cos(t) - y * Math.sin(t),
    y: x * Math.sin(t) + y * Math.cos(t),
  })
  const h1 = rot(-ux, -uy, a)
  const h2 = rot(-ux, -uy, -a)

  const bottom = h - p
  const r = Math.min(wall * 2.4, 24)
  const mid = w / 2
  const f = (n: number) => n.toFixed(1)

  return {
    arrow: `M${f(eaveL.x)} ${f(eaveL.y)} L${f(tip.x)} ${f(tip.y)}`,
    head: `M${f(tip.x + h1.x * head)} ${f(tip.y + h1.y * head)} L${f(tip.x)} ${f(tip.y)} L${f(tip.x + h2.x * head)} ${f(tip.y + h2.y * head)}`,
    roof: `M${f(apex.x)} ${f(apex.y)} L${f(eaveR.x)} ${f(eaveR.y)}`,
    left: `M${f(eaveL.x)} ${f(eaveL.y)} V${f(bottom - r)} Q${f(eaveL.x)} ${f(bottom)} ${f(eaveL.x + r)} ${f(bottom)} H${f(mid)}`,
    right: `M${f(eaveR.x)} ${f(eaveR.y)} V${f(bottom - r)} Q${f(eaveR.x)} ${f(bottom)} ${f(eaveR.x - r)} ${f(bottom)} H${f(mid)}`,
  }
}

/** Çizim süresi ve gecikmesi (ms) → index.css içindeki .house-path animasyonu */
const timing = (dur: number, delay: number) =>
  ({ '--dur': `${dur}ms`, '--delay': `${delay}ms` }) as CSSProperties

export function HouseFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState<Frame | null>(null)
  const gradientId = useId()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // ResizeObserver ilk ölçümü observe() çağrısından hemen sonra da bildirir.
    const ro = new ResizeObserver(() => {
      const wall = parseFloat(getComputedStyle(el).getPropertyValue('--wall')) || 8
      setFrame({ w: el.offsetWidth, h: el.offsetHeight, wall })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const paths = frame ? buildPaths(frame) : null

  return (
    <div ref={ref} className="relative [container-type:inline-size]">
      {frame && paths && (
        <svg
          className="pointer-events-none absolute inset-0 overflow-visible"
          width={frame.w}
          height={frame.h}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={frame.w} y2="0">
              {/* Renkler index.css'teki --house-from/--house-to; koyu modda açılır */}
              <stop offset="0" style={{ stopColor: 'hsl(var(--house-from))' }} />
              <stop offset="1" style={{ stopColor: 'hsl(var(--house-to))' }} />
            </linearGradient>
          </defs>
          <g
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={frame.wall}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path className="house-path" pathLength={1} d={paths.arrow} style={timing(850, 150)} />
            <path className="house-path" pathLength={1} d={paths.head} style={timing(300, 950)} />
            <path className="house-path" pathLength={1} d={paths.roof} style={timing(600, 600)} />
            <path className="house-path" pathLength={1} d={paths.left} style={timing(1600, 150)} />
            <path className="house-path" pathLength={1} d={paths.right} style={timing(1600, 700)} />
          </g>
        </svg>
      )}
      <div
        className="house-inset relative pb-12 sm:pb-16"
        // Çatı yüksekliği kadar boşluk; roofHeight() ile aynı formül (cqw = kapsayıcı genişliğinin %1'i).
        style={{ paddingTop: 'calc(clamp(64px, 11cqw, 140px) + 1.5rem)' }}
      >
        {children}
      </div>
    </div>
  )
}
