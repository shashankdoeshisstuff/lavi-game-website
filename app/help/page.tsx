import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  FileText,
  MessageCircle,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      questions: [
        { q: "How do I create an account?", a: "Click 'Sign Up' on the top right, fill in your details, and verify your email address." },
        { q: "What services does Axenet offer?", a: "We offer AI development, mobile & web apps, game development, VR/AR, blockchain solutions, and more." },
        { q: "How can I request a quote?", a: "Use the contact form on our website or email us at contact@axenetit.com with your project details." },
      ],
    },
    {
      title: "Technical Support",
      icon: FileText,
      questions: [
        { q: "My app is crashing. What should I do?", a: "Check if you have the latest version installed. If the problem persists, contact our support team with device details and screenshots." },
        { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login screen and follow the instructions sent to your registered email." },
        { q: "I'm experiencing slow performance.", a: "Clear your browser cache or app data. Ensure your internet connection is stable. For persistent issues, reach out to us." },
      ],
    },
    {
      title: "Billing & Accounts",
      icon: MessageCircle,
      questions: [
        { q: "What payment methods do you accept?", a: "We accept bank transfers, credit/debit cards (Visa, Mastercard), and UPI payments." },
        { q: "Can I upgrade or downgrade my plan?", a: "Yes. Contact our sales team and we'll adjust your subscription accordingly." },
        { q: "How do I cancel my subscription?", a: "Send a cancellation request to billing@axenetit.com at least 7 days before your next billing cycle." },
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-transparent text-white">
      {/* Hero section with watermark */}
      <div className="relative w-full mt-12 py-16 sm:py-20 md:py-28 overflow-hidden">
        <h1
          className="
            absolute 
            top-10 
            left-1/2 
            -translate-x-1/2 
            text-[40px] 
            xs:text-[60px]
            sm:text-[120px] 
            md:text-[180px] 
            font-bold 
            text-white/5 
            whitespace-nowrap 
            pointer-events-none 
            select-none
            max-w-[90vw]
          "
          aria-hidden="true"
        >
          HELP CENTER
        </h1>
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="text-primary text-sm uppercase rounded-full mb-4">
            Support & FAQs
          </Badge>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            How Can We{" "}
            <span className="relative inline-block px-3">
              <span className="relative z-10 text-black">Help?</span>
              <span className="absolute inset-1 rotate-2 bg-primary"></span>
            </span>
          </h2>
          <p className="text-white/60 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            Find answers, guides, and support resources – or reach out to our team directly.
          </p>
        </div>
      </div>

      {/* Search bar (optional) */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 -mt-8 mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-black/40 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-primary/10 border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => (
                    <details key={qIdx} className="group border-b border-white/10 pb-3">
                      <summary className="flex items-center justify-between cursor-pointer text-white/90 font-medium py-2 list-none">
                        <span>{faq.q}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="text-white/60 text-sm mt-2 pl-2">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact support cards */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Still need help?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Live Chat
            </Link> */}
            <Link
              href="mailto:support@axenetit.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@axenetit.com
            </Link>
            <Link
              href="tel:+918765515740"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (+91) 876-5515-740
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}