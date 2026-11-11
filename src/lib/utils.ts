import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Koşullu className birleştirme; çakışan Tailwind sınıflarında sonuncusu kazanır. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const numberWords = ['bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on']

/** 3 → "üç" (1–10 arası), diğerleri rakamla. */
export function numberWord(n: number) {
  return numberWords[n - 1] ?? String(n)
}

/** Bağlantıdan alan adı: "https://mokapla.digitalevin.com/" → "mokapla.digitalevin.com" */
export function hostOf(url?: string) {
  if (!url) return null
  try {
    return new URL(url).hostname
  } catch {
    return null
  }
}

/** "Ömer Ayık" → "ÖA" */
export function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toLocaleUpperCase('tr-TR')
}
