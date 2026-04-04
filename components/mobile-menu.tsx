// components/sections/home/MobileMenu.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface MobileMenuProps {
  navigationItems: Array<{ name: string; href: string }>
}

export function MobileMenu({ navigationItems }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex py-2 text-lg font-medium rounded-none px-4 hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 rounded-none uppercase">
            Contact Us <ArrowUpRight />
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}