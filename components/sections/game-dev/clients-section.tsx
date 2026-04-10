// components/sections/home/clients-section.tsx
import Image from "next/image"

export default function Clients() {
  const logos = [
    { src: "/logos/unity.png", alt: "Unity" },
    { src: "/logos/unreal.png", alt: "Unreal Engine" },
    { src: "/logos/epic.png", alt: "Epic Games" },
    { src: "/logos/ubisoft.png", alt: "Ubisoft" },
    { src: "/logos/ea.png", alt: "Electronic Arts" },
    { src: "/logos/riot.png", alt: "Riot Games" },
  ]

  return (
    <section className="w-full border-y bg-background py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade gradients */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling track - inline style for animation, no Tailwind animate-* */}
          <div
            className="flex gap-8 md:gap-12 w-max"
            style={{
              animation: "infinite-scroll 20s linear infinite",
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex items-center justify-center min-w-[100px] md:min-w-[120px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={20}
                  className="object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}