import { useId, useState, type FormEvent } from 'react'
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { mailto, site } from '@/config/site'
import { packages } from '@/data/packages'
import { quoteStore, useSelectedPackage } from '@/lib/quote-store'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const NEEDS = ['Web sitesi', 'E-ticaret', 'Özel yazılım / ERP', 'Randevu sistemi', 'QR menü', 'Sosyal medya']

type Status = 'idle' | 'sending' | 'sent' | 'mail' | 'error'

const fieldCls =
  'mt-1.5 block w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-[0.9375rem] text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring'
const labelCls = 'text-sm font-medium'

function Optional() {
  return <span className="font-normal text-muted-foreground"> (isteğe bağlı)</span>
}

/**
 * Teklif formu. site.formAccessKey doluysa mesaj web3forms üzerinden doğrudan e-postanıza gelir;
 * boşsa ziyaretçinin e-posta uygulaması mesaj hazır şekilde açılır.
 */
export function ContactForm() {
  const id = useId()
  const selectedPackage = useSelectedPackage()
  const [needs, setNeeds] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const direct = Boolean(site.formAccessKey)

  function toggleNeed(need: string) {
    setNeeds((current) => (current.includes(need) ? current.filter((n) => n !== need) : [...current, need]))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return // spam botu

    const value = (key: string) => String(data.get(key) ?? '').trim()
    const name = value('name')
    const fields: [string, string][] = [
      ['Ad soyad', name],
      ['E-posta', value('email')],
      ['Telefon', value('phone')],
      ['İşletme', value('business')],
      ['İhtiyaç', needs.join(', ')],
      ['Paket', packages.find((p) => p.id === selectedPackage)?.name ?? ''],
      ['Mesaj', value('message')],
    ]
    const filled = fields.filter(([, v]) => v)
    const subject = `Teklif talebi: ${name}`

    if (!direct) {
      window.location.href = mailto(subject, filled.map(([k, v]) => `${k}: ${v}`).join('\n'))
      setStatus('mail')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject,
          from_name: `${site.name} web sitesi`,
          replyto: value('email'),
          ...Object.fromEntries(filled),
        }),
      })
      const result = (await response.json()) as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Form gönderilemedi')
      form.reset()
      setNeeds([])
      quoteStore.set('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <CircleCheck className="size-10 text-status-live" aria-hidden="true" />
        <p className="font-display text-2xl font-semibold tracking-[-0.02em]">Mesajınız bize ulaştı.</p>
        <p className="text-muted-foreground">En kısa sürede e-postayla dönüş yapacağız.</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Yeni mesaj yaz
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelCls}>
            Ad soyad
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={fieldCls} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelCls}>
            E-posta
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={fieldCls} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelCls}>
            Telefon
            <Optional />
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={fieldCls} />
        </div>
        <div>
          <label htmlFor={`${id}-business`} className={labelCls}>
            İşletme adı
            <Optional />
          </label>
          <input id={`${id}-business`} name="business" autoComplete="organization" className={fieldCls} />
        </div>
      </div>

      <fieldset>
        <legend className={labelCls}>
          Neye ihtiyacınız var?
          <Optional />
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {NEEDS.map((need) => {
            const on = needs.includes(need)
            return (
              <button
                key={need}
                type="button"
                aria-pressed={on}
                onClick={() => toggleNeed(need)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  on
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground',
                )}
              >
                {need}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${id}-package`} className={labelCls}>
          Paket
          <Optional />
        </label>
        <select
          id={`${id}-package`}
          name="package"
          value={selectedPackage}
          onChange={(e) => quoteStore.set(e.target.value)}
          className={fieldCls}
        >
          <option value="">Henüz karar vermedim</option>
          {packages.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelCls}>
          Mesajınız
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={4}
          placeholder="İşletmenizi ve neye ihtiyaç duyduğunuzu birkaç cümleyle anlatın."
          className={cn(fieldCls, 'resize-y')}
        />
      </div>

      {/* Bot tuzağı: insanlar görmez, botlar doldurur */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 p-3.5 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          Mesaj gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin ya da doğrudan{' '}
          <a href={mailto()} className="font-medium underline underline-offset-2">
            {site.email}
          </a>{' '}
          adresine yazın.
        </p>
      )}
      {status === 'mail' && (
        <p role="status" className="rounded-xl bg-secondary p-3.5 text-sm text-secondary-foreground">
          E-posta uygulamanız mesaj hazır şekilde açıldı; göndermeyi unutmayın. Açılmadıysa{' '}
          <a href={mailto()} className="font-medium underline underline-offset-2">
            {site.email}
          </a>{' '}
          adresine yazabilirsiniz.
        </p>
      )}

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</p>
        <Button type="submit" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? (
            <>
              <LoaderCircle className="animate-spin" aria-hidden="true" />
              Gönderiliyor
            </>
          ) : (
            <>
              <Send aria-hidden="true" />
              {direct ? 'Gönder' : 'E-posta ile gönder'}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
