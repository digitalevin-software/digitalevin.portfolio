import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Koşullu className birleştirme; çakışan Tailwind sınıflarında sonuncusu kazanır. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** 1 → "01" */
export function pad2(n: number) {
  return String(n).padStart(2, '0')
}
