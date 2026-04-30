import {
  Gamepad2,
  Monitor,
  Smartphone,
  Globe,
  RectangleGoggles
} from 'lucide-react'

export default function PlatformsSection() {
  const platforms = [
    {
      name: 'Console',
      icon: Gamepad2,
      details: 'We develop high-performance games for PlayStation, Xbox, and Nintendo Switch. Our expertise includes controller optimization, console-specific SDKs, and achieving stable 60/120 FPS.'
    },
    {
      name: 'PC',
      icon: Monitor,
      details: 'From indie to AAA, we build scalable PC games that support wide hardware compatibility, ultra-wide monitors, ray tracing, and modding capabilities.'
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      details: 'Native and cross-platform mobile games (iOS/Android) with touch controls, AR integration, and performance tuning for diverse devices.'
    },
    {
      name: 'VR',
      icon: RectangleGoggles,
      details: 'Immersive VR experiences for Oculus, HTC Vive, and PS VR2. We specialize in low-latency rendering, motion tracking, and comfortable UX design.'
    },
    {
      name: 'Web',
      icon: Globe,
      details: 'WebGL and HTML5 games playable directly in browsers. Instant access, cross-platform, and optimised for low-end devices.'
    }
  ]

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
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
        PLATFORMS
      </h1>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Platforms We Work With
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
          Hover over any platform to see how we develop for it.
        </p>
      </div>

      {/* Platforms – no outer container, just icons with popups */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 md:gap-20">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <div
                key={index}
                className="relative group flex flex-col items-center gap-3"
              >
                {/* Icon with hover scale + glow */}
                <div className="relative">
                  {/* Animated glow background */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon
                    className="
                      w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32
                      text-white/70 
                      transition-all duration-300
                      group-hover:text-primary group-hover:scale-110
                      drop-shadow-lg
                      cursor-pointer
                    "
                    strokeWidth={1.2}
                  />
                </div>
                <span className="
                  text-xs sm:text-sm 
                  font-bold tracking-wider 
                  text-white/50 
                  uppercase
                  group-hover:text-white/80
                  transition-colors
                ">
                  {platform.name}
                </span>

                {/* Popup on hover – appears above the icon */}
                <div className="
                  absolute 
                  bottom-full 
                  left-1/2 
                  -translate-x-1/2 
                  mb-4
                  w-64
                  sm:w-72
                  p-4
                  rounded-xl
                  bg-black/90
                  backdrop-blur-md
                  border border-white/20
                  text-white
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  opacity-0 
                  invisible
                  group-hover:opacity-100 
                  group-hover:visible
                  transition-all 
                  duration-300
                  pointer-events-none
                  z-20
                  shadow-2xl
                ">
                  <h4 className="font-bold text-primary mb-2 text-sm">
                    {platform.name} Game Development
                  </h4>
                  <p className="text-white/80">
                    {platform.details}
                  </p>
                  {/* Small arrow pointer */}
                  <div className="
                    absolute 
                    left-1/2 
                    -translate-x-1/2 
                    -bottom-1.5
                    w-3 
                    h-3 
                    bg-black/90
                    border-r border-b border-white/20
                    rotate-45
                  " />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}