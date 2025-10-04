// components/sections/home/hero.tsx
import { Button } from '@/components/ui/button'
import { getHomePageContent } from '@/lib/getHomePageContent'
import HeroClient from './hero-client';

export default async function Hero() {
  const { hero } = await getHomePageContent();

  // Fallback if no videos are available
  if (hero.length === 0) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
        <div className="container text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Future of <span className="text-primary">Gaming</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90">
            Immerse yourself in worlds beyond imagination with our cutting-edge
            game development and revolutionary storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Explore Games
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Pass the hero videos to the client component
  return <HeroClient heroVideos={hero} />
}