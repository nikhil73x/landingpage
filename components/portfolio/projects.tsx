"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

interface Project {
  title: string;
  category: "Web Development" | "Core CS & DSA" | "Full-Stack & SQL";
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  categoryColor: string;
}

const projects: Project[] = [
  {
    title: "Minimalist Personal Portfolio",
    category: "Web Development",
    categoryColor: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
    description:
      "A fast, responsive, and minimalist developer portfolio website with consistent typography, smooth section transitions, dark/light theme support, and interactive contact elements.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://github.com/nikhil73x",
    githubUrl: "https://github.com/nikhil73x",
    featured: true,
  },
  {
    title: "Student Roster & Attendance Dashboard",
    category: "Web Development",
    categoryColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
    description:
      "A client-side interactive tool for managing student records, attendance tracking, and search filtering built with vanilla JavaScript, DOM APIs, and HTML/CSS.",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    liveUrl: "https://github.com/nikhil73x",
    githubUrl: "https://github.com/nikhil73x",
    featured: true,
  },
  {
    title: "Java Data Structures & OOP Lab",
    category: "Core CS & DSA",
    categoryColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
    description:
      "Hands-on implementation of foundational computer science concepts: singly & doubly linked lists, stack/queue operations, and object-oriented programming concepts in Java.",
    tags: ["Java", "Data Structures", "Linked Lists", "OOP"],
    liveUrl: "https://github.com/nikhil73x",
    githubUrl: "https://github.com/nikhil73x",
  },
  {
    title: "Basic Node.js & SQL Data Manager",
    category: "Full-Stack & SQL",
    categoryColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
    description:
      "A lightweight backend service using Node.js and Express to perform CRUD queries on relational database tables with structured SQL scripts.",
    tags: ["Node.js", "Express", "SQL & PL/SQL", "npm"],
    liveUrl: "https://github.com/nikhil73x",
    githubUrl: "https://github.com/nikhil73x",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Web Development", "Core CS & DSA", "Full-Stack & SQL"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-neutral-200/80 dark:border-neutral-900 bg-[#f8f9fa] dark:bg-[#09090b] transition-colors">
      <div className="w-full max-w-[940px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/80 dark:bg-indigo-950/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-4 shadow-xs transition-colors">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Projects</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-neutral-950 dark:text-white tracking-tight leading-tight transition-colors">
              Practical &amp; Academic Work
            </h2>
          </div>

          {/* Filter Pills with distinct surface elevation */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#131316] border border-neutral-200/90 dark:border-neutral-800 shadow-xs self-start sm:self-auto no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ease-out whitespace-nowrap cursor-pointer hover:-translate-y-0.5 active:scale-95 ${
                  activeFilter === filter
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with clear distinction and elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.45)] hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-black/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.categoryColor}`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                      ★ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-semibold">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 underline-offset-4"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
