import { educationData } from "@/lib/portfolio-data";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 sm:py-28 bg-white dark:bg-[#0A0D14] border-t border-[#F3F4F6] dark:border-white/[0.08] transition-colors duration-200"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 text-[#FF5757] dark:text-[#FF7D77] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Academic Background</span>
          </div>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight"
          >
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-slate-400 leading-relaxed">
            Academic credentials, coursework foundations, and technical education
            at AVPTI GTU College, Rajkot.
          </p>
        </div>

        {/* Institution Highlight Header Card */}
        <div className="relative p-5 sm:p-7 md:p-9 rounded-3xl bg-white dark:bg-[#131926] border-2 border-[#FFE6E4] dark:border-white/[0.08] shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-elevated transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-6 border-b border-[#F3F4F6] dark:border-white/[0.08]">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFE6E4] dark:bg-[#FF5757]/15 dark:border dark:border-[#FF5757]/30 text-[#FF5757] dark:text-[#FF7D77] flex items-center justify-center flex-shrink-0 p-2.5 sm:p-3 shadow-sm">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5757] dark:text-[#FF7D77]">
                  GTU Affiliated Diploma Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white tracking-tight mt-0.5 break-words">
                  {educationData.degree} in {educationData.field}
                </h3>
                <p className="text-sm font-semibold text-[#111827] dark:text-slate-200 mt-1">
                  {educationData.institution}
                </p>
              </div>
            </div>

            {/* Academic Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FFF5F5] dark:bg-[#182030] border border-[#FFD1CD] dark:border-[#FF5757]/30 text-xs font-bold text-[#FF5757] dark:text-[#FF7D77]">
                <Calendar className="w-3.5 h-3.5 text-[#FF5757] dark:text-[#FF7D77]" />
                <span>3rd Semester Completed</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <Award className="w-3.5 h-3.5" />
                <span>Semesters 1, 2 &amp; 3 Cleared</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#182030] border border-[#F3F4F6] dark:border-white/[0.06]">
              <MapPin className="w-4 h-4 text-[#FF5757] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-[#9CA3AF] dark:text-slate-400 font-semibold uppercase tracking-wider">Location</p>
                <p className="font-semibold text-[#111827] dark:text-slate-100 truncate">{educationData.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#182030] border border-[#F3F4F6] dark:border-white/[0.06]">
              <Layers className="w-4 h-4 text-[#FF5757] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-[#9CA3AF] dark:text-slate-400 font-semibold uppercase tracking-wider">Core CSE Subjects</p>
                <p className="font-semibold text-[#111827] dark:text-slate-100 truncate">15 Rigorous Subjects</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#182030] border border-[#F3F4F6] dark:border-white/[0.06]">
              <Sparkles className="w-4 h-4 text-[#FF5757] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-[#9CA3AF] dark:text-slate-400 font-semibold uppercase tracking-wider">Technical Milestones</p>
                <p className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-slate-100 truncate">C &bull; Python &bull; Full DSA &bull; SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
