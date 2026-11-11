import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Geçici: Tailwind'in CSS sıfırlaması eski tasarımın (src/styles/legacy.css)
    // varsayılan boşluklarını bozmasın diye kapalı. Yeniden tasarımda açılacak.
    preflight: false,
  },
} satisfies Config
