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
      <main className="min-h-screen bg-[#f8f9fa] dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 relative transition-colors duration-300">
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
