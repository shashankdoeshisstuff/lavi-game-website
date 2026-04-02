import Hero from '@/components/sections/home/hero'
import FeaturedGames from '@/components/sections/home/featured-games'
import AboutPreview from '@/components/sections/home/about-preview'
import Contact from '@/components/sections/home/contact'
import Mission from '@/components/sections/home/mission'
import BrandsSection from '@/components/sections/home/brands-section'
import ServicesShowcase from '@/components/sections/home/ServicesShowcase'
import WhyChooseUs from '@/components/sections/home/whyChooseUs'
import ServicesSection from '@/components/sections/home/service-section'

export default async function Home() {

  return (
    <main>
      <Hero />
      <WhyChooseUs/>
      <ServicesSection/>
      <FeaturedGames />
      <BrandsSection/>
      <ServicesShowcase/>
      <AboutPreview />
      <Mission/>
      <Contact />
      {/* <BrandShowcase/>  */}
    </main>
  )
}