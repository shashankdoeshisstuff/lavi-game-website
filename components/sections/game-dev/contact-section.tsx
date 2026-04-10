'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@axenet.com',
      href: 'mailto:contact@axenet.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 95656 83089',
      href: 'tel:+919565683089',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '143/14, Kesar Bagh, LESA COLONY, Aminabad, Lucknow, Uttar Pradesh 226018',
      href: 'https://maps.app.goo.gl/rgChmANexxBiJp2y6',
    },
  ];

  return (
    <section className="w-full bg-white text-black py-12 sm:py-16 md:py-20 border-x overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER - Improved responsive spacing and alignment */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="block">LET'S TALK ABOUT</span>
            <span className="block mt-1">YOUR NEXT PROJECT</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Ready to bring your game idea to life? Reach out to our team.
            Whether you need full-cycle development, art production, or
            consulting, we&apos;re here to help.
          </p>
        </div>

        {/* CONTACT CARD - Fully responsive padding and gaps */}
        <div className="bg-gray-50 border border-gray-200 p-5 sm:p-6 md:p-8 lg:p-10 grid lg:grid-cols-2 gap-8 md:gap-10">

          {/* FORM SECTION */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <h3 className="text-xl sm:text-2xl font-bold">Send us a message</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full bg-white border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full bg-white border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />

              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full bg-white border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base resize-vertical focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-fit rounded-none px-6 py-2.5 sm:py-3"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                <Send className="ml-2 w-4 h-4" />
              </Button>

              {/* Status messages with better spacing */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-1">
                  ✓ Message sent successfully!
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-1">
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* CONTACT INFO - Improved touch targets and responsive layout */}
          <div className="flex flex-col gap-5 sm:gap-6 justify-center">
            <h3 className="text-xl sm:text-2xl font-bold">Get in touch</h3>

            <div className="flex flex-col gap-5 sm:gap-6">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.icon === MapPin ? '_blank' : undefined}
                    rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 sm:gap-4 group hover:translate-x-1 transition-transform touch-manipulation"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500">{item.title}</p>
                      <p className="text-sm sm:text-base text-gray-900 font-medium break-words">
                        {item.details}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Footer note with better spacing on mobile */}
            <div className="pt-5 sm:pt-6 border-t border-gray-200 mt-2">
              <p className="text-gray-500 text-xs sm:text-sm">
                📍 We&apos;re remote-friendly and ready to collaborate worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}