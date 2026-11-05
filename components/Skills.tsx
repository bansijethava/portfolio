import { skillsData } from "@/lib/portfolio-data";
import {
  Code2,
  Database,
  Binary,
  Cpu,
  Layers,
  Globe,
  CheckCircle2,
  Sparkles,
  Check,
} from "lucide-react";

export default function Skills() {
  const pillarIcons: Record<string, React.ReactNode> = {
    "C Programming Language": <Code2 className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />,
    "Python Programming": <Code2 className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />,
    "Data Structures & Algorithms (DSA in C)": (
      <Binary className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />
    ),
    "SQL & Relational Databases (RDBMS)": (
      <Database className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />
    ),
    "Operating Systems & Systems Architecture": (
      <Cpu className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />
    ),
    "Digital Logic Design & Object-Oriented C++": (
      <Layers className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />
    ),
    "Responsive Web Development & UI Design": (
      <Globe className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />
    ),
    "Modern Frontend Ecosystem": (
      <Sparkles className="w-6 h-6 text-[#FF5757] dark:text-[#FF7D77]" />
    ),
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-28 bg-white dark:bg-[#0A0D14] border-t border-[#F3F4F6] dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 text-[#FF5757] dark:text-[#FF7D77] text-xs font-bold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight"
          >
            Skills &amp; Technical Languages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-slate-400 leading-relaxed">
            A comprehensive overview of programming languages, computer science
            disciplines, and database systems completed across coursework and
            dedicated practical implementation.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.title} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB] dark:border-white/[0.08]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-semibold text-[#FF5757] dark:text-[#FF7D77] bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 px-3.5 py-1 rounded-full">
                  {category.badge}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill) => {
                  const isCompleted = skill.status === "completed";

                  return (
                    <div
                      key={skill.name}
                      className="p-5 sm:p-7 md:p-8 rounded-3xl bg-white dark:bg-[#131926] border border-[#F3F4F6] dark:border-white/[0.08] shadow-card hover:border-[#FFD1CD] dark:hover:border-[#FF5757]/40 hover:shadow-elevated dark:hover:shadow-[0_8px_30px_rgba(255,87,87,0.12)] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Card Top Meta */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div className="flex items-start sm:items-center gap-3 min-w-0">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 flex items-center justify-center flex-shrink-0">
                              {pillarIcons[skill.name] || (
                                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5757] dark:text-[#FF7D77]" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base sm:text-lg font-bold text-[#111827] dark:text-white tracking-tight break-words">
                                {skill.name}
                              </h4>
                            </div>
                          </div>

                          {/* Level Badge */}
                          <span
                            className={`self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                              isCompleted
                                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/60 flex items-center gap-1"
                                : "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/60"
                            }`}
                          >
                            {isCompleted && <Check className="w-3 h-3" />}
                            {skill.level}
                          </span>
                        </div>

                        {/* Description Context */}
                        <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 leading-relaxed mt-2">
                          {skill.context}
                        </p>
                      </div>

                      {/* Key Competencies List */}
                      <div className="mt-5 pt-4 border-t border-[#F3F4F6] dark:border-white/[0.08]">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] dark:text-slate-400 block mb-2.5">
                          Key Competencies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.keyTopics.map((topic, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-lg bg-[#FAFAFA] dark:bg-[#182030] border border-[#F3F4F6] dark:border-white/[0.06] text-[#1F2937] dark:text-slate-200 font-medium flex items-center gap-1.5 hover:dark:border-[#FF5757]/30 transition-colors"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#FF5757] dark:text-[#FF7D77]" />
                              <span>{topic}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
