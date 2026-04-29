import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Saigais S Chand",
      role: "BIG BANK TAKE LITTLE BANK",
      text: "I highly recommend AXENET IT SERVICES for any of your app development needs. I'm a satisfied customer!",
      image: "/images/testimonials/1.webp",
    },
    {
      name: "Giuliano Maglieri",
      role: "SHAREVISION",
      text: "Professional, serious, precise, always available. Exceptional work. I will definitely continue to collaborate with Axenet!!",
      image: "/images/testimonials/2.webp",
    },
    {
      name: "Jerome Mattias",
      role: "THREEFOUR",
      text: "Great team to work with. Always listening and sharing their knowledge when needed. We are going into our 2nd project together, I have no worry about the future success!",
      image: "/images/testimonials/3.webp",
    },
    {
      name: "Alex B",
      role: "KIDSCUT",
      text: "I am very happy with Axenet's work for a multilingual native Android app. Communication is great with super fast response time. For future updates I will definitely work with them again. I can definitely recommend them!",
      image: "/images/testimonials/4.webp",
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">

      {/* Background Watermark */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[60px] sm:text-[120px] md:text-[180px] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none">
        TESTIMONIAL
      </h1>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          What Our Clients Say
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
          Real feedback from people who trust our work and value our services.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 grid gap-6 sm:grid-cols-2">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              rounded-2xl
              border border-white/10
              bg-black/40
              p-5 sm:p-6
              transition-all duration-300
              hover:bg-black/80
              hover:border-white/20
            "
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3 text-yellow-400">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">
              “{t.text}”
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <Image
                src={t.image}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-white text-xs sm:text-sm font-medium">
                  {t.name}
                </p>
                <p className="text-white/40 text-[10px] sm:text-xs">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center mt-10 sm:mt-12">
        <Link href="/reviews">
          <button
            className="
              group
              flex items-center gap-2
              px-5 py-2.5
              sm:px-6 sm:py-3
              rounded-full
              border border-white/20
              uppercase
              text-white
              text-xs sm:text-sm font-medium
              transition-all duration-300
              hover:bg-white hover:text-black
              hover:border-white
            "
          >
            View All Reviews
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>

    </section>
  )
}