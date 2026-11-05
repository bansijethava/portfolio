import { projects, Project } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";
import { FolderGit2, Sparkles, ExternalLink, Code } from "lucide-react";
import { GitHubIcon } from "./Icons";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const hasProjects = projects && projects.length > 0;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 sm:py-28 bg-white dark:bg-[#0A0D14] border-t border-[#F3F4F6] dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 text-[#FF5757] dark:text-[#FF7D77] text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Practical Work</span>
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-slate-400 leading-relaxed">
            Applied programming exercises and software projects as I build them.
          </p>
        </div>

        {hasProjects ? (
          /* When real projects are added to lib/portfolio-data.ts */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project: Project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-3xl bg-white dark:bg-[#131926] border border-[#F3F4F6] dark:border-white/[0.08] shadow-card overflow-hidden hover:shadow-elevated dark:hover:border-[#FF5757]/30 transition-all"
              >
                {project.screenshot && (
                  <div className="relative aspect-video w-full bg-[#FAFAFA] dark:bg-[#182030] border-b border-[#F3F4F6] dark:border-white/[0.08]">
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-[#FFF5F5] dark:bg-[#182030] border border-[#FFE6E4] dark:border-white/[0.08] text-[#FF5757] dark:text-[#FF7D77] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.learnings && project.learnings.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#F3F4F6] dark:border-white/[0.08]">
                        <span className="text-xs font-semibold text-[#9CA3AF] dark:text-slate-400 block mb-1">
                          Key Learnings:
                        </span>
                        <ul className="list-disc list-inside text-xs text-[#6B7280] dark:text-slate-400 space-y-1">
                          {project.learnings.map((learning, i) => (
                            <li key={i}>{learning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Links Row - only displayed if URLs exist */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-6 pt-4 border-t border-[#F3F4F6] dark:border-white/[0.08] flex items-center gap-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5757] dark:text-[#FF7D77] hover:underline"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] dark:text-slate-400 hover:text-[#111827] dark:hover:text-white"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Polished, intentional empty state */
          <div className="relative rounded-3xl bg-white dark:bg-[#131926] border-2 border-dashed border-[#FFD1CD] dark:border-white/[0.12] p-5 sm:p-10 md:p-14 text-center max-w-3xl mx-auto overflow-hidden shadow-card dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <div className="relative z-10 flex flex-col items-center">
              {/* Abstract Icon Frame */}
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-3xl bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 text-[#FF5757] dark:text-[#FF7D77] mb-5 sm:mb-6 p-3 sm:p-4">
                <Code className="w-7 h-7 sm:w-9 sm:h-9" />
                <div
                  className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 p-1 sm:p-1.5 rounded-full bg-[#FF5757] text-white border-2 border-white dark:border-[#131926] shadow-sm"
                  aria-hidden="true"
                >
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>

              {/* Required Heading */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827] dark:text-white tracking-tight">
                Good things are being built.
              </h3>

              {/* Required Copy */}
              <p className="mt-3 text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 max-w-lg leading-relaxed font-normal">
                I&apos;m strengthening my programming foundation and preparing to
                turn what I learn into practical projects. This space will grow
                as I build and share my work.
              </p>

              {/* Learning Focus Tag & GitHub Link */}
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#FFF5F5] dark:bg-[#182030] border border-[#FFE6E4] dark:border-[#FF5757]/30 text-xs font-semibold text-[#FF5757] dark:text-[#FF7D77] text-center">
                  <span className="w-2 h-2 rounded-full bg-[#FF5757] animate-pulse flex-shrink-0" />
                  <span>Upcoming: C programming repositories &amp; web projects</span>
                </div>
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white dark:bg-[#182030] border border-gray-200 dark:border-white/[0.1] text-xs font-semibold text-gray-800 dark:text-slate-100 hover:text-[#FF5757] dark:hover:text-[#FF7D77] hover:dark:border-[#FF5757]/40 transition-all shadow-xs"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 dark:text-slate-500" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

