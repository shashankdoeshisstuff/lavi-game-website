import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  // Navigation links arrays
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const gamesLinks = [
    { name: 'Game', href: '/game' },
    { name: 'All Games', href: '/game/games' },
    { name: 'Featured Titles', href: '/game#featured' },
    { name: 'Platforms', href: 'game#platforms' },
  ];

  const servicesLinks = [
    { name: 'AI Developement', href: '/services/ai' },
    { name: 'VR Developement', href: '/services/vr-developement' },
    { name: 'Game Developement', href: '/services/game' },
    { name: 'Mobile App Developement', href: '/services/mobile-app' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 border border-white/10 rounded-4xl bg-black/20 mb-12">
        {/* Responsive top grid: 1 column on mobile, 3 columns on md+ (brand: 1/3, links: 2/3) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand Column – spans 1 of the 3 md columns */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative w-[140px] md:w-[160px] h-[70px]">
              <Image
                src="/images/Asset_24xs.png"
                alt="Axenet logo"
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed break-words">
              Creating immersive gaming experiences that push the boundaries of
              technology and storytelling. Building the future of interactive entertainment.
            </p>

            {/* Contact Info – ensures long address wraps without overflowing */}
            <div className="space-y-2 text-sm max-w-full">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="break-words">
                  143/14, Kesar Bagh, LESA COLONY, Aminabad, Lucknow, Uttar Pradesh 226018
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">contact@axenet.com</span>
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

          {/* Links Container – spans 2 of the 3 md columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:col-span-2">
            {/* Company Links */}
            <div className="space-y-3">
              <h3 className="font-bold text-white uppercase tracking-wide text-sm">
                Company
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Games Links */}
            <div className="space-y-3">
              <h3 className="font-bold text-white uppercase tracking-wide text-sm">
                Games
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {gamesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services Links */}
            <div className="space-y-3">
              <h3 className="font-bold text-white uppercase tracking-wide text-sm">
                Services
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Support Links */}
            <div className="space-y-3">
              <h3 className="font-bold text-white uppercase tracking-wide text-sm">
                Support
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {supportLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Axenet IT Services. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}