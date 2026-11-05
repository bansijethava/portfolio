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
} from "lucide-react";

export default function Skills() {
  const pillarIcons: Record<string, React.ReactNode> = {
    "C Programming": <Code2 className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />,
    "Python Programming": <Code2 className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />,
    "Data Structures & Algorithms": (
      <Binary className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />
    ),
    "SQL & Relational Databases": (
      <Database className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />
    ),
    "Operating Systems": (
      <Cpu className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />
    ),
    "Digital Logic & C++": (
      <Layers className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />
    ),
    "Responsive Web Development": (
      <Globe className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />
    ),
    "Modern Frontend": (
      <Sparkles className="w-6 h-6 text-[#FF5757] dark:text-[#FF8080]" />
    ),
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-white dark:bg-[#080B12] transition-colors duration-200"
    >
      <div className="section-container">
        <div className="w-full border-t border-[#F3F4F6] dark:border-white/[0.10]" />
      </div>
      <div className="section-container py-20 sm:py-28">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] text-xs font-bold uppercase tracking-wider mb-3">
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
              <div className="pb-3 border-b border-[#E5E7EB] dark:border-white/[0.10]">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mt-0.5">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill) => {
                  return (
                    <div
                      key={skill.name}
                      className="p-5 sm:p-7 md:p-8 rounded-3xl bg-white dark:bg-[#0F1520] border border-[#F3F4F6] dark:border-white/[0.10] shadow-card hover:border-[#FFD1CD] dark:hover:border-[#FF6B6B]/45 hover:shadow-elevated dark:hover:shadow-[0_8px_32px_rgba(255,107,107,0.18)] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Card Top Meta */}
                        <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 flex items-center justify-center flex-shrink-0">
                            {pillarIcons[skill.name] || (
                              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5757] dark:text-[#FF8080]" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[15px] sm:text-lg font-bold text-[#111827] dark:text-white tracking-tight whitespace-nowrap">
                              {skill.name}
                            </h4>
                          </div>
                        </div>

                        {/* Description Context */}
                        <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-200 leading-relaxed mt-2">
                          {skill.context}
                        </p>
                      </div>

                      {/* Key Competencies List */}
                      <div className="mt-5 pt-4 border-t border-[#F3F4F6] dark:border-white/[0.10]">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] dark:text-slate-400 block mb-2.5">
                          Key Competencies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.keyTopics.map((topic, i) => (
                            <span
                              key={i}
                              className="text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-[#FAFAFA] dark:bg-[#141B2D] border border-[#F3F4F6] dark:border-white/[0.08] text-[#1F2937] dark:text-slate-100 font-medium flex items-center gap-1.5 whitespace-nowrap hover:dark:border-[#FF6B6B]/30 transition-colors"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#FF5757] dark:text-[#FF8080] flex-shrink-0" />
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
