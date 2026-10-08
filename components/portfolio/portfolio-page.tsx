"use client";

import React, { useState } from "react";
import { ThemeProvider } from "./theme-context";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Services } from "./services";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { CvModal } from "./cv-modal";

export function PortfolioPage() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const handleHireClick = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-[#f8f9fa] dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 selection:bg-indigo-500/30 selection:text-white dark:selection:bg-indigo-500/30 dark:selection:text-white relative transition-colors duration-300 overflow-x-hidden">
        {/* Subtle Vibrant Tech Glow Orbs (Aurora Effect) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Top-Right Violet/Indigo Glow */}
          <div className="absolute -top-40 right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent blur-[120px] dark:from-indigo-600/25 dark:via-purple-600/15" />
          {/* Top-Left Cyan/Sky Glow */}
          <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent blur-[110px] dark:from-cyan-500/20 dark:via-blue-600/15" />
          {/* Mid-Page Amber/Pink Accent Glow */}
          <div className="absolute top-[55%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-pink-500/10 via-rose-500/5 to-transparent blur-[100px] dark:from-pink-600/15 dark:via-purple-600/10" />
          {/* Bottom Emerald/Cyan Glow */}
          <div className="absolute bottom-[-10%] left-[10%] w-[550px] h-[500px] rounded-full bg-gradient-to-t from-emerald-500/10 via-teal-500/5 to-transparent blur-[120px] dark:from-teal-500/15 dark:via-emerald-500/10" />
        </div>

        {/* Floating Navbar with Theme Toggle */}
        <Navbar />

        {/* Hero Section */}
        <Hero
          onHireClick={handleHireClick}
          onDownloadCv={() => setIsCvOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Services Section */}
        <Services onHireClick={handleHireClick} />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Interactive CV Modal */}
        <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      </main>
    </ThemeProvider>
  );
}
