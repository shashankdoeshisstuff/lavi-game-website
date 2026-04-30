import ContactSection from "@/components/contact-section";
import { AboutIntro } from "@/components/sections/service/AboutIntro";
import { Accordion } from "@/components/sections/service/Accordion";
import { Hero } from "@/components/sections/service/Hero";
import { ProcessSteps } from "@/components/sections/about/ProcessSteps";
import { getServiceBySlug } from "@/lib/services";
import { Step } from "@/types";
import { notFound } from "next/navigation";
import Features from "@/components/sections/services/features";
import WhySection from "@/components/sections/services/WhySection";

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

interface ServiceSectionProps {
  params: Promise<{ slug: string }>
}

export default async function ServiceSection({ params }: ServiceSectionProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }
  
  return (
    <section className="w-full text-white">
      <Hero title={service.title} description={service.description}/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 items-start">
        <AboutIntro description={service.why_description || ''} />
        <Accordion items={service.accordion_item || []} />
      </div>
      <Features items={service.features || []}/>
      <ProcessSteps steps={stepsData} />
      <WhySection/>
      <ContactSection/>
    </section>
  );
}