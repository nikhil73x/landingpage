"use client";

import React, { useEffect, useState } from "react";
import { Home, User, FolderGit2, Sparkles, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "What I Can Help With", href: "#services", icon: Sparkles },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const targetOffset = targetEl.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: Math.max(0, targetOffset),
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)] transition-all duration-300 max-w-full overflow-x-auto no-scrollbar ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-neutral-300/80 dark:border-neutral-700" : ""
        }`}
      >
        {navItems.map((item) => {
          const isActive =
            activeSection === item.href.replace("#", "") ||
            (activeSection === "" && item.name === "Home");
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 whitespace-nowrap select-none cursor-pointer ${
                isActive
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
              <span>{item.name}</span>
            </a>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-4 bg-neutral-200 dark:bg-neutral-800 mx-1" />

        {/* Ultra-Premium Animated Light/Dark Theme Toggle */}
        <ThemeToggle size="sm" className="ml-0.5 mr-0.5" />
      </nav>
    </header>
  );
}
