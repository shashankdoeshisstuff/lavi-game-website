import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Axenet IT Services',
  description: 'How Axenet IT Services uses cookies and similar technologies on its website and games.',
};

export default function CookiesPage() {
  return (
    <main className="w-full bg-black text-white border-x border-white/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: April 2026</p>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help us remember
              your preferences, understand how you use our site, and improve your experience. We also use similar
              technologies like local storage and pixel tags.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality (e.g., navigation, login).</li>
              <li><strong>Analytics/Performance Cookies:</strong> Help us count visits and traffic sources to measure and improve our site (e.g., Google Analytics).</li>
              <li><strong>Functional Cookies:</strong> Remember your choices (language, region) to provide enhanced features.</li>
              <li><strong>Advertising/Targeting Cookies:</strong> Used to deliver relevant ads and track campaign effectiveness (only with your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Cookies</h2>
            <p>
              Some cookies are set by third-party services we integrate, such as:
              <br />- <strong>Google Analytics</strong> – to analyze site traffic.
              <br />- <strong>YouTube/Vimeo</strong> – for embedded videos.
              <br />- <strong>Social media plugins</strong> (Facebook, Twitter, Instagram) – to allow sharing.
              <br />These third parties have their own cookie policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your Choices</h2>
            <p>
              You can control cookies in several ways:
              <br />- <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies. Note that disabling essential cookies may break some website features.
              <br />- <strong>Consent banner:</strong> When you first visit our site, you can accept or decline non-essential cookies.
              <br />- <strong>Opt-out tools:</strong> For analytics, you can use the Google Analytics opt-out browser add-on.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookie Duration</h2>
            <p>
              Session cookies are deleted when you close your browser. Persistent cookies remain for a set period
              (up to 12 months) unless you delete them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements.
              The latest version will always be available on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{' '}
              <Link href="mailto:legal@axenet.com" className="text-pink-400 hover:underline">
                legal@axenet.com
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Axenet IT Services. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}