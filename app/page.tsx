import Hero from '@/components/sections/home/hero'
import FeaturedGames from '@/components/sections/home/featured-games'
import AboutPreview from '@/components/sections/home/about-preview'
import Contact from '@/components/sections/home/contact'
import Mission from '@/components/sections/home/mission'
import BrandsSection from '@/components/sections/home/companies'
import ServicesShowcase from '@/components/sections/home/ServicesShowcase'

export default async function Home() {

  return (
    <main>
      <Hero />
      <FeaturedGames />
      <BrandsSection/>
      <ServicesShowcase/>
      <AboutPreview />
      <Mission/>
      <Contact />
      {/* <BrandShowcase/> */}
    </main>
  )
}