// app/services/components/WhyChooseUs.tsx
import { ArrowRight, Handshake, ShieldCheck, Rocket, Globe } from 'lucide-react'
import Link from "next/link"

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
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Background watermark */}
      <h1
        className="
          absolute 
          top-10 
          left-1/2 
          -translate-x-1/2 
          text-[40px] 
          xs:text-[60px]
          sm:text-[120px] 
          md:text-[180px] 
          font-bold 
          text-white/5 
          whitespace-nowrap 
          pointer-events-none 
          select-none
        "
        aria-hidden="true"
      >
        WHY AXENET
      </h1>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          What Makes Axenet a Leading
          <br className="hidden sm:block" />
          Game Development Partner
        </h2>
        <p className="text-white/60 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          Our team focuses on building engaging and high-quality gaming experiences for players around the world.
          With a multidisciplinary group of developers, artists, and technical specialists, we combine creativity,
          technology, and strategic thinking to bring innovative ideas to life.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div
              key={idx}
              className="
                group
                rounded-2xl
                border border-white/10
                bg-black/40
                p-5 sm:p-6
                transition-all duration-300
                hover:bg-black/80
                hover:border-white/20
                hover:-translate-y-1
                flex flex-col
              "
            >
              {/* Icon with primary color */}
              <div className="mb-4">
                <Icon
                  className="w-10 h-10 sm:w-12 sm:h-12 text-primary stroke-[1.5]"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-xs sm:text-sm font-bold tracking-wide mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Optional CTA – can be added if needed, matching other sections */}
      {/* Uncomment if you want a "Learn More" or "Contact Us" button */}
      {/*
      <div className="relative z-10 flex justify-center mt-10 sm:mt-12">
        <Link href="/contact">
          <button className="group flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/20 uppercase text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white">
            Partner With Us
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
      */}
    </section>
  )
}