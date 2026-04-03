import Hero from '@/components/sections/home/hero'
import WhyChooseUs from '@/components/sections/home/why-choose-us'
import ServicesSection from '@/components/sections/home/service-section'
import PlatformsSection from '@/components/sections/home/platforms-section'
import GameEnginesSection from '@/components/sections/home/game-engines-section'
import ProjectsSection from '@/components/sections/home/projects-section'
import ContactSection from '@/components/sections/home/contact-section'

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
      {/* <BrandShowcase/>  */}
    </main>
  )
}