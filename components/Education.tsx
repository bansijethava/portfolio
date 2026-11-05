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
      className="py-20 sm:py-28 bg-white dark:bg-[#080B12] border-t border-[#F3F4F6] dark:border-white/[0.10] transition-colors duration-200"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] text-xs font-bold uppercase tracking-wider mb-3">
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
        <div className="relative p-5 sm:p-7 md:p-9 rounded-3xl bg-white dark:bg-[#0F1520] border-2 border-[#FFE6E4] dark:border-white/[0.10] shadow-card dark:shadow-[0_8px_36px_rgba(0,0,0,0.7)] hover:shadow-elevated transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-[#F3F4F6] dark:border-white/[0.10]">
            <div className="space-y-1.5 sm:space-y-2">
              {/* Top Row: Icon + Program Badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] flex items-center justify-center flex-shrink-0 p-1.5 sm:p-2 shadow-sm">
                  <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF5757] dark:text-[#FF8080] whitespace-nowrap">
                  GTU Diploma Program
                </span>
              </div>

              {/* Title & Institution: Given full width so it stays on a clean single line */}
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#111827] dark:text-white tracking-tight whitespace-nowrap sm:whitespace-normal">
                {educationData.degree} in {educationData.field}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4B5563] dark:text-slate-200 whitespace-nowrap sm:whitespace-normal">
                AVPTI GTU College, Rajkot
              </p>
            </div>

            {/* Academic Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FFF5F5] dark:bg-[#141B2D] border border-[#FFD1CD] dark:border-[#FF6B6B]/30 text-[11px] sm:text-xs font-bold text-[#FF5757] dark:text-[#FF8080] whitespace-nowrap">
                <Calendar className="w-3 h-3 text-[#FF5757] dark:text-[#FF8080]" />
                <span>3rd Sem Completed</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-[11px] sm:text-xs font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                <Award className="w-3 h-3" />
                <span>Sem 1, 2 &amp; 3 Cleared</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#141B2D] border border-[#F3F4F6] dark:border-white/[0.08]">
              <MapPin className="w-4 h-4 text-[#FF5757] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-[#9CA3AF] dark:text-slate-400 font-semibold uppercase tracking-wider">Location</p>
                <p className="font-semibold text-[#111827] dark:text-slate-100 text-xs sm:text-sm truncate whitespace-nowrap">Rajkot, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#141B2D] border border-[#F3F4F6] dark:border-white/[0.08]">
              <Layers className="w-4 h-4 text-[#FF5757] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-[#9CA3AF] dark:text-slate-400 font-semibold uppercase tracking-wider">Core CSE Subjects</p>
                <p className="font-semibold text-[#111827] dark:text-slate-100 text-xs sm:text-sm truncate whitespace-nowrap">15 Rigorous Subjects</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#141B2D] border border-[#F3F4F6] dark:border-white/[0.08]">
              <Sparkles className="w-4 h-4 text-[#FF5757] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-[#9CA3AF] dark:text-slate-400 font-semibold uppercase tracking-wider">Technical Milestones</p>
                <p className="font-semibold text-[#111827] dark:text-slate-100 text-[11px] sm:text-sm truncate whitespace-nowrap">C &bull; Python &bull; DSA &bull; SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
