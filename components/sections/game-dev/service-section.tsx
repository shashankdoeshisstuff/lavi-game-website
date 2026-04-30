import { ArrowRight, ArrowUpRight, BrainCircuit, Gamepad2, Globe, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We design and develop custom mobile application for Android and IOS platforms. Our mobile app developers have expertise to create mobile applications using Flutter, React, Native Android and IOS technologies.",
      icon: Smartphone,
      image: "/images/service1.png",
      slug: 'mobile-app',
    },
    {
      title: "GAME DEVELOPMENT",
      description:
        "Our game developers using advance technology / tools and develop visually attractive UI and responsive games that keeps the gamers engaged. We help our clients to turn their creative ideas into games by providing cost-effective solutions with quality.",
      icon: Gamepad2,
      image: "/images/service2.png",
      slug: 'pc-console-development',
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "We have rich and sharp proficiency and extensive experience in creating responsive and professional websites for all types of businesses. To stay with the latest web technology trends and concepts, we keep ourselves up to date with these trends and emerging technology concepts.",
      icon: Globe,
      image: "/images/service3.png",
      slug: 'web',
    },
    {
      title: "AI DEVELOPMENT",
      description:
        "We offer comprehensive AI development solutions, including machine learning, deep learning, natural language processing, and generative AI, to create intelligent systems that enhance automation, decision-making, and user experiences.",
      icon: BrainCircuit,
      image: "/images/service4.png",
      slug: 'ai',
    },
    {
      title: "GAME ART & DESIGN",
      description:
        "Our artists and designers craft engaging worlds and memorable visual styles. We focus on building unique environments, characters, and visual elements that bring game ideas to life.",
      icon: Gamepad2, // using gamepad as placeholder; you can change icon
      image: "/images/service5.png",
      slug: 'game-art-design',
    },
    {
      title: "VR DEVELOPMENT",
      description:
        "We design immersive virtual reality experiences that feel natural and interactive. By combining lighting, depth, and motion, we create engaging VR worlds for players to explore.",
      icon: Globe,
      image: "/images/service6.png",
      slug: 'vr-development',
    },
  ]

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
        SERVICES
      </h1>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          What We Are Offering
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
          Comprehensive solutions tailored to your business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, idx) => {
          const Icon = service.icon
          return (
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
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for readability (stronger on left) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative p-5 sm:p-6 flex flex-col min-h-[280px]">
                {/* Icon with yellow/orange accent */}
                <div className="mb-4">
                  <Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-primary stroke-[1.5] drop-shadow-md"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-base sm:text-lg font-bold mb-2 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Button (yellow accent) */}
                <Link href={`/services/${service.slug}`}>
                  <button className="
                    group/btn
                    flex items-center gap-1.5
                    text-primary
                    text-xs sm:text-sm font-medium
                    transition-all duration-300
                    hover:gap-2
                    self-start
                  ">
                    Learn More
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* View All Services CTA */}
      <div className="relative z-10 flex justify-center mt-10 sm:mt-12">
        <Link href="/services">
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
              text-xs
              sm:text-sm
              font-medium
              transition-all duration-300
              hover:bg-white hover:text-black
              hover:border-white
            "
          >
            View All Services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Link>
      </div>
    </section>
  )
}