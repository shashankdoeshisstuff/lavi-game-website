'use client';

import Link from 'next/link';
import { Menu, ArrowRight, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  navigationItems: Array<{ name: string; href: string }>;
}

export function MobileMenu({ navigationItems }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="w-full h-full p-0 flex flex-col bg-background/95 backdrop-blur-sm border-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top [&>button]:hidden"
      >
        {/* Visually hidden title & description – for screen readers */}
        <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate through the main sections of the website.
        </SheetDescription>

        {/* Close button at top‑right */}
        <div className="flex justify-end p-4">
          <SheetClose asChild>
            <Button variant="ghost" size="icon" aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </SheetClose>
        </div>

        {/* Centered navigation */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-4">
          {navigationItems.map((item) => (
            <SheetClose asChild key={item.name}>
              <Link
                href={item.href}
                className="text-2xl sm:text-3xl font-medium py-2 px-4 rounded-md hover:bg-accent transition-colors"
              >
                {item.name}
              </Link>
            </SheetClose>
          ))}

          <SheetClose asChild>
            <Link href="/contact" className="mt-8">
              <Button
                className="
                  group
                  flex items-center justify-center gap-2
                  px-6 py-3 h-auto
                  bg-primary text-black
                  uppercase text-lg font-medium
                  rounded-full
                  hover:bg-white hover:text-black
                  transition-all duration-300
                  min-w-[200px]
                "
              >
                Contact us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}