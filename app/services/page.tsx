// app/services/page.tsx
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesGrid from '@/components/sections/services/ServicesGrid'
import ServicesCTA from '@/components/sections/services/ServicesCTA'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  )
}