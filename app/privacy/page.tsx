import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Axenet IT Services',
  description: 'How Axenet IT Services collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-black text-white border-x border-white/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Effective date: April 2026</p>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any details you provide via contact forms or account registration.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, and other analytics through cookies and similar technologies.</li>
              <li><strong>Game Data:</strong> In-game achievements, preferences, and technical logs to improve gameplay and fix bugs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide, maintain, and improve our games and services.</li>
              <li>To communicate with you about updates, support, and marketing (you can opt out at any time).</li>
              <li>To analyze usage trends and enhance security.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share it with:
              <br />- Service providers (e.g., hosting, analytics, payment processors) under strict confidentiality.
              <br />- Legal authorities when required by law.
              <br />- In connection with a merger, acquisition, or sale of assets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies and Tracking</h2>
            <p>
              We use cookies to remember your preferences, analyze traffic, and personalize content.
              You can manage cookie settings through your browser. For more details, see our{' '}
              <Link href="/cookies" className="text-pink-400 hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard measures to protect your data, including encryption and access controls.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights (GDPR / CCPA)</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict processing
              of your personal data. To exercise these rights, contact us at <span className="text-pink-400">privacy@axenet.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information
              from children. If you believe we have done so, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be posted on this page
              with the effective date. Significant changes will be notified via email or website notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
            <p>
              For privacy-related inquiries, please email{' '}
              <Link href="mailto:privacy@axenet.com" className="text-pink-400 hover:underline">
                privacy@axenet.com
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