import Hero from '@/components/sections/home/hero'
import WhyChooseUs from '@/components/sections/home/specialities-section'
import ServicesSection from '@/components/sections/home/service-section'
import ProjectsSection from '@/components/sections/home/projects-section'
import ContactSection from '@/components/sections/home/contact-section'
import Clients from '@/components/sections/home/clients-section'
import StatsShowcaseSection from '@/components/sections/home/StatsShowcaseSection'
import TestimonialsSection from '@/components/sections/home/testimonials-section'

export default async function Home() {

  return (
    <main>
      <Hero />
      <ServicesSection/>
      <Clients/>
      <StatsShowcaseSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <WhyChooseUs/>
      <ContactSection />
    </main>
  )
}