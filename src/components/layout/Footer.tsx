import logo from '@/assets/digitalevin-logo.png'
import { site } from '@/config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <span className="footer-signature">
        <span className="footer-symbol">
          <img src={logo} alt={`${site.name} logosu`} width={40} height={41} loading="lazy" />
        </span>
        <span>
          © {year} {site.name} · Özenle yapıldı.
        </span>
      </span>
      <span>İstanbul'dan, internetin bir köşesine.</span>
      <a href="#">Yukarı ↑</a>
    </footer>
  )
}
