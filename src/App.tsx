import { LazyMotion, MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RouteEffects } from '@/components/layout/RouteEffects'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { HomePage } from '@/pages/HomePage'
import { ProjectPage } from '@/pages/ProjectPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

// Animasyon motoru ayrı dosyada; ilk açılışta indirilmez.
const loadMotionFeatures = () => import('@/lib/motion-features').then((mod) => mod.default)

/**
 * Uygulamanın kabuğu. Router dışarıdan verilir: tarayıcıda BrowserRouter (main.tsx),
 * derlemede StaticRouter (entry-server.tsx).
 */
export function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      {/* reducedMotion="user": işletim sisteminde "hareketi azalt" açıksa animasyonlar kapanır. */}
      <MotionConfig reducedMotion="user">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          İçeriğe geç
        </a>

        <Header />

        <main id="icerik">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeler/:id" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <RouteEffects />
      </MotionConfig>
    </LazyMotion>
  )
}
