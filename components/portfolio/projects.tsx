import React from "react";
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
    title: "AttendPulse — Attendance Tracker Portal",
    category: "Web Development",
    categoryColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
    description:
      "A modern, responsive attendance tracking and student management portal designed with an intuitive dark-themed UI, live roster metrics, and smooth data visualization.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "Analytics"],
    liveUrl: "https://attendpulse.vercel.app/",
    githubUrl: "https://github.com/nikhil73x/attendpulse",
    featured: true,
  },
  {
    title: "Minimalist Personal Portfolio",
    category: "Web Development",
    categoryColor: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
    description:
      "A fast, responsive, and minimalist developer portfolio website with consistent typography, smooth spring motion, dark/light theme support, and interactive contact elements.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nexasoul2.vercel.app",
    githubUrl: "https://github.com/nikhil73x/landingpage",
    featured: true,
  },
];

export function Projects() {
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
              Featured Work &amp; Web Apps
            </h2>
          </div>
        </div>

        {/* Project Cards Grid with clear distinction and elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
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
