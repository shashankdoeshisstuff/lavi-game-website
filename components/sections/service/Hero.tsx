type HeroProps = {
  title: string;
  description: string;
};

export function Hero({ title, description }: HeroProps) {
  return (
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
          uppercase
        "
        aria-hidden="true"
      >
       {title}
      </h1>

      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}