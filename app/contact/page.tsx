import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const contactItems = [
    {
      title: "CALL US",
      description: "(+91) 876-5515-740",
      icon: Phone,
      href: "tel:+918765515740",
    },
    {
      title: "EMAIL US",
      description: "contact@axenetit.com",
      icon: Mail,
      href: "mailto:contact@axenetit.com",
    },
    {
      title: "VISIT OFFICE",
      description:
        "143/14 Kaiserbagh, Lucknow, Uttar Pradesh, India - 226018",
      icon: MapPin,
      href: "https://maps.google.com/?q=Kaiserbagh+Lucknow",
    },
    {
      title: "WORKING HOURS",
      description:
        "Mon–Fri: 9:00AM–8:30PM\nSat: 10:00AM–6:30PM\nSun: Closed",
      icon: Clock,
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Twitter, label: "X (Twitter)", href: "#" },
  ]

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* ================= HEADER WITH BACKGROUND WATERMARK ================= */}
        <div className="relative w-full mt-12 py-16 sm:py-20 md:py-28 overflow-hidden">
          {/* Background Watermark */}
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
              overflow-x-auto
              max-w-[90vw]
            "
            aria-hidden="true"
          >
            CONTACT US
          </h1>

          {/* Header Content */}
          <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
            <Badge
              variant="secondary"
              className="text-primary text-sm uppercase rounded-full mb-4"
            >
              Get In Touch
            </Badge>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Let's{" "}
              <span className="relative inline-block px-3">
                <span className="relative z-10 text-black">Connect</span>
                <span className="absolute inset-1 rotate-2 bg-primary"></span>
              </span>
            </h2>
            <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Reach out to discuss your project or just say hello. We're here to help.
            </p>
          </div>
        </div>

        {/* ================= CONTACT CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon

            return (
              <Link
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="
                  group
                  relative
                  flex
                  flex-col
                  h-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-sm
                  p-6
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-black/60
                  hover:-translate-y-1
                "
              >
                {/* Icon */}
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/30 w-fit mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </Link>
            )
          })}
        </div>

        {/* ================= MAP SECTION ================= */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=Kaiserbagh%20Lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-0"
            loading="lazy"
            title="Office Location Map"
          />
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="mt-12 text-center">
          <h4 className="text-white text-xl font-semibold mb-6 flex items-center justify-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full"></span>
            Follow Us
            <span className="w-1 h-5 bg-primary rounded-full"></span>
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <Link
                  key={idx}
                  href={social.href}
                  className="
                    group
                    flex items-center gap-3
                    px-5 py-3
                    rounded-full
                    border border-white/10
                    bg-white/5
                    text-white
                    transition-all duration-300
                    hover:bg-primary/10
                    hover:border-primary/30
                    hover:-translate-y-1
                  "
                >
                  <Icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                  <span className="text-sm font-medium">{social.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}