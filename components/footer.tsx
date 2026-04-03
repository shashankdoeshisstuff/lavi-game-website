'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';
import Branding from '@/components/branding';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-x border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Branding size="lg" uppercase />
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Creating immersive gaming experiences that push the boundaries of
              technology and storytelling. Building the future of interactive entertainment.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@axenet.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors hover:scale-110 transform duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors hover:scale-110 transform duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors hover:scale-110 transform duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-bold text-white uppercase tracking-wide text-sm">
              Company
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors py-1">
                About Us
              </Link>
              <Link href="/careers" className="text-gray-400 hover:text-white transition-colors py-1">
                Careers
              </Link>
              <Link href="/news" className="text-gray-400 hover:text-white transition-colors py-1">
                News & Press
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors py-1">
                Contact
              </Link>
              <Link href="/leadership" className="text-gray-400 hover:text-white transition-colors py-1">
                Leadership
              </Link>
            </nav>
          </div>

          {/* Games */}
          <div className="space-y-3">
            <h3 className="font-bold text-white uppercase tracking-wide text-sm">
              Games
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/games" className="text-gray-400 hover:text-white transition-colors py-1">
                All Games
              </Link>
              <Link href="/games/upcoming" className="text-gray-400 hover:text-white transition-colors py-1">
                Upcoming Releases
              </Link>
              <Link href="/games/featured" className="text-gray-400 hover:text-white transition-colors py-1">
                Featured Titles
              </Link>
              <Link href="/store" className="text-gray-400 hover:text-white transition-colors py-1">
                Game Store
              </Link>
              <Link href="/platforms" className="text-gray-400 hover:text-white transition-colors py-1">
                Platforms
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-bold text-white uppercase tracking-wide text-sm">
              Support
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/help" className="text-gray-400 hover:text-white transition-colors py-1">
                Help Center
              </Link>
              <Link href="/community" className="text-gray-400 hover:text-white transition-colors py-1">
                Community
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white transition-colors py-1">
                FAQ
              </Link>
              <Link href="/developers" className="text-gray-400 hover:text-white transition-colors py-1">
                Developer Portal
              </Link>
              <Link href="/partners" className="text-gray-400 hover:text-white transition-colors py-1">
                Partnerships
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Axenet IT Services. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}