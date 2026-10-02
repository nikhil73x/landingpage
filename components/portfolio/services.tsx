"use client";

import React from "react";
import {
  Sparkles,
  Layout,
  Wrench,
  Database,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    icon: Layout,
    title: "Responsive Web Development",
    description:
      "Building clean, accessible websites using modern HTML5, CSS3, and JavaScript. Ensuring smooth layouts that look great on smartphones, tablets, and laptops.",
    deliverables: [
      "Mobile-first responsive design",
      "Semantic and accessible HTML structure",
      "Clean CSS styling & utility framework setup",
    ],
  },
  {
    icon: Sparkles,
    title: "Frontend UI Implementation",
    description:
      "Turning Figma or screenshot designs into working frontend web pages with attention to spacing, font hierarchy, and hover states.",
    deliverables: [
      "Accurate visual recreation of design mocks",
      "Interactive buttons, dropdowns, and modals",
      "Structured and organized component layout",
    ],
  },
  {
    icon: Wrench,
    title: "Bug Fixes & Layout Cleanup",
    description:
      "Troubleshooting HTML/CSS bugs, fixing responsiveness glitches, resolving mobile overflows, and standardizing code for better readability.",
    deliverables: [
      "Fixing mobile responsiveness issues",
      "Cleaning up cluttered CSS and styles",
      "General Windows & dev environment troubleshooting",
    ],
  },
  {
    icon: Database,
    title: "Basic Backend & SQL Development",
    description:
      "Working with relational databases, writing clean SQL queries, and connecting frontend forms to basic Node.js backend scripts.",
    deliverables: [
      "SQL table design & CRUD queries",
      "Basic Node.js / npm environment setup",
      "Form submission handling & basic data display",
    ],
  },
];

export function Services({ onHireClick }: { onHireClick?: () => void }) {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onHireClick) {
      onHireClick();
      return;
    }
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 border-t border-neutral-200/80 dark:border-neutral-900 bg-[#f8f9fa] dark:bg-[#09090b] transition-colors">
      <div className="w-full max-w-[940px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-4 shadow-xs transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-300" />
            <span>What I Can Help With</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-neutral-950 dark:text-white tracking-tight leading-tight transition-colors">
            Areas where I can contribute and continue developing my skills.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl transition-colors">
            I provide practical frontend development and basic technical support while continuing to strengthen my skills.
          </p>
        </div>

        {/* Services Grid with distinctive elevation in both themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.45)] hover:border-neutral-900 dark:hover:border-neutral-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center justify-center text-neutral-900 dark:text-white mb-5 transition-colors">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white mb-2 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5">
                    Scope &amp; Deliverables
                  </h4>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="p-8 rounded-2xl border border-neutral-900 dark:border-neutral-800 bg-neutral-950 dark:bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-sans font-bold text-xl sm:text-2xl mb-1 text-white">
              Looking for an enthusiastic intern or junior teammate?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md">
              Ready to learn quickly, collaborate with your team, and help ship clean web features.
            </p>
          </div>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 shrink-0 cursor-pointer shadow-md"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
