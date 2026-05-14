import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Users,
  Coffee,
  GraduationCap,
  Heart,
  Send,
  ChevronRight,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  // 👇 Add or remove openings here – the page will update automatically
  const openPositions: Array<{
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
  }> = [
    // Example – uncomment or add your own:
    // {
    //   title: "Senior Full Stack Developer",
    //   department: "Engineering",
    //   location: "Lucknow, India (On-site)",
    //   type: "Full-time",
    //   salary: "Competitive + Benefits",
    //   description: "Build scalable web apps using React, Node.js, and cloud platforms.",
    // },
  ];

  const benefits = [
    { icon: Award, title: "Competitive Salary", description: "We pay well and reward performance." },
    { icon: Users, title: "Collaborative Culture", description: "Work with talented, supportive peers." },
    { icon: Coffee, title: "Flexible Hours", description: "Focus on output, not clock-watching." },
    { icon: GraduationCap, title: "Learning Budget", description: "Courses, conferences, and certifications paid." },
    { icon: Heart, title: "Health Insurance", description: "Coverage for you and your family." },
    { icon: Briefcase, title: "Growth Opportunities", description: "Clear career paths and mentorship." },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-transparent text-white">
      {/* Hero section */}
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
          CAREERS
        </h1>
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="text-primary text-sm uppercase rounded-full mb-4">
            Join Our Team
          </Badge>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Build the Future{" "}
            <span className="relative inline-block px-3">
              <span className="relative z-10 text-black">With Us</span>
              <span className="absolute inset-1 rotate-2 bg-primary"></span>
            </span>
          </h2>
          <p className="text-white/60 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            We're always looking for passionate people to create amazing digital experiences.
          </p>
        </div>
      </div>

      {/* Why join us (benefits) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why Work at Axenet?</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            We believe in empowering our team with the tools, culture, and rewards to do their best work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Conditional rendering: show openings OR no-openings message */}
        {openPositions.length > 0 ? (
          <>
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">Open Positions</h3>
              <div className="grid grid-cols-1 gap-5">
                {openPositions.map((job, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{job.title}</h4>
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-white/60">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" /> {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" /> {job.salary}
                          </span>
                        </div>
                        <p className="text-white/70 mt-3 text-sm">{job.description}</p>
                      </div>
                      <Link
                        href={`/careers/apply?job=${encodeURIComponent(job.title)}`}
                        className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors"
                      >
                        Apply Now <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional: still allow general CV submission even when openings exist */}
            <div className="text-center rounded-3xl bg-gradient-to-r from-primary/10 to-transparent border border-white/10 p-8 md:p-12">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Don't see the perfect role?</h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                We're always interested in hearing from talented people. Send us your CV and we'll keep you in mind.
              </p>
              <Link
                href="mailto:careers@axenetit.com?subject=Application%20-%20General%20Interest"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/80 transition-colors"
              >
                <Send className="w-4 h-4" />
                careers@axenetit.com
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center rounded-3xl bg-gradient-to-r from-primary/10 to-transparent border border-white/10 p-8 md:p-12">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">No Current Openings</h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              We don't have any active positions right now, but we're always interested in hearing from talented people.
              Send us your CV and we'll reach out when something matches your skills.
            </p>
            <Link
              href="mailto:careers@axenetit.com?subject=Application%20-%20General%20Interest"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/80 transition-colors"
            >
              <Send className="w-4 h-4" />
              careers@axenetit.com
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}