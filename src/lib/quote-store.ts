import { useSyncExternalStore } from 'react'

/**
 * Teklif formunda seçili paket. Paketler bölümündeki "Teklif alın" butonu burayı
 * değiştirir, iletişim formu da buradan okur.
 */
let selected = ''
const listeners = new Set<() => void>()

export const quoteStore = {
  get: () => selected,
  set(packageId: string) {
    selected = packageId
    listeners.forEach((listener) => listener())
  },
  subscribe(listener: () => void) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
}

export function useSelectedPackage() {
  return useSyncExternalStore(quoteStore.subscribe, quoteStore.get, () => '')
}
