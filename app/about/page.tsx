// app/about/page.tsx
import AboutHero from '@/components/sections/about/AboutHero'
import AboutStats from '@/components/sections/about/AboutStats'
import MissionVision from '@/components/sections/about/MissionVision'
import OurHistory from '@/components/sections/about/OurHistory'
import ProcessSection from '@/components/sections/about/ProcessSection'
import ValuesSection from '@/components/sections/about/ValuesSection'
import AboutCTA from '@/components/sections/about/AboutCTA'

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent">
      <AboutHero />
      <AboutStats />
      <MissionVision />
      <OurHistory />
      {/* <TimelineSection /> */}
      <ProcessSection />
      <ValuesSection />
      {/* <TeamSection /> */}
      {/* <CareersSection /> */}
      <AboutCTA />
    </main>
  )
}