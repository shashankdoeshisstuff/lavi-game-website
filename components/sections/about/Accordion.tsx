"use client";

import { AccordionItem } from "@/types";
import { useState } from "react";

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl transition-all duration-300 ${
              isActive ? "bg-neutral-800 p-6" : "bg-neutral-800/60 px-6 py-4"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-medium ${
                  isActive ? "text-yellow-400" : "text-white"
                }`}
              >
                0{i + 1}. {item.title}
              </span>
              <button
                onClick={() => setActiveIndex(isActive ? null : i)}
                className="bg-yellow-400 text-black w-7 h-7 flex items-center justify-center rounded-md text-sm"
              >
                {isActive ? "×" : "+"}
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isActive
                  ? "max-h-[500px] mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}