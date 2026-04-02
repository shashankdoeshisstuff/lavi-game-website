'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'GAME DEVELOPMENT',
    description:
      'Kevuru is a game design studio offering a full spectrum of services, from concept and prototyping to soft launch and post-release support. Our specialists provide game design, art, animation, and top-tier development across all platforms.',
    image: '/images/service1.png'
  },
  {
    title: 'GAME ART & DESIGN',
    description:
      'Kevuru Games is a company looking for new ways to develop and display the most thrilling gaming worlds. We always go the extra mile to create exceptional game projects and colorful arts.',
    image: '/images/service2.png'
  },
  {
    title: 'GAME ANIMATION',
    description:
      'Animation is what turns art into life. We work on the way characters move, how environments react, and how motion supports the story to deliver a natural and immersive experience.',
    image: '/images/service3.png'
  },
  {
    title: 'QUALITY ASSURANCE',
    description:
      'Testing is part of everyday work. The team plays, observes, and fixes until the game runs the way it should across devices with a smooth experience.',
    image: '/images/service4.png'
  },
  {
    title: 'AAA GAME DEVELOPMENT & ART',
    description:
      'Our outsourcing team works on big projects where every detail matters. We help studios create full worlds, design characters, and shape the overall look and feel of a game.',
    image: '/images/service5.png'
  },
  {
    title: 'VR DEVELOPMENT',
    description:
      'We build VR worlds that feel close to real. The team experiments with light, depth, and motion to create immersive player experiences.',
    image: '/images/service6.png'
  }
]

export default function ServicesSection() {
  return (
    <section className="w-full text-white border-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
      {/* Heading */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          FULL-CYCLE GAME
          <br className="hidden sm:block" />
          DEVELOPMENT STUDIO
        </h2>

        <p className="text-gray-400 max-w-xl">
          From your idea to soft-launch, we support your project at any stage.
          Our team contains professionals of all profiles who deliver top quality work.
        </p>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative overflow-hidden transition-all duration-300 bg-transparent shadow-none rounded-none"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Left-side tint for text readability */}
              {/* Gradient: solid black on left → semi-transparent black → fully transparent on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            </div>

            {/* Content */}
            <CardContent className="relative z-10 p-6 sm:p-8 lg:p-10 max-w-xl flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>

              <Button
                variant="default"
                className="mt-4 w-fit transition rounded-none"
              >
                SEE MORE
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Platforms */}
      <div className="mt-20 text-center">
        <h4 className="text-cyan-400 text-sm tracking-widest mb-6">
          PLATFORMS WE WORK WITH
        </h4>

        <div className="flex justify-center items-center gap-8 opacity-70 text-2xl">
          <span>🎮</span>
          <span>🕹️</span>
          <span>💻</span>
          <span>📱</span>
          <span>🧠</span>
        </div>
      </div>
    </section>
  )
}