
export default function ValuesSection() {

  return (
    <section className="relative w-full overflow-hidden">
      {/* VALUES */}
      <div className="relative py-8 flex items-center justify-center overflow-hidden">

        {/* BIG BACKGROUND TEXT */}
        <h1 
          className="
            absolute 
            top-10 
            left-1/2 
            -translate-x-1/2 
            text-[50px] 
            xs:text-[70px]
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
          VALUES
        </h1>

        {/* CIRCLE CONTAINER */}
        <div className="relative w-[320px] h-[320px] rounded-full border flex items-center justify-center">

          {/* VALUE TAGS */}
          {[
            "Customer Support",
            "Passion",
            "Positive Experience",
            "Trustworthiness",
            "Customer Focus",
            "Long-Term Relationships",
            "Innovation",
            "Collaboration",
            "Personalization",
            "Reliability",
            "Quality",
          ].map((text, i) => {
            const positions = [
              "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg]",
              "top-6 right-0 translate-x-1/2 rotate-[18deg]",
              "top-20 left-0 -translate-x-1/2 rotate-[10deg]",
              "top-28 right-4 rotate-[-8deg]",
              "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[6deg]",
              "right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-[-10deg]",
              "bottom-20 left-6 rotate-[14deg]",
              "bottom-24 right-6 rotate-[-6deg]",
              "bottom-10 left-1/2 -translate-x-1/2 rotate-[8deg]",
              "bottom-4 right-10 rotate-[12deg]",
              "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-[-4deg]",
            ]

            return (
              <div
                key={i}
                className={`absolute ${positions[i]} bg-yellow-400 text-black text-xs px-4 py-2 rounded-full shadow-md whitespace-nowrap`}
              >
                ✦ {text}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}