import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-white dark:bg-[#0A0D14] transition-colors duration-200"
    >
      <div className="section-container relative">
        {/* Main Center Title Layout */}
        <div className="relative text-center max-w-4xl mx-auto z-0">
          {/* Hand-drawn playful doodle marks on top left */}
          <div
            className="hidden sm:block absolute -top-3 left-8 md:left-24 text-[#FFAEAB] dark:text-[#FF7D77]/50 pointer-events-none select-none"
            aria-hidden="true"
          >
            <svg
              className="w-10 h-10 -rotate-12 animate-float"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M6 30 C12 24, 18 16, 22 8" />
              <path d="M14 34 C20 28, 26 20, 30 12" />
              <path d="M22 38 C28 32, 34 24, 38 16" />
            </svg>
          </div>

          {/* Heading matching the reference: "I'm Bansi, Computer Engineer" */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-[#111827] dark:text-white leading-[1.1] select-none break-words">
            I&apos;m{" "}
            <span className="text-[#FF5757] dark:text-[#FF6666] dark:drop-shadow-[0_0_35px_rgba(255,87,87,0.45)] inline-block font-extrabold">
              {siteConfig.firstName}
            </span>
            ,<br />
            <span className="block text-[#111827] dark:text-white tracking-tight mt-1 sm:mt-2">
              {siteConfig.role}
            </span>
          </h1>
        </div>

        {/* Central Stage: Circle Backdrop, Overlapping Portrait & Flanking Details */}
        <div className="relative -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 max-w-5xl mx-auto flex flex-col items-center">
          {/* Portrait & Circle Composition Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] flex flex-col items-center justify-end">
            {/* Ambient Halo Glow for Dark Mode */}
            <div
              className="hidden dark:block absolute top-12 sm:top-16 md:top-20 lg:top-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#FF5757]/20 blur-3xl -z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Pastel Circular Backdrop (Coral Pink Arch Disc) */}
            <div
              className="absolute top-12 sm:top-16 md:top-20 lg:top-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#FFB6B0] dark:bg-gradient-to-tr dark:from-[#FF5757]/30 dark:via-[#FF7D77]/20 dark:to-transparent dark:border dark:border-[#FF5757]/30 dark:shadow-[0_0_60px_rgba(255,87,87,0.2)] z-0 shadow-sm transition-all duration-300"
              aria-hidden="true"
            />

            {/* Bansi's Transparent Cutout Portrait */}
            <div className="relative z-10 w-full flex items-end justify-center">
              <Image
                src={siteConfig.cutoutPath}
                alt="Bansi Jethava, Diploma Computer Engineering student"
                width={500}
                height={620}
                priority
                className="w-auto h-auto max-h-[380px] sm:max-h-[460px] md:max-h-[500px] lg:max-h-[540px] object-contain object-bottom select-none drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>

            {/* Floating Glassmorphism Pill Switcher (Pinned over lower torso) */}
            <div className="absolute -bottom-3 sm:-bottom-4 z-30 flex items-center justify-center w-full px-2 sm:px-4">
              <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-white/90 dark:bg-[#121722]/85 dark:backdrop-blur-xl border border-white/90 dark:border-white/[0.12] shadow-glass dark:shadow-[0_12px_36px_rgba(0,0,0,0.7)] transition-colors">
                <Link
                  href="#skills"
                  className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#FF5757] text-white text-xs sm:text-sm font-bold shadow-pill dark:shadow-[0_4px_20px_rgba(255,87,87,0.45)] hover:bg-[#E83E3E] transition-all flex items-center gap-1.5 group"
                >
                  <span>Portfolio ↗</span>
                </Link>

                <Link
                  href="#contact"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[#374151] dark:text-slate-300 hover:text-[#111827] dark:hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Hire me</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Flanking Content: Visible on large desktop screens (lg: 1024px+) to prevent overlapping on tablet viewports */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
            {/* Left Column: Quote / Philosophy */}
            <div className="absolute left-2 lg:left-6 top-1/2 -translate-y-6 max-w-[220px] pointer-events-auto text-left">
              <span className="text-4xl font-serif text-[#111827] dark:text-[#FF7D77] font-bold leading-none block mb-1">
                &ldquo;
              </span>
              <p className="text-xs sm:text-sm font-normal text-[#4B5563] dark:text-slate-300 leading-snug">
                {siteConfig.philosophy}
              </p>
              <span className="text-[11px] font-semibold text-[#9CA3AF] dark:text-slate-400 mt-2 block">
                Personal Philosophy
              </span>
            </div>

            {/* Right Column: 5 Stars + Verified Academic Status */}
            <div className="absolute right-2 lg:right-6 top-1/2 -translate-y-6 max-w-[220px] pointer-events-auto text-right">
              <div className="flex items-center gap-1 justify-end text-[#FF5757] mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF5757] text-[#FF5757] dark:drop-shadow-[0_0_8px_rgba(255,87,87,0.6)]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-[#111827] dark:text-white tracking-tight block">
                3rd Sem Done
              </span>
              <span className="text-xs text-[#6B7280] dark:text-slate-400 font-medium block mt-0.5">
                AVPTI GTU College, Rajkot
              </span>
            </div>
          </div>

          {/* Mobile & Tablet Flanking Elements: Clean 2-card row beneath portrait for screens under 1024px */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full max-w-md mt-8 sm:mt-10 lg:hidden px-2">
            {/* Left: Motto */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAFAFA] dark:bg-[#121722] border border-[#F3F4F6] dark:border-white/[0.08] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-left">
              <span className="text-2xl font-serif text-[#111827] dark:text-[#FF7D77] font-bold leading-none block mb-0.5">
                &ldquo;
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#4B5563] dark:text-slate-300 leading-snug line-clamp-3">
                {siteConfig.philosophy}
              </p>
            </div>

            {/* Right: Academic Status */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAFAFA] dark:bg-[#121722] border border-[#F3F4F6] dark:border-white/[0.08] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-right flex flex-col items-end justify-between">
              <div className="flex items-center gap-0.5 text-[#FF5757] mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#FF5757] text-[#FF5757] dark:drop-shadow-[0_0_8px_rgba(255,87,87,0.6)]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-[#111827] dark:text-white tracking-tight block">
                  3rd Sem Done
                </span>
                <span className="text-[11px] text-[#6B7280] dark:text-slate-400">
                  AVPTI Rajkot
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle / Stated Programming Foundation */}
          <div className="mt-8 text-center max-w-2xl px-4">
            <p className="text-sm text-[#6B7280] dark:text-slate-400 leading-relaxed">
              Diploma student at{" "}
              <strong className="text-[#111827] dark:text-white font-semibold">
                AVPTI GTU College, Rajkot
              </strong>
              . Completed Semesters 1, 2 &amp; 3 with strong foundations in{" "}
              <strong className="text-[#FF5757] dark:text-[#FF7D77] font-semibold">
                C, Python, full DSA, and SQL
              </strong>
              , now actively building toward modern web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
