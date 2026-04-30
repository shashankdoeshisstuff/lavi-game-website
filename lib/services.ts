import { Smartphone, Gamepad2, Globe, BrainCircuit, LucideIcon, PenTool, Monitor, Database, ShieldCheck, Rocket, LifeBuoy } from 'lucide-react'

export interface AccordionItem {
  title: string;
  content: string;
}


export interface FeaturesItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  ctaText?: string;
  icon: LucideIcon;
  why_description?: string;
  accordion_item?: AccordionItem[];
  features?: FeaturesItem[];
}

export const services: Service[] = [
  {
    slug: 'mobile-app',
    title: 'MOBILE APP DEVELOPMENT',
    description:
      'We design and develop custom mobile application for Android and IOS platforms. Our mobile app developers have expertise to create mobile applications using Flutter, React, Native Android and IOS technologies.',
    ctaText: 'LEARN MORE',
    icon: Smartphone,
    why_description: "In today’s fast-paced digital world, a mobile app is more than just an add-on—it’s a vital tool for enhancing customer engagement, streamlining business processes, and driving growth. Whether you want to reach a broader audience, provide a seamless user experience, or stay ahead of the competition, a well-designed mobile app can transform your business. With increasing reliance on mobile devices, having a dedicated app not only strengthens your brand’s presence but also opens new revenue streams and improves customer retention. Investing in professional mobile app development ensures that your app is built to deliver value, performance, and scalability—giving your business the competitive edge it needs to succeed.",
    accordion_item: [
                {
                  title: "Custom-Tailored Solutions",
                  content: 'Get a mobile app designed specifically to meet your unique business requirements and goals.',
                },
                {
                  title: "Cross-Platform Development",
                  content: 'Reach a wider audience with apps that seamlessly work on both iOS and Android platforms.',
                },
                {
                  title: "Enhanced User Experience",
                  content: 'Deliver intuitive, user-friendly designs that engage users and boost customer satisfaction.',
                },
                {
                  title: "High Performance & Scalability",
                  content: 'Build robust apps optimized for speed and capable of handling growing user demands.',
                },
                {
                  title: "Advanced Features Integration",
                  content: 'Incorporate cutting-edge technologies like AI, AR, and IoT to stay ahead of the competition.',
                },
                {
                  title: "Faster Time to Market",
                  content: 'Benefit from an efficient development process that ensures timely delivery without compromising quality.',
                },
                {
                  title: "Ongoing Support & Maintenance",
                  content: 'Receive continuous updates, bug fixes, and improvements to keep your app running smoothly.',
                },
                {
                  title: "Cost-Effective Development",
                  content: 'Maximize ROI with high-quality, scalable solutions developed within your budget.',
                },
              ],
    features: [
                {
                  title: 'Requirement Analysis and Conceptualization',
                  icon: Smartphone,
                  description:
                    'Understanding your business needs, target audience, and objectives to create a detailed app development roadmap tailored to your vision.',
                },
                {
                  title: 'UI/UX Design',
                  icon: PenTool,
                  description:
                    'Crafting visually appealing and highly intuitive user interfaces that enhance the user experience and increase engagement.',
                },
                {
                  title: 'Cross-Platform Development',
                  icon: Monitor,
                  description:
                    'Developing apps using frameworks like Flutter or React Native to ensure seamless performance on both iOS and Android platforms, reducing development time and cost.',
                },
                {
                  title: 'Native App Development',
                  icon: Globe,
                  description:
                    'Building high-performance apps tailored for specific platforms (iOS or Android) using their respective SDKs for a superior user experience.',
                },
                {
                  title: 'Backend Development and API Integration',
                  icon: Database,
                  description:
                    'Creating robust and secure backend systems, along with seamless API integrations, to ensure smooth data flow and app functionality.',
                },
                {
                  title: 'Quality Assurance and Testing',
                  icon: ShieldCheck,
                  description:
                    'Conducting rigorous testing across multiple devices, platforms, and use cases to deliver bug-free and reliable apps.',
                },
                {
                  title: 'Deployment and Launch',
                  icon: Rocket,
                  description:
                    'Assisting with app store submission (App Store & Google Play), ensuring compliance with platform guidelines, and launching your app successfully.',
                },
                {
                  title: 'Ongoing Support and Maintenance',
                  icon: LifeBuoy,
                  description:
                    'Providing continuous updates, performance monitoring, and technical support to keep your app up-to-date and running smoothly.',
                },
              ]
  },
  {
    slug: 'game',
    title: 'GAME DEVELOPMENT',
    description:
      'Our game developers using advance technology / tools and develop visually attractive UI and responsive games that keeps the gamers engaged. We help our clients to turn their creative ideas into games by providing cost-effective solutions with quality.',
    ctaText: 'LEARN MORE',
    icon: Gamepad2,
  },
  {
    slug: 'web',
    title: 'WEB DEVELOPMENT',
    description:
      'We have rich and sharp proficiency and extensive experience in creating responsive and professional websites for all types of businesses. To stay with the latest web technology trends and concepts, we keep ourselves up to date with these trends and emerging technology concepts.',
    ctaText: 'LEARN MORE',
    icon: Globe,
  },
  {
    slug: 'ai',
    title: 'AI DEVELOPMENT',
    description:
      'We offer comprehensive AI development solutions, including machine learning, deep learning, natural language processing, and generative AI, to create intelligent systems that enhance automation, decision-making, and user experiences.',
    ctaText: 'LEARN MORE',
    icon: BrainCircuit,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((p) => p.slug === slug)
}