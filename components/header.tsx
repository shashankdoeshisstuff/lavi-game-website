// components/sections/home/Header.tsx
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // "Games" will be handled separately as a trigger
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

// Submenu items for Games
const gamesSubmenu = [
  { title: "All Games", href: "/games", description: "Explore our complete library of immersive titles." },
  { title: "Game Dev", href: "/game-dev", description: "Tools, resources, and career paths for game developers." },
];

// ListItem component for submenu content
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; description?: string }
>(({ className, title, description, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {description && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

/**
 * Header - Server Component
 * 
 * Renders the main navigation bar with logo, desktop navigation (using shadcn/ui's client
 * NavigationMenu component), desktop CTA button, and mobile menu (client component).
 * 
 * This component has no client-side state or effects – it only composes client components,
 * which is allowed in server components. The interactive parts (dropdowns, mobile sheet)
 * are provided by the imported client components.
 */
export default function Header() {
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src="/images/Asset_24xs.png"
            alt="Axenet logo"
            width={120}
            height={40}
            className="h-auto w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation - uses client components internally */}
        <NavigationMenu className="hidden md:flex uppercase">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.name === "Games" ? null : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
            {/* Games dropdown trigger */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase">Games</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2 md:w-[320px]">
                  {gamesSubmenu.map((subItem) => (
                    <ListItem
                      key={subItem.title}
                      title={subItem.title}
                      href={subItem.href}
                      description={subItem.description}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <Link className="hidden items-center gap-2 md:flex" href="/contact" passHref>
          <button 
            className="
              group
              flex items-center gap-2
              px-5 py-2.5
              sm:px-6 sm:py-3
              rounded-full
              bg-primary
              text-black
              uppercase
              text-xs
              sm:text-sm
              font-medium
              transition-all duration-300
              hover:bg-white hover:text-black
              hover:border-white
            "
          >
            Contact us
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]"
            />
          </button>
        </Link>

        {/* Mobile Menu – client component */}
        <MobileMenu navigationItems={navigationItems} gamesSubmenu={gamesSubmenu} />
      </div>
    </header>
  );
}