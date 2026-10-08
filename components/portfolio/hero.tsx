"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Briefcase,
} from "lucide-react";
import {
  GithubIcon,
  DiscordIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./icons";

interface HeroProps {
  onHireClick?: () => void;
  onDownloadCv?: () => void;
}

export function Hero({ onHireClick, onDownloadCv }: HeroProps) {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onHireClick) {
      onHireClick();
      return;
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleCvClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onDownloadCv) {
      onDownloadCv();
    } else {
      const link = document.createElement("a");
      link.href = "#contact";
      link.click();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Subtle colorful ambient light spots behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-purple-400/10 dark:from-blue-600/10 dark:via-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[940px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (~58%) */}
          <div className="md:col-span-7 flex flex-col items-start animate-hero-fade">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-5 shadow-xs transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for internships &amp; freelance</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-sans font-extrabold tracking-tight text-neutral-950 dark:text-white text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] mb-1 transition-colors">
              Hi, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
                Nikhil.
              </span>
            </h1>

            {/* Subheading / Position */}
            <div className="font-serif font-bold text-xl sm:text-2xl lg:text-[28px] text-neutral-900 dark:text-neutral-100 tracking-tight mt-2 sm:mt-2.5 mb-4 sm:mb-5 flex items-center transition-colors">
              <span>Frontend Developer &bull; B.Tech CSE Student</span>
            </div>

            {/* Description - Grounded & Accurate for 2nd Year Student */}
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-lg mb-6 font-normal transition-colors">
              2nd-year B.Tech Computer Science student building responsive web applications while developing strong foundations in programming, DSA, databases, and web development.
            </p>

            {/* Info Items */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-7 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-7 transition-colors">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-3.5 h-3.5 stroke-[2]" />
                </span>
                <span>Chandigarh, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Briefcase className="w-3.5 h-3.5 stroke-[2]" />
                </span>
                <span>Available Now</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-7 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="relative group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(79,70,229,0.5)] active:scale-95 select-none shadow-md cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>&rarr;</span>
                <span>Hire Me</span>
              </a>
              <button
                type="button"
                onClick={handleCvClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 select-none shadow-xs cursor-pointer"
              >
                <span>&darr;</span>
                <span>Download CV</span>
              </button>
            </div>

            {/* Thin Horizontal Divider */}
            <div className="w-full border-t border-neutral-200/90 dark:border-neutral-800 my-2 transition-colors" />

            {/* Social Follow Section: White Circles with Thick Borders & Brand Colors */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                Follow me:
              </span>
              <div className="flex items-center gap-3">
                {/* GitHub: White Circle with Thick Border */}
                <a
                  href="https://github.com/nikhil73x"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile: nikhil73x"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center text-neutral-900 dark:text-white transition-all duration-300 ease-out hover:scale-115 hover:-translate-y-1 hover:border-neutral-900 dark:hover:border-white hover:shadow-lg active:scale-90 cursor-pointer"
                  title="GitHub: nikhil73x"
                >
                  <GithubIcon className="w-4 h-4 stroke-[2.2]" />
                </a>

                {/* LinkedIn: White Circle with Thick Border and Permanent Blue */}
                <a
                  href="https://www.linkedin.com/in/nikhil-yadav-2a0382440/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center text-[#0A66C2] transition-all duration-300 ease-out hover:scale-115 hover:-translate-y-1 hover:border-[#0A66C2] hover:shadow-[0_8px_20px_rgba(10,102,194,0.35)] active:scale-90 cursor-pointer"
                  title="LinkedIn: Nikhil"
                >
                  <LinkedinIcon className="w-4 h-4 stroke-[2.2]" />
                </a>

                {/* Instagram: White Circle with Thick Border and Permanent Gradient */}
                <a
                  href="https://www.instagram.com/ifw_nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile: @ifw_nikhil"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center transition-all duration-300 ease-out hover:scale-115 hover:-translate-y-1 hover:border-[#E4405F] hover:shadow-[0_8px_20px_rgba(228,64,95,0.35)] active:scale-90 cursor-pointer"
                  title="Instagram: @ifw_nikhil"
                >
                  <InstagramIcon className="w-4 h-4 stroke-[2.2]" />
                </a>

                {/* Discord: White Circle with Thick Border and Permanent Blurple */}
                <a
                  href="https://discord.com/users/nikhil73x"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord: nikhil73x"
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-xs flex items-center justify-center text-[#5865F2] transition-all duration-300 ease-out hover:scale-115 hover:-translate-y-1 hover:border-[#5865F2] hover:shadow-[0_8px_20px_rgba(88,101,242,0.35)] active:scale-90 cursor-pointer"
                  title="Discord: nikhil73x"
                >
                  <DiscordIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Curved Image with Enhanced Shadow & Hover */}
          <div className="md:col-span-5 flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] group cursor-pointer">
              {/* Ambient glow behind card that expands and intensifies on hover */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/25 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10 pointer-events-none" />

              {/* Curved Card Container with Distinct Elevation & Shadow in Both Themes */}
              <div className="relative w-full aspect-square overflow-hidden rounded-[28px] border-2 border-neutral-200/90 dark:border-neutral-700/80 bg-white dark:bg-[#131316] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12),0_4px_16px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_14px_42px_-8px_rgba(0,0,0,0.9),0_0_24px_rgba(99,102,241,0.25)] transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.22),0_12px_28px_-4px_rgba(0,0,0,0.12)] dark:group-hover:shadow-[0_26px_60px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(99,102,241,0.4)]">
                <Image
                  src="/developer.png"
                  alt="Pixel art developer coding at desk with headphones"
                  width={1024}
                  height={1024}
                  priority
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
