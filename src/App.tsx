import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Ticker } from '@/components/sections/Ticker'
import { VisualStory } from '@/components/sections/VisualStory'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { About } from '@/components/sections/About'
import { Team } from '@/components/sections/Team'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <VisualStory />
        <Services />
        <Projects />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
