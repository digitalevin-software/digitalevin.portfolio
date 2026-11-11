import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Renkler src/styles/index.css içindeki HSL değişkenlerinden gelir (shadcn/ui düzeni).
const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Koyu mod <html class="dark"> ile açılır (index.html'deki betik + tema butonu)
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: token('background'),
        foreground: token('foreground'),
        card: token('card'),
        border: token('border'),
        ring: token('ring'),
        primary: {
          DEFAULT: token('primary'),
          foreground: token('primary-foreground'),
        },
        accent: token('accent'),
        secondary: {
          DEFAULT: token('secondary'),
          foreground: token('secondary-foreground'),
        },
        muted: {
          DEFAULT: token('muted'),
          foreground: token('muted-foreground'),
        },
        brand: {
          light: token('brand-light'),
          dark: token('brand-dark'),
        },
        status: {
          live: token('status-live'),
          progress: token('status-progress'),
          concept: token('status-concept'),
        },
        tone: {
          blue: token('tone-blue'),
          green: token('tone-green'),
          amber: token('tone-amber'),
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans Variable"', ...defaultTheme.fontFamily.sans],
        display: ['"Bricolage Grotesque Variable"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        page: '88rem',
      },
    },
  },
} satisfies Config
