import Hero from '@/components/sections/game-dev/hero'
import WhyChooseUs from '@/components/sections/game-dev/why-choose-us'
import ServicesSection from '@/components/sections/game-dev/service-section'
import PlatformsSection from '@/components/sections/game-dev/platforms-section'
import GameEnginesSection from '@/components/sections/game-dev/game-engines-section'
import ProjectsSection from '@/components/sections/game-dev/projects-section'
import ContactSection from '@/components/contact-section'

export default async function Home() {

  return (
    <main>
      <Hero />
      <WhyChooseUs/>
      <ServicesSection/>
      <PlatformsSection/>
      <GameEnginesSection/>
      <ProjectsSection/>
      <ContactSection />
    </main>
  )
}