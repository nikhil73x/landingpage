"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "What I Can Help With", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-900 bg-[#f8f9fa] dark:bg-[#09090b] py-12 transition-colors">
      <div className="w-full max-w-[940px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo / Name */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-bold text-sm text-neutral-900 dark:text-white">
              Nikhil
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Frontend Developer &bull; B.Tech CSE Student &bull; Chandigarh, Punjab, India
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-black dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md active:scale-90 py-1.5 px-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white bg-white dark:bg-[#131316] cursor-pointer shadow-xs"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 dark:text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Nikhil. Built with care &amp; precision.</p>
          <p>Next.js &bull; Tailwind CSS &bull; Lucide React</p>
        </div>
      </div>
    </footer>
  );
}
