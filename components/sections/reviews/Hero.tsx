export function Hero() {
  return (
    <section className="relative w-full mt-12 py-16 sm:py-20 md:py-28 overflow-hidden">
      
      {/* ================= BACKGROUND WATERMARK TEXT ================= */}
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
        REVIEWS
      </h1>

      {/* ================= HEADER SECTION ================= */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          What Our Clients Say
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
          Honest feedback from our clients around the world. Discover how our work has helped businesses grow and succeed.
        </p>
      </div>

    </section>
  );
}