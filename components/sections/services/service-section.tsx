import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/services-backup" // adjust path as needed

export default function ServicesSection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <Badge variant="secondary" className="text-primary text-sm rounded-full whitespace-nowrap">
              Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-center sm:text-left">
              What we are offering
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col h-full rounded-2xl bg-neutral-800 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-neutral-800/50"
              >
                <Icon
                  className="w-12 h-12 sm:w-14 sm:h-14 text-primary mb-4 bg-neutral-500/20 p-2 rounded-2xl"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant="ghost"
                    className="w-fit justify-start px-0 text-primary rounded-full hover:text-primary/80 hover:bg-transparent group/btn"
                  >
                    {service.ctaText || "LEARN MORE"}
                    <ArrowUpRight
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}