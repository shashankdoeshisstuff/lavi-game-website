import Clients from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { Accordion } from "@/components/sections/about/Accordion";
import { Hero } from "@/components/sections/about/Hero";
import { ProcessSteps } from "@/components/sections/about/ProcessSteps";
import ValuesSection from "@/components/sections/about/Values";
import { AccordionItem, Step } from "@/types";

const accordionData: AccordionItem[] = [
  {
    title: "Our History",
    content: `Founded in 2020 with a vision to empower businesses through innovative technology, Axenet IT Services has grown from a small team of passionate developers to a trusted name in the IT services industry.

Our journey began with a simple goal: to provide reliable and scalable technology solutions that make a difference. Over the years, we have evolved, adapting to emerging trends and expanding our expertise.

Today, Axenet IT Services stands as a symbol of trust and innovation, delivering quality solutions on time.`,
  },
  {
    title: "Our Mission",
    content: `Our mission is to empower businesses with innovative and scalable technology solutions that drive success. We aim to bridge the gap between vision and execution.

We are dedicated to delivering excellence through high-quality, future-ready solutions while fostering long-term partnerships with our clients.`,
  },
  {
    title: "Our Vision",
    content: `Our vision is to become a global leader in delivering transformative technology solutions that redefine how businesses operate.

We envision a future where technology seamlessly empowers businesses and drives meaningful progress.`,
  },
];

const stepsData: Step[] = [
  {
    title: "Discovery Phase",
    text: "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape.",
  },
  {
    title: "Strategy Development",
    text: "We develop a customized strategy tailored to your needs and objectives.",
  },
  {
    title: "Implementation and Execution",
    text: "We execute the plan using cutting-edge tools and techniques.",
  },
  {
    title: "Monitoring and Optimization",
    text: "We continuously monitor and optimize performance for best results.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full text-white">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <AboutIntro />
        <Accordion items={accordionData} />
      </div>
      <Clients/>
      <ValuesSection/>
      <ProcessSteps steps={stepsData} />
      <ContactSection/>
    </section>
  );
}