import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import '@fontsource-variable/instrument-sans'
import { App } from './App'
import { basename } from './lib/basename'
import './styles/index.css'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter basename={basename || undefined}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Yayında sayfalar derlemede HTML olarak üretilir (scripts/prerender.mjs): onları "canlandır".
// Geliştirme sunucusunda kök boş gelir: sıfırdan çiz.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
