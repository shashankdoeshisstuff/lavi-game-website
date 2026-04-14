import { Badge } from "@/components/ui/badge"
import { Rocket, Network, Atom, HeartHandshake, MessagesSquare, SquareUserRound } from "lucide-react"

export default function WhySection() {


  const features = [
    {
      title: "Proven Track Record",
      desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
      icon: Rocket,
    },
    {
      title: "Tailored Solutions",
      desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
      icon: Network,
    },
    {
      title: "Client-Centric Focus",
      desc: "Your success is our priority. We prioritize understanding your business goals.",
      icon: SquareUserRound,
    },
    {
      title: "Transparent Communication",
      desc: "We believe in open and honest communication every step of the way.",
      icon: MessagesSquare,
    },
    {
      title: "Dedicated Support",
      desc: "Your success is our priority, and we're here to support you every step of the way.",
      icon: HeartHandshake,
    },
    {
      title: "Expertise Across Industries",
      desc: "Our team has extensive experience working across various industries.",
      icon: Atom,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="uppercase text-primary mb-4">WHY CHOOSE US</Badge>
        <h2 className="text-3xl sm:text-4xl font-semibold">Why we are your best choice</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-10">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="
                  group
                  rounded-4xl
                  border
                  bg-black/30
                  p-4 sm:p-6
                  text-center
                  transition-all duration-300
                  hover:bg-neutral-500/5
                "
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}