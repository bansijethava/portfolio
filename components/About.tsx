import { siteConfig } from "@/lib/site-config";
import { Sparkles, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 bg-white dark:bg-[#080B12] border-t border-[#F3F4F6] dark:border-white/[0.10] transition-colors duration-200"
    >
      <div className="section-container">
        {/* Section Header: Aligned Left Matching Other Sections */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Background &amp; Mindset</span>
          </div>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight"
          >
            A little about me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-slate-400 leading-relaxed">
            Computer Engineering student focused on building clean, practical web experiences.
          </p>
        </div>

        {/* Narrative & Philosophy Content - Aligned Left */}
        <div className="max-w-3xl space-y-4 text-sm sm:text-base text-[#4B5563] dark:text-slate-200 leading-relaxed font-normal">
          <p>
            I am a{" "}
            <strong className="text-[#111827] dark:text-white font-bold">
              Diploma Computer Engineering
            </strong>{" "}
            student at AVPTI GTU College, Rajkot. Having completed Semesters 1,
            2, and 3, I have built a solid foundation in{" "}
            <strong className="text-[#111827] dark:text-white font-semibold">
              C, Python, Data Structures &amp; Algorithms (DSA in C)
            </strong>
            , and{" "}
            <strong className="text-[#111827] dark:text-white font-semibold">
              SQL databases
            </strong>
            .
          </p>
          <p>
            My primary passion is{" "}
            <strong className="text-[#111827] dark:text-white font-bold">
              web development
            </strong>
            . I enjoy translating logic into clean, responsive, and
            user-friendly interfaces while continuously learning and building.
          </p>

          {/* Clean Inline Motto Aligned Left */}
          <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-medium italic text-[#111827] dark:text-slate-100">
            <Heart className="w-4 h-4 text-[#FF5757] dark:text-[#FF8080] fill-[#FF5757] dark:fill-[#FF7D77] flex-shrink-0" />
            <span>&ldquo;{siteConfig.philosophy}&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
