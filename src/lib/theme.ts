import { useSyncExternalStore } from 'react'

/**
 * Koyu/açık tema. İlk değer index.html'deki betikte, sayfa çizilmeden önce belirlenir:
 * kayıtlı tercih varsa o, yoksa işletim sisteminin ayarı.
 */
const STORAGE_KEY = 'theme'
const SYSTEM_QUERY = '(prefers-color-scheme: dark)'

function savedTheme(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function apply(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0B1222' : '#F7F8FB')
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia(SYSTEM_QUERY)
  // Kullanıcı bir tercih kaydetmediyse sistem ayarını izle
  const onSystemChange = () => {
    if (!savedTheme()) apply(media.matches)
    onChange()
  }
  media.addEventListener('change', onSystemChange)
  window.addEventListener('themechange', onChange)
  return () => {
    media.removeEventListener('change', onSystemChange)
    window.removeEventListener('themechange', onChange)
  }
}

const isDark = () => document.documentElement.classList.contains('dark')

export function useTheme() {
  // Sunucuda (derlemede) her zaman açık tema varsayılır
  const dark = useSyncExternalStore(subscribe, isDark, () => false)

  function toggle() {
    const next = !isDark()
    apply(next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      // Gizli sekme vb.: tercih bu oturumla sınırlı kalır
    }
    window.dispatchEvent(new Event('themechange'))
  }

  return { dark, toggle }
}
