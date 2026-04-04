// components/sections/home/Header.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { CompactBranding } from './branding'
import { MobileMenu } from './mobile-menu'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Games', href: '/games' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2'
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <CompactBranding size="md" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex uppercase">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      'group inline-flex h-9 w-max items-center justify-center rounded-none px-4 py-2 text-sm font-medium transition-colors',
                      'text-foreground hover:bg-transparent hover:text-primary focus:outline-none'
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <Link className="hidden items-center gap-2 md:flex" href="contact" passHref>
          <Button size="lg" className="bg-primary uppercase hover:bg-primary/90 rounded-none">
            Contact Us <ArrowUpRight/>
          </Button>
        </Link>

        {/* Mobile Menu – client component */}
        <MobileMenu navigationItems={navigationItems} />
      </div>
    </header>
  )
}