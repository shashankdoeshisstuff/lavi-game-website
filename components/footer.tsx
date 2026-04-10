import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  // Navigation links arrays
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    /* { name: 'News & Press', href: '/news' }, */
    { name: 'Contact', href: '/contact' },
    /* { name: 'Leadership', href: '/leadership' }, */
  ];

  const gamesLinks = [
    { name: 'All Games', href: '/games' },
    /* { name: 'Upcoming Releases', href: '/games/upcoming' }, */
    { name: 'Featured Titles', href: '/games/featured' },
    /* { name: 'Game Store', href: '/store' }, */
    { name: 'Platforms', href: '/platforms' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    /* { name: 'Community', href: '/community' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Developer Portal', href: '/developers' },
    { name: 'Partnerships', href: '/partners' }, */
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    /* { name: 'Sitemap', href: '/sitemap' }, */
  ];

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 border border-white/10 rounded-4xl bg-black/20 mb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/Asset_24xs.png"
                  alt="Axenet logo"
                  width={140}
                  height={70}
                  className="h-auto w-auto max-w-[140px] md:max-w-[160px] object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Creating immersive gaming experiences that push the boundaries of
              technology and storytelling. Building the future of interactive entertainment.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>143/14, Kesar Bagh, LESA COLONY, Aminabad, Lucknow, Uttar Pradesh 226018</span>
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