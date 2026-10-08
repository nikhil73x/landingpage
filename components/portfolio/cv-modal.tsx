"use client";

import React from "react";
import { X, Download, FileText } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const cvText = `NIKHIL
Frontend Developer · B.Tech CSE Student
Location: Chandigarh, Punjab, India
Email: nikhil73x@gmail.com
Discord: nikhil73x (https://discord.com/users/nikhil73x)
Instagram: https://www.instagram.com/ifw_nikhil (@ifw_nikhil)
LinkedIn: https://www.linkedin.com/in/nikhil-yadav-2a0382440/
GitHub: https://github.com/nikhil73x
Languages: English, Hindi

==================================================
ACADEMIC PROFILE
==================================================
Degree: Bachelor of Technology (B.Tech) — 2nd Year
Field: Computer Science & Engineering / Technology
Location: Punjab, India
Relevant Coursework: Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems (SQL), Web Technologies.

==================================================
TECHNICAL SKILLS
==================================================
- Programming Languages: Java (Basic), JavaScript (Basic)
- Web Frontend: HTML5 & CSS3 (Basic), Responsive Web Design
- Databases: SQL & PL/SQL (Basic)
- Core CS Foundations: Object-Oriented Programming (OOP) (Basic), Data Structures including Linked Lists (Basic)
- Backend & Runtimes: Node.js & npm (Basic)
- Version Control & Tools: Git & GitHub (Familiar)
- Systems: Windows & basic system troubleshooting (Familiar)

==================================================
SOFT SKILLS
==================================================
- Problem Solving & Analytical Thinking
- Communication & Teamwork Collaboration
- Adaptability & Quick Learning
- Curiosity & Eagerness to Learn
- Time Management & Creative Thinking
- Confidence in Asking Questions

==================================================
PROJECTS & INTERESTS
==================================================
- AttendPulse (Attendance Tracker Portal): Modern attendance tracking & analytics web application built with React, Tailwind CSS, and Vite. Live at https://attendpulse.vercel.app/
- Personal Portfolio Website: Responsive modern portfolio built with Next.js, Tailwind CSS, TypeScript, and Framer Motion. Live at https://nexasoul2.vercel.app
- Web Development Practice: Building interactive UI components, student utility tools, and DOM manipulation scripts.
- DSA & Problem Solving: Practicing foundational data structures (arrays, linked lists) and OOP principles in Java.
`;
    const blob = new Blob([cvText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Nikhil_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-hero-fade"
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-[#131316] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close CV modal"
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-250 ease-out hover:rotate-90 hover:scale-110 active:scale-90 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="font-bold text-lg text-neutral-900 dark:text-white">
              Curriculum Vitae Preview
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Nikhil &bull; Frontend Developer &bull; B.Tech CSE Student
            </p>
          </div>
        </div>

        {/* Modal Body Preview */}
        <div className="p-4 rounded-xl bg-neutral-50/80 dark:bg-[#1a1a20] border border-neutral-200/90 dark:border-neutral-700/80 mb-6 space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Degree &amp; Year</span>
            <span className="text-neutral-600 dark:text-neutral-400">B.Tech CSE &bull; 2nd Year</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Email</span>
            <span className="text-neutral-600 dark:text-neutral-400">nikhil73x@gmail.com</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Discord</span>
            <span className="text-neutral-600 dark:text-neutral-400 font-mono">nikhil73x</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Instagram</span>
            <span className="text-neutral-600 dark:text-neutral-400">@ifw_nikhil</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Location</span>
            <span className="text-neutral-600 dark:text-neutral-400">Chandigarh, Punjab, India</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Languages</span>
            <span className="text-neutral-600 dark:text-neutral-400">English, Hindi</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-700">
            <span className="font-semibold text-neutral-900 dark:text-white">Technical Skills</span>
            <span className="text-neutral-600 dark:text-neutral-300 font-mono text-[11px]">Java, JS, HTML/CSS, SQL, DSA</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-neutral-900 dark:text-white">Availability</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-medium">Open for Internships</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Curriculum Vitae</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
