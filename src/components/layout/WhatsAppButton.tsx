import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/config/site'

/** Sağ altta sabit WhatsApp butonu. site.whatsapp boşsa görünmez. */
export function WhatsAppButton() {
  const href = whatsappLink()
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-[#0E7A62] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(8,70,55,0.7)] transition-colors hover:bg-[#0B6852] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      WhatsApp
    </a>
  )
}
