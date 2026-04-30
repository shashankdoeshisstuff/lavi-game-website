import { Star } from "lucide-react"
import Image from "next/image"

export default function ReviewsSection() {
  const testimonials = [
    {
      name: "Saigais S Chand",
      company: "BIG BANK TAKE LITTLE BANK",
      address: "",
      text: "I highly recommend AXENET IT SERVICES for any of your app development needs. I'm a satisfied customer!",
      image: "/images/testimonials/1.webp",
    },
    {
      name: "Giuliano Maglieri",
      company: "SHAREVISION",
      address: "",
      text: "Professional, serious, precise, always available. Exceptional work. I will definitely continue to collaborate with Axenet!!",
      image: "/images/testimonials/2.webp",
    },
    {
      name: "Jerome Mattias",
      company: "THREEFOUR",
      address: "",
      text: "Great team to work with. Always listening and sharing their knowledge when needed. We are going into our 2nd project together, I have no worry about the future success!",
      image: "/images/testimonials/3.webp",
    },
    {
      name: "Alex B",
      company: "KIDSCUT",
      address: "",
      text: "I am very happy with Axenet's work for a multilingual native Android app. Communication is great with super fast response time. For future updates I will definitely work with them again. I can definitely recommend them!",
      image: "/images/testimonials/4.webp",
    },
    {
      name: "David Reynolds",
      company: "TECH INNOVATIONS LTD.",
      address: "",
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      image: "/images/testimonials/5.webp", // no image available
    },
    {
      name: "David Rodriguez",
      company: "THOMPSON & CO. REAL ESTATE",
      address: "",
      text: "I can't speak highly enough of Bright Horizon Marketing. Their strategic approach to SEO and digital marketing has been instrumental in our company's success. They took the time to understand our unique needs and crafted a tailored strategy that has consistently driven results. Thanks to their efforts, we've seen a substantial increase in leads and conversions. Bright Horizon Marketing is the real deal, and I wouldn't hesitate to recommend them to anyone in need of digital marketing expertise.",
      image: "/images/testimonials/6.webp",
    },
    {
      name: "Ryan Martinez",
      company: "COOPER'S CAR REPAIR SHOP",
      address: "",
      text: "Bright Horizon Marketing has been an invaluable partner for our auto repair business. Their expertise in SEO and online marketing has helped us stay ahead of the competition and attract more customers than ever before. From optimizing our website to managing our social media presence, their team's attention to detail and commitment to excellence shine through in everything they do. Thanks to Bright Horizon Marketing, our business has seen significant growth, and I can't recommend them enough to others in need of digital marketing services.",
      image: "/images/testimonials/7.webp",
    },
    {
      name: "S. Thompson",
      company: "TURNER'S TECH SOLUTIONS",
      address: "",
      text: "Bright Horizon Marketing has been an invaluable asset to our tech company. Their deep understanding of SEO and digital marketing has helped us reach our target audience and drive conversions. Their team's proactive approach and attention to detail have made a significant impact on our online visibility and brand awareness. Thanks to Bright Horizon Marketing, our company has experienced steady growth, and I would highly recommend their services to anyone looking to expand their online presence.",
      image: "/images/testimonials/8.webp",
    },
    {
      name: "William Thompson",
      company: "",
      address: "ATLANTA, GEORGIA",
      text: "From the moment I contacted them for a consultation, their team exhibited professionalism and a commitment to excellence. They listened attentively to my ideas and preferences, offering valuable insights and creative solutions every step of the way. The result is a beautifully designed landscape that perfectly complements my home and exceeds my expectations. I'm thrilled with the outcome and grateful for GreenScape's dedication to bringing my vision to life.",
      image: "/images/testimonials/9.webp",
    },
    {
      name: "Benjamin Davis",
      company: "Bennett's Bakery",
      address: "",
      text: "Bright Horizon Marketing has been an invaluable partner for our bakery. Their team's expertise in SEO and online marketing has helped us stand out in a competitive market. From optimizing our website to managing our social media presence, their strategic approach has delivered impressive results. Thanks to their efforts, we've seen a significant increase in online orders and customer engagement. I couldn't be happier with the results, and I highly recommend Bright Horizon Marketing to anyone looking to grow their business online.",
      image: "/images/testimonials/10.webp",
    },
    {
      name: "Christopher Anderson",
      company: "PATEL & CO. LAW FIRM",
      address: "",
      text: "As a law firm, establishing a strong online presence is essential, and Bright Horizon Marketing has been instrumental in helping us achieve that goal. Their team's expertise in SEO and online marketing has significantly increased our website traffic and client inquiries. From keyword research to content optimization, their strategic approach has delivered tangible results. Bright Horizon Marketing is a trusted partner, and I highly recommend their services to any business looking to grow online.",
      image: "",
    },
    {
      name: "S. Thompson",
      company: "RAMIREZ FITNESS STUDIO",
      address: "",
      text: "Bright Horizon Marketing has been a game-changer for our fitness studio. Their expertise in SEO and digital marketing has helped us attract new clients and grow our business. Their team's strategic approach to keyword research and content optimization has resulted in a noticeable increase in website traffic and inquiries. I'm incredibly impressed with their professionalism and dedication to our success. I highly recommend Bright Horizon Marketing to any business looking to enhance their online presence.",
      image: "",
    },
    {
      name: "S. Thompson",
      company: "CARTER'S CAFE",
      address: "",
      text: "Bright Horizon Marketing has been instrumental in helping our cafe thrive in a competitive market. Their strategic approach to SEO and digital marketing has resulted in a noticeable increase in our online visibility and customer engagement. From optimizing our website to launching targeted advertising campaigns, their team's expertise has exceeded our expectations. Bright Horizon Marketing truly cares about the success of their clients, and I highly recommend their services to any business looking to boost their online presence.",
      image: "",
    },
  ]

  return (
    <section className="relative w-full py-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

            {/* Review text */}
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">
              “{t.text}”
            </p>

            {/* User info with optional image, company, address */}
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                {/* Profile image - only shown if image prop is provided and not empty */}
                {t.image && t.image.trim() !== "" && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div>
                  {/* Name - always shown */}
                  <p className="text-white text-xs sm:text-sm font-medium">
                    {t.name}
                  </p>

                  {/* Company name - optional */}
                  {t.company && t.company.trim() !== "" && (
                    <p className="text-white/50 text-[10px] sm:text-xs">
                      {t.company}
                    </p>
                  )}

                  {/* Address - optional */}
                  {t.address && t.address.trim() !== "" && (
                    <p className="text-white/40 text-[10px] sm:text-xs">
                      {t.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}