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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call – replace with actual endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
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
      details: 'hello@axenet.com',
      href: 'mailto:hello@axenet.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Game Dev Street, Digital City, DC 90210',
      href: 'https://maps.google.com/?q=123+Game+Dev+Street',
    },
  ];

  return (
    <section className="w-full bg-white text-black py-20 border-x">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - same as GameEnginesSection */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {`LET'S TALK ABOUT`}
            <br className="hidden sm:block" />
            YOUR NEXT PROJECT
          </h2>
          <p className="text-gray-600 max-w-xl leading-relaxed">
            {`Ready to bring your game idea to life? Reach out to our team. Whether
            you need full-cycle development, art production, or expert consulting,
            we're here to help you succeed.`}
          </p>
        </div>

        {/* Contact Form & Info Grid - two columns like engine cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form Card */}
          <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="hello@axenet.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-vertical"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-fit mt-2 rounded-none"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                <Send className="ml-2 w-4 h-4" />
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm">✓ Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm">✗ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Information Card */}
          <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <div className="flex flex-col gap-5">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.icon === MapPin ? '_blank' : undefined}
                    rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition">
                      <Icon className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="text-gray-900 font-medium">{item.details}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="pt-4 mt-2 border-t border-gray-200">
              <h4 className="text-lg font-bold mb-2">Office Hours</h4>
              <p className="text-gray-600 text-sm">Monday – Friday: 9:00 AM – 6:00 PM (EST)</p>
              <p className="text-gray-600 text-sm">Saturday – Sunday: Closed</p>
              <p className="text-gray-500 text-sm mt-4">
                {`📍 We're remote-friendly and ready to collaborate worldwide.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}