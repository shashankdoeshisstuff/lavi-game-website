// components/sections/home/hero.tsx
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Clients from './clients-section'
import BackgroundVideos from './background-videos'

const videoUrls = [
  'https://youtu.be/j2lZM8Vip54',
  // 'https://youtu.be/FCMEyqjZg08',
  // 'https://youtu.be/5_pzIzQSBL4',
]

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background videos – client component handles rotation */}
      <BackgroundVideos videoUrls={videoUrls} />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="max-w-xl text-left text-white">
            <h1 className="text-4xl font-bold uppercase leading-tight md:text-6xl lg:text-7xl">
              Crafting the <br />
              <span className="text-white">Next Level of Play</span>
            </h1>

            <p className="mb-8 text-md text-white/80 md:text-lg">
              Where creativity meets technology — we turn bold ideas into
              captivating game worlds through innovative design, art, and
              development.
            </p>

            <Link href="#contact" passHref>
              <Button
                size="lg"
                className="bg-primary uppercase hover:bg-primary/90 rounded-none"
              >
                Contact Us <ArrowUpRight/>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Clients Section – can be server if it has no client deps */}
      <div className="absolute bottom-0 left-0 z-20 w-full">
        <Clients />
      </div>
    </section>
  )
}