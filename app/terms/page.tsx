import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Axenet IT Services',
  description: 'Legal terms and conditions for using Axenet IT Services website and services.',
};

export default function TermsPage() {
  return (
    <main className="w-full bg-black text-white border-x border-white/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: April 2026</p>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Axenet IT Services website, any related games, software, or services
              (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms").
              If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of significant changes
              by posting a notice on our website or via email. Your continued use of the Service after such
              changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Use of the Service</h2>
            <p>
              You agree to use the Service only for lawful purposes and in accordance with these Terms.
              You may not use the Service in any way that violates applicable laws or regulations.
              You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content, trademarks, games, art, code, and other materials on the Service are the property
              of Axenet IT Services or its licensors and are protected by copyright, trademark, and other laws.
              You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. User Content</h2>
            <p>
              If you submit feedback, suggestions, or other content to us, you grant us a perpetual,
              irrevocable, royalty-free license to use, modify, and incorporate that content into our
              products and services without any obligation to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Purchases and Refunds</h2>
            <p>
              Game purchases and other digital products are final unless otherwise required by law.
              Please contact our support team if you experience technical issues with a purchased product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AXENET IT SERVICES SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE
              OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
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