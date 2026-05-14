import ContactSection from '@/components/contact-section'
import GamesShowcase from '@/components/sections/games/games'
import { Hero } from '@/components/sections/games/hero'


export default function GamesPage() {
  return (
    <main>
      <Hero/>
      <GamesShowcase/>
      <ContactSection/>
    </main>
  )
}