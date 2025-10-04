'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react'
import Branding from '@/components/branding'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="px-8 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Branding size="lg" uppercase />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Creating immersive gaming experiences that push the boundaries of
              technology and storytelling. Building the future of interactive entertainment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@axenet.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-proxima-nova font-bold text-foreground uppercase tracking-wide text-sm">
              Company
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                About Us
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                Careers
              </Link>
              <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                News & Press
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                Contact
              </Link>
              <Link href="/leadership" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                Leadership
              </Link>
            </nav>
          </div>

          {/* Games */}
          <div className="space-y-3">
            <h3 className="font-proxima-nova font-bold text-foreground uppercase tracking-wide text-sm">
              Games
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/games" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                All Games
              </Link>
              <Link
                href="/games/upcoming"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Upcoming Releases
              </Link>
              <Link
                href="/games/featured"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Featured Titles
              </Link>
              <Link href="/store" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                Game Store
              </Link>
              <Link href="/platforms" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                Platforms
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-proxima-nova font-bold text-foreground uppercase tracking-wide text-sm">
              Support
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                Help Center
              </Link>
              <Link
                href="/community"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Community
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors py-1">
                FAQ
              </Link>
              <Link
                href="/developers"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Developer Portal
              </Link>
              <Link
                href="/partners"
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Partnerships
              </Link>
            </nav>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 p-6 bg-background/50 rounded-lg border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-proxima-nova font-bold text-foreground text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground text-sm">
                Subscribe to our newsletter for the latest game releases and company news.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Axenet IT Services. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}