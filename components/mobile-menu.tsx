// components/sections/home/MobileMenu.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X,  ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  navigationItems: Array<{ name: string; href: string }>
  gamesSubmenu?: Array<{ title: string; href: string; description?: string }>
}

export function MobileMenu({ navigationItems, gamesSubmenu }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [gamesOpen, setGamesOpen] = useState(false)

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
          {navigationItems.map((item) => {
            // Check if this is the "Games" item and we have a submenu
            if (item.name === 'Games' && gamesSubmenu && gamesSubmenu.length > 0) {
              return (
                <div key={item.name} className="border-b border-border pb-2">
                  <button
                    onClick={() => setGamesOpen(!gamesOpen)}
                    className="flex w-full items-center justify-between py-2 text-lg font-medium rounded-none px-4 hover:bg-accent transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        gamesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {gamesOpen && (
                    <div className="ml-6 mt-1 flex flex-col gap-2 border-l border-border pl-4">
                      {gamesSubmenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.title}
                          {sub.description && (
                            <span className="block text-xs text-muted-foreground/70 mt-0.5">
                              {sub.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            // Regular link (non-Games items)
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex py-2 text-lg font-medium rounded-none px-4 hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <button 
              className="
                w-full
                group
                flex items-center gap-2
                px-5 py-2.5
                sm:px-6 sm:py-3
                bg-primary
                text-black
                uppercase
                text-md
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
        </nav>
      </SheetContent>
    </Sheet>
  )
}