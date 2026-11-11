import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { dark, toggle } = useTheme()
  const label = dark ? 'Açık temaya geç' : 'Koyu temaya geç'

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={label} title={label}>
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  )
}
