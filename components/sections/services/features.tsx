import { Badge } from '@/components/ui/badge';
import { FeaturesItem } from '@/lib/services';
import {
  Smartphone,
  PenTool,
  Monitor,
  Globe,
  Database,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

interface FeaturesProps {
  items: FeaturesItem[];
}

export default function Features({ items }: FeaturesProps) {


  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <Badge variant="secondary" className="mb-4 uppercase text-primary">
          Service Details
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          What We Do
        </h2>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {items.map((feature, idx) => {
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
              <div className="mb-4">
                <Icon
                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary stroke-[1.5]"
                />
              </div>
              <h3 className="text-white text-sm sm:text-base font-bold mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Closing paragraph / CTA */}
      <div className="relative z-10 mt-12 sm:mt-16 text-center px-4 max-w-3xl mx-auto">
        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
          Our development service is designed to offer businesses a competitive edge by delivering
          innovative, high-quality, and scalable services that enhance user engagement and drive growth.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <button
              className="
                group
                flex items-center gap-2
                mx-auto
                px-5 py-2.5 sm:px-6 sm:py-3
                rounded-full
                border border-white/20
                uppercase
                text-white
                text-xs sm:text-sm
                font-medium
                transition-all duration-300
                hover:bg-white hover:text-black
                hover:border-white
              "
            >
              Start Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}