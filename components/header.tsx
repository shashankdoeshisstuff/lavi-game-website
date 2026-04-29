import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Game Dev", href: "/game-dev" },
  { name: "Projects", href: "/projects" },
  { name: "Games", href: "/games" },
  { name: "Contact", href: "/contact" },
];

/**
 * Header - Server Component
 *
 * - Desktop navigation: plain HTML/CSS, no client JS
 * - Mobile menu: shadcn Sheet (client component)
 * - Includes skip-to-content link for accessibility
 * - Logo has priority for LCP optimisation
 */
export default function Header() {
  return (
    <>
      {/* Skip to main content link – for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-background focus:text-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 transition-shadow",
          // Optional: add shadow on scroll (you can add a scroll listener later)
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo – preloaded */}
          <Link
            rel="preload"
            href="/"
            className="relative flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="Axenet – home"
          >
            <Image
              src="/images/Asset_24xs.webp"
              alt="Axenet logo"
              width={120}
              height={40}
              className="w-[120px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation – plain HTML/CSS */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex gap-1 uppercase">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA button */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 md:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
            aria-label="Contact us"
          >
            <button
              className={`
                group flex items-center gap-2
                px-5 py-2.5 sm:px-6 sm:py-3
                rounded-full
                bg-primary text-black
                uppercase text-xs sm:text-sm font-medium
                transition-all duration-300
                hover:bg-white hover:text-black hover:border-white
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
              `}
            >
              Contact us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]"
                aria-hidden="true"
              />
            </button>
          </Link>

          {/* Mobile Menu – client component (shadcn Sheet) */}
          <MobileMenu navigationItems={navigationItems} />
        </div>
      </header>
    </>
  );
}