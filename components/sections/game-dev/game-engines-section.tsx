import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const engines = [
  {
    title: 'UNREAL ENGINE',
    image: '/images/unreal.webp',
    url: 'https://www.unrealengine.com/',
    description:
      'For projects focused on visual depth and atmosphere, Unreal Engine delivers powerful rendering and physics systems. It enables realistic lighting, detailed environments, and immersive experiences such as VR and AR.',
  },
  {
    title: 'UNITY',
    image: '/images/unity.webp',
    url: 'https://unity.com/',
    description:
      'Unity is ideal for flexible development and multi-platform deployment. It allows fast prototyping and efficient workflows for both mobile titles and large productions.',
  },
]

export default function GameEnginesSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden border-y bg-white/3">
      {/* Background watermark */}
      <h1
        className="
          absolute 
          top-10 
          left-1/2 
          -translate-x-1/2 
          text-[40px] 
          xs:text-[60px]
          sm:text-[100px] 
          md:text-[140px] 
          font-bold 
          text-white/5 
          whitespace-nowrap 
          pointer-events-none 
          select-none
        "
        aria-hidden="true"
      >
        ENGINES
      </h1>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Game Engines We Work With
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          Every game begins with a strong technical foundation. Some projects require rapid prototyping
          and cross-platform compatibility, while others demand high-end visuals and complex effects.
          Our team selects the right engine to match each project’s needs.
        </p>
      </div>

      {/* Engines Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {engines.map((engine, idx) => (
          <div
            key={idx}
            className="
              group
              relative
              rounded-2xl
              border border-white/10
              bg-black/40
              overflow-hidden
              transition-all duration-300
              hover:border-white/20
              hover:-translate-y-1
              hover:bg-black/80
            "
          >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image
                src={engine.image}
                alt={engine.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            </div>

            {/* Card Content */}
            <div className="relative p-6 sm:p-8 flex flex-col min-h-[320px]">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight">
                {engine.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                {engine.description}
              </p>

              {/* Learn More Button – opens engine URL in a new tab */}
              <Link
                href={engine.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/btn
                  inline-flex items-center gap-1.5
                  text-primary
                  text-sm sm:text-base font-medium
                  transition-all duration-300
                  hover:gap-2
                  self-start
                "
              >
                Learn More
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Optional CTA (like other sections) – can be added if needed */}
      {/* Uncomment to add a "View All Technologies" button */}
      {/*
      <div className="relative z-10 flex justify-center mt-10 sm:mt-12">
        <Link href="/technologies">
          <button className="group flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/20 uppercase text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white">
            Explore All Tech
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
      */}
    </section>
  )
}