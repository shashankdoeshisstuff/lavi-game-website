'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

const projects = [
  {
    title: 'Cyber Revolution',
    description: [
      'A futuristic open-world RPG set in a cyberpunk metropolis where your choices shape the destiny of the city.',
    ],
    image: '/images/service4.png',
    href: '/games/cyber-revolution',
  },
  {
    title: 'Ancient Realms',
    description: [
      'Epic fantasy adventure exploring mystical lands filled with magic, legendary creatures, and ancient secrets.',
    ],
    image: '/images/service5.png',
    href: '/games/ancient-realms',
  },
  {
    title: 'Neo Racing X',
    description: [
      'Future racing with hyper-realistic physics, dynamic weather, and fully customizable vehicles.',
    ],
    image: '/images/service1.png',
    href: '/games/neo-racing',
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(activeIndex);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const scrollToCard = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollLeft =
      container.scrollLeft +
      (cardRect.left - containerRect.left) -
      containerRect.width / 2 +
      cardRect.width / 2;

    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior: 'smooth',
    });
  }, []);

  const updateActiveIndexOnScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = activeIndexRef.current;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      }
    });

    if (closestIndex !== activeIndexRef.current) {
      setActiveIndex(closestIndex);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      updateActiveIndexOnScroll();
    }, 100);
  }, [updateActiveIndexOnScroll]);

  const handleSetActive = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
      scrollToCard(index);
    },
    [activeIndex, scrollToCard]
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    scrollToCard(activeIndex);
    const handleResize = () => scrollToCard(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, scrollToCard]);

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Background watermark */}
      <h1
        className="
          absolute 
          top-10 
          left-1/2 
          -translate-x-1/2 
          text-[40px] 
          xs:text-[60px]
          sm:text-[100px] 
          md:text-[140px] 
          font-bold 
          text-white/5 
          whitespace-nowrap 
          pointer-events-none 
          select-none
        "
        aria-hidden="true"
      >
        PROJECTS
      </h1>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Our Top-Rated Projects
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
          Our game development studio has successfully handled projects from initial concept art to full-scale production.
          We emphasize solid game design, high-quality art, and thorough QA.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        {/* Description Panel – sticky on large screens */}
        <div className="flex flex-col gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm lg:sticky lg:top-24 transition-all duration-300 hover:bg-black/60 hover:border-white/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {projects[activeIndex].title}
          </h3>
          <ul className="flex flex-col gap-3 text-white/70">
            {projects[activeIndex].description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={projects[activeIndex].href}
          >
            <button className="
                mt-8
                group
                flex items-center gap-2
                px-6 py-3
                rounded-full
                border border-white/20
                uppercase
                text-white
                text-sm
                transition-all duration-300
                hover:bg-white hover:text-black
              ">
                VIEW PROJECT
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
          </Link>
        </div>

        {/* Carousel Section */}
        <div className="relative lg:col-span-3">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth p-2 sm:p-4 touch-pan-x"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style>{`
              .snap-x::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex gap-4 sm:gap-6 px-2">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => handleSetActive(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSetActive(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} project`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  className={`
                    relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-out
                    w-[240px] sm:w-[280px] md:w-[300px] lg:w-[280px] xl:w-[320px]
                    h-[360px] sm:h-[400px] md:h-[420px] lg:h-[400px] xl:h-[440px]
                    snap-center overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-black/40
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black
                    ${
                      activeIndex === index
                        ? 'ring-4 ring-primary shadow-2xl shadow-primary/30 z-10'
                        : 'opacity-60 hover:opacity-80 hover:border-white/20'
                    }
                  `}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 drop-shadow-lg">
                      {project.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSetActive(index)}
                className={`
                  min-w-[2.5rem] h-9 text-xs sm:text-sm font-medium transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black
                  rounded-full
                  ${
                    activeIndex === index
                      ? 'bg-primary text-black shadow-lg shadow-primary/40'
                      : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                  }
                `}
                aria-label={`Go to project ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}