import { Hero } from '@/components/sections/services/Hero'
import ServicesSection from '@/components/sections/services/service-section'
import WhySection from '@/components/sections/services/WhySection'
import ContactSection from '@/components/contact-section'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <ServicesSection/>
      <WhySection/>
      <ContactSection/>
    </main>
  )
}