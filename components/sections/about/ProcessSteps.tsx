"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Step } from "@/types";

interface ProcessStepsProps {
  steps: Step[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current && stepRefs.current[activeStep]) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const stepBottom = stepRefs.current[activeStep]!.getBoundingClientRect().bottom;
      setLineHeight(stepBottom - containerTop);
    }
  }, [activeStep]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="uppercase text-primary mb-4">HOW WE WORK</Badge>
        <h2 className="text-3xl sm:text-4xl font-semibold">Our 4 Stage Process</h2>
      </div>

      <div className="relative" ref={containerRef}>
        {/* Static background line */}
        <div className="absolute left-6 top-0 w-[2px] h-full bg-white/10" />
        {/* Animated active line */}
        <div
          className="absolute left-6 top-0 w-[2px] bg-yellow-400 transition-all duration-500"
          style={{ height: `${lineHeight}px` }}
        />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`flex gap-5 sm:gap-6 items-start cursor-pointer rounded-2xl transition-all duration-300 ${
                i === activeStep
                  ? "bg-neutral-800 opacity-100"
                  : "bg-neutral-800/40 opacity-60 hover:bg-neutral-800/60 hover:opacity-80"
              }`}
              onClick={() => setActiveStep(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveStep(i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Step ${i + 1}: ${step.title} ${i === activeStep ? "(active)" : ""}`}
            >
              <div className="pl-5 pt-5 sm:pl-6 sm:pt-6">
                <div
                  className={`text-3xl font-bold min-w-[40px] sm:min-w-[50px] transition-all duration-300 ${
                    i === activeStep ? "text-yellow-400 scale-110" : "text-white/30"
                  }`}
                >
                  0{i + 1}
                </div>
              </div>
              <div className="flex-1 py-5 pr-5 sm:py-6 sm:pr-6">
                <p className="text-xs text-primary mb-1">STEP 0{i + 1}</p>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}