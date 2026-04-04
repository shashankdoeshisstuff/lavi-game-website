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
    <section className="w-full text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      {/* Header Section */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          OUR TOP-RATED
          <br className="hidden sm:block" />
          PROJECTS
        </h2>
        <p className="text-gray-400 max-w-xl leading-relaxed text-sm sm:text-base">
          Our game development studio has successfully handled projects from
          initial concept art to full-scale production. We emphasize solid game
          design, high-quality art, and thorough QA.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-start">
        {/* Description Panel – sticky only on large screens */}
        <div className="flex flex-col gap-5 md:gap-6 p-5 md:p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-0 lg:sticky lg:top-24">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {projects[activeIndex].title}
          </h3>
          <ul className="flex flex-col gap-3 md:gap-4 text-gray-300">
            {projects[activeIndex].description.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-base md:text-lg">✓</span>
                <span className="leading-relaxed text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={projects[activeIndex].href}
            className="inline-flex items-center justify-center w-fit mt-2 md:mt-4 bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-gray-100 transition-all hover:gap-3 gap-2 group"
          >
            VIEW PROJECT
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Carousel Section */}
        <div className="relative col-span-1 lg:col-span-3">
          {/* Scroll Container with improved touch scrolling */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth p-4 sm:p-6 touch-pan-x"
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

            <div className="flex gap-4 sm:gap-6 px-2 sm:px-4">
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
                    focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black
                    ${
                      activeIndex === index
                        ? 'ring-4 ring-pink-500 shadow-2xl shadow-pink-500/30 z-10 opacity-100'
                        : 'opacity-60 hover:opacity-80'
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

          {/* Pagination Dots / Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSetActive(index)}
                className={`
                  min-w-[2.5rem] h-9 text-xs sm:text-sm font-medium transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black
                  ${
                    activeIndex === index
                      ? 'bg-pink-500/50 text-white shadow-lg shadow-pink-500/30'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
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