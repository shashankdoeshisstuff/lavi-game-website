import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'GAME DEVELOPMENT',
    description:
      'We provide end-to-end game development services, from early concept and prototyping to soft launch and ongoing support. Our team handles design, art, animation, and high-quality development across multiple platforms.',
    image: '/images/service1.png'
  },
  {
    title: 'GAME ART & DESIGN',
    description:
      'Our artists and designers craft engaging worlds and memorable visual styles. We focus on building unique environments, characters, and visual elements that bring game ideas to life.',
    image: '/images/service2.png'
  },
  {
    title: 'GAME ANIMATION',
    description:
      'Animation brings characters and worlds into motion. We create fluid movements, responsive environments, and dynamic interactions that enhance gameplay and storytelling.',
    image: '/images/service3.png'
  },
  {
    title: 'QUALITY ASSURANCE',
    description:
      'Our QA team carefully tests every aspect of the game to ensure smooth performance across devices. Through continuous testing and improvements, we deliver a stable and polished experience.',
    image: '/images/service4.png'
  },
  {
    title: 'AAA GAME DEVELOPMENT & ART',
    description:
      'We collaborate on large-scale projects where quality and detail are essential. Our outsourcing team supports studios with world building, character design, and high-end visual production.',
    image: '/images/service5.png'
  },
  {
    title: 'VR DEVELOPMENT',
    description:
      'We design immersive virtual reality experiences that feel natural and interactive. By combining lighting, depth, and motion, we create engaging VR worlds for players to explore.',
    image: '/images/service6.png'
  }
]

export default function ServicesSection() {
  return (
    <section className="w-full text-white border-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
      {/* Heading */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          END-TO-END GAME
          <br className="hidden sm:block" />
          DEVELOPMENT
        </h2>

        <p className="text-gray-400 max-w-xl">
          From concept to soft launch, we help bring your game to life at every stage.
          Our experienced team of specialists ensures outstanding quality in every detail.
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

              {/* <Button
                variant="default"
                className="mt-4 w-fit transition rounded-none"
              >
                SEE MORE
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}