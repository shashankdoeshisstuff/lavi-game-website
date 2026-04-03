// app/services/components/WhyChooseUs.tsx
import { Card, CardContent } from '@/components/ui/card'
import {
  Handshake,
  ShieldCheck,
  Rocket,
  Globe
} from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Handshake,
      title: 'COMMITTED LONG-TERM PARTNERSHIPS',
      description:
        'With years of experience in game development and art production, we focus on building long-term relationships with our partners. Our collaborative approach ensures consistency, reliability, and successful outcomes across multiple projects.'
    },
    {
      icon: ShieldCheck,
      title: 'CUSTOMIZED FULL-CYCLE GAME DEVELOPMENT',
      description:
        'Every project is supported by a carefully assembled team of specialists with expertise in the required genre, platform, and visual style. From concept and prototyping to development and release, we adapt our workflow to meet your project’s unique needs.'
    },
    {
      icon: Rocket,
      title: 'ADHERENCE TO BEST SECURITY PRACTICES',
      description:
        'We prioritize the protection of your data, systems, and infrastructure throughout the development process. Our teams follow strict security protocols and continuously improve internal practices to align with modern industry standards.'
    },
    {
      icon: Globe,
      title: 'TRUSTED DEVELOPMENT PARTNER',
      description:
        'Our studio collaborates with global clients and organizations, delivering reliable development services and creative solutions that support successful product launches and long-term growth.'
    }
  ]

  return (
    <section className="w-full h-full container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20 border-x">
      {/* Top Section: Heading + Description */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-20">
        {/* Left Heading - responsive text and forced line break on larger screens only */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
          WHAT MAKES AXENET A LEADING
          <br className="hidden sm:block" /> 
          GAME DEVELOPMENT PARTNER
        </h2>

        {/* Right Description - full width on mobile, constrained on larger screens */}
        <p className="text-gray-400 text-base md:text-md leading-relaxed max-w-xl">
          Our team focuses on building engaging and high-quality gaming experiences for players around the world. 
          With a multidisciplinary group of developers, artists, and technical specialists, we combine creativity, 
          technology, and strategic thinking to bring innovative ideas to life.
        </p>
      </div>

      {/* Feature Cards Grid - responsive columns and spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <Card
              key={index}
              className="bg-gradient-to-b from-pink-500/5 to-pink-500/10 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 rounded-none group"
            >
              <CardContent className="p-6 md:p-8 flex flex-col gap-6">
                {/* Icon with hover effect */}
                <div className="w-12 h-12 flex items-center justify-center rounded-none bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-pink-500" />
                </div>

                {/* Title - responsive text size */}
                <h3 className="text-xs sm:text-sm font-bold tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}