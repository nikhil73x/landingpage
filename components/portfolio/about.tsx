"use client";

import React from "react";
import { CheckCircle2, Code2, Sparkles, GraduationCap } from "lucide-react";

export function About() {
  const stats = [
    {
      label: "B.Tech CSE",
      value: "2nd Year",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10 dark:bg-blue-500/15",
      border: "border-blue-200/60 dark:border-blue-900/40",
    },
    {
      label: "Location",
      value: "Punjab, IN",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
      border: "border-emerald-200/60 dark:border-emerald-900/40",
    },
    {
      label: "Languages",
      value: "English & Hindi",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10 dark:bg-purple-500/15",
      border: "border-purple-200/60 dark:border-purple-900/40",
    },
    {
      label: "Focus Areas",
      value: "DSA & Web",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-500/10 dark:bg-amber-500/15",
      border: "border-amber-200/60 dark:border-amber-900/40",
    },
  ];

  const technicalSkills = [
    {
      name: "JavaScript",
      level: "Basic",
      badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
      dot: "bg-amber-500",
    },
    {
      name: "HTML5 & CSS3",
      level: "Basic",
      badgeColor: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
      dot: "bg-sky-500",
    },
    {
      name: "Java",
      level: "Basic",
      badgeColor: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
      dot: "bg-orange-500",
    },
    {
      name: "SQL & PL/SQL",
      level: "Basic",
      badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
      dot: "bg-blue-500",
    },
    {
      name: "Data Structures",
      level: "Basic",
      badgeColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
      dot: "bg-indigo-500",
    },
    {
      name: "OOP Principles",
      level: "Basic",
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
      dot: "bg-purple-500",
    },
    {
      name: "Node.js & npm",
      level: "Basic",
      badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
      dot: "bg-emerald-500",
    },
    {
      name: "Git & GitHub",
      level: "Familiar",
      badgeColor: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20",
      dot: "bg-rose-500",
    },
    {
      name: "Windows Troubleshooting",
      level: "Familiar",
      badgeColor: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20",
      dot: "bg-teal-500",
    },
  ];

  const softSkills = [
    { name: "Problem Solving", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60" },
    { name: "Adaptability & Quick Learning", color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60" },
    { name: "Teamwork & Collaboration", color: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900/60" },
    { name: "Clear Communication", color: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-900/60" },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-neutral-200/80 dark:border-neutral-900 bg-[#f8f9fa] dark:bg-[#09090b] transition-colors">
      <div className="w-full max-w-[940px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4 shadow-xs transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>About Me</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-neutral-950 dark:text-white tracking-tight leading-tight transition-colors">
            Curious developer building solid foundations in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              CS &amp; web development
            </span>.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Short punchy overview + Skills */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Punchy concise intro card with distinctive elevation */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#131316] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] space-y-3">
              <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-[15px] font-medium leading-relaxed">
                I&apos;m <span className="font-bold text-neutral-950 dark:text-white">Nikhil</span>, a 2nd-year B.Tech Computer Science student based in Chandigarh, Punjab, India. I build web projects while developing strong foundations in programming, data structures, and databases.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span><strong>Focus:</strong> Responsive Web &amp; Core CS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span><strong>Status:</strong> Ready for Internships</span>
                </div>
              </div>
            </div>

            {/* Technical Skills Section with Core Technical Skills label */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Core Technical Skills</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#131316] border border-neutral-200/90 dark:border-neutral-800 text-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-400 dark:hover:border-neutral-600 shadow-[0_1px_4px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${skill.dot}`} />
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                    </div>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${skill.badgeColor}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Strengths &amp; Soft Skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4 Stat Cards + Academic Card */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* 4 Clean Stats Cards with distinctive contrast */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-5 rounded-2xl border ${stat.border} ${stat.bg} shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-black/40 cursor-default flex flex-col justify-between`}
                >
                  <div className={`font-sans font-extrabold text-xl sm:text-2xl mb-1 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Card with distinctive elevation */}
            <div className="p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-black/50 hover:border-blue-500/40 cursor-default">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <span>Academic Profile</span>
                </h4>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Enrolled
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span><strong className="text-neutral-900 dark:text-neutral-200">Degree:</strong> B.Tech CSE &bull; 2nd Year</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong className="text-neutral-900 dark:text-neutral-200">Location:</strong> Chandigarh, Punjab, India</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                  <span><strong className="text-neutral-900 dark:text-neutral-200">Languages:</strong> English &amp; Hindi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                  <span><strong className="text-neutral-900 dark:text-neutral-200">Coursework:</strong> OOP, DSA (Linked Lists), DBMS / SQL, Java</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
