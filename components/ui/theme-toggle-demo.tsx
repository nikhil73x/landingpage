"use client";

import React from "react";
import { ThemeToggle } from "./theme-toggle";

export default function ThemeToggleDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 p-8 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="flex items-center gap-6">
        <ThemeToggle size="sm" />
        <ThemeToggle size="md" />
        <ThemeToggle size="lg" />
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        Apple-inspired spring physics theme toggle (Small, Medium, Large)
      </p>
    </div>
  );
}
