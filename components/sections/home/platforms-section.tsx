import {
  Gamepad2,
  Monitor,
  Smartphone,
  Globe,
  RectangleGoggles
} from 'lucide-react'

export default function PlatformsSection() {
  const platforms = [
    { name: 'Console', icon: Gamepad2 },
    { name: 'PC', icon: Monitor },
    { name: 'Mobile', icon: Smartphone },
    { name: 'VR', icon: RectangleGoggles },
    { name: 'Web', icon: Globe }
  ]

  return (
    <section className="w-full border-y border-white/10 text-white relative overflow-hidden bg-black/40">
      {/* Header with decorative lines */}
      <div className="flex items-center gap-6 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-white/10" />
        <div className="relative px-6 py-2.5 border border-cyan-400/40 text-cyan-400 text-xs sm:text-sm tracking-[0.2em] font-semibold bg-black/60 backdrop-blur-sm rounded-sm">
          PLATFORMS WE WORK WITH
          <div className="absolute inset-0 blur-md bg-cyan-400/5 -z-10 rounded-sm" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400/40 to-white/10" />
      </div>

      {/* Platforms grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-14">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 transition-all duration-300"
              >
                <div className="relative">
                  {/* Hover glow effect (pure CSS, works without JS) */}
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/20 blur-xl transition duration-300 rounded-full" />
                  <Icon className="w-14 h-14 sm:w-18 sm:h-18 text-white/50 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-extrabold sm:text-xs text-white/40 group-hover:text-white/80 transition-colors duration-300 uppercase tracking-wider">
                  {platform.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}