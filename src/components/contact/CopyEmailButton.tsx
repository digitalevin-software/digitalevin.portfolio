import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { site } from '@/config/site'
import { Button } from '@/components/ui/button'

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
    } catch {
      // Pano erişimi yoksa (eski tarayıcı / izin) adres zaten sayfada yazılı.
    }
  }

  return (
    <>
      <Button variant="inverse-outline" size="sm" onClick={copy}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? 'Kopyalandı' : 'Kopyala'}
      </Button>
      <span role="status" className="sr-only">
        {copied ? 'E-posta adresi panoya kopyalandı' : ''}
      </span>
    </>
  )
}
