"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/portfolio/theme-context";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const isDark = mounted ? theme === "dark" : false;

  // Keybindings: Enter or Space
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };

  const dimensions = {
    sm: { track: "w-12 h-6 p-0.5", thumb: "w-5 h-5", icon: "w-3 h-3", travel: 24 },
    md: { track: "w-14 h-7.5 p-1", thumb: "w-5.5 h-5.5", icon: "w-3.5 h-3.5", travel: 26 },
    lg: { track: "w-16 h-8.5 p-1", thumb: "w-6.5 h-6.5", icon: "w-4 h-4", travel: 30 },
  }[size];

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      className={`relative inline-flex items-center rounded-full cursor-pointer select-none transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 ${
        dimensions.track
      } ${
        isDark
          ? "bg-neutral-800/90 border border-neutral-700/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.05)]"
          : "bg-neutral-200/80 border border-neutral-300/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
      } backdrop-blur-md ${className}`}
    >
      {/* Background Track Atmosphere: Microscopic Stars (Dark) / Warm Glow (Light) */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="stars"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center"
            >
              {/* Star 1 */}
              <motion.span
                animate={{ opacity: [0.3, 0.9, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-2.5 top-1.5 w-1 h-1 rounded-full bg-blue-200/80"
              />
              {/* Star 2 */}
              <motion.span
                animate={{ opacity: [0.2, 0.8, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute left-4.5 bottom-1.5 w-0.75 h-0.75 rounded-full bg-indigo-200/70"
              />
            </motion.div>
          ) : (
            <motion.div
              key="sun-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-blue-400/5 rounded-full"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Sliding Thumb Indicator with Apple-like Spring Physics */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 520,
          damping: 32,
          mass: 0.85,
        }}
        animate={{
          x: isDark ? dimensions.travel : 0,
        }}
        className={`relative z-10 flex items-center justify-center rounded-full transition-shadow duration-300 ${
          dimensions.thumb
        } ${
          isDark
            ? "bg-neutral-900 border border-neutral-700/80 shadow-[0_2px_8px_rgba(0,0,0,0.6),0_0_12px_rgba(147,197,253,0.15)] text-blue-300"
            : "bg-white border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] text-amber-500"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
              }}
              className="flex items-center justify-center"
            >
              {/* Refined Crescent Moon SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={dimensions.icon}
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
              }}
              className="flex items-center justify-center"
            >
              {/* Refined Sun SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={dimensions.icon}
              >
                <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.25" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
