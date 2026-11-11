import logo from '@/assets/digitalevin-logo.png'
import { site } from '@/config/site'

export function Header() {
  return (
    <header>
      <a className="brand" href="#" aria-label={`${site.name} ana sayfa`}>
        <span className="brand-symbol">
          <img src={logo} alt="" width={64} height={66} />
        </span>
        <span className="brand-word">
          digital<span>evin.</span>
        </span>
      </a>
      <nav aria-label="Ana menü">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
