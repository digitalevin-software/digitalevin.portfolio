import { HouseFrame } from '@/components/brand/HouseFrame'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { Process } from '@/components/sections/Process'
import { Packages } from '@/components/sections/Packages'
import { Testimonials } from '@/components/sections/Testimonials'
import { Team } from '@/components/sections/Team'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

export function HomePage() {
  return (
    <>
      {/* Hero ve projeler, logodaki evin içinde */}
      <Container className="pt-4 sm:pt-6">
        <HouseFrame>
          <Hero />
          <Projects />
        </HouseFrame>
      </Container>

      <Services />
      <WhyUs />
      <Process />
      <Packages />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
    </>
  )
}
