"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { GraduationCap, MapPin, Sparkles, Terminal } from "lucide-react";

export default function PortraitCard() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-md lg:max-w-none">
      {/* Decorative ambient backdrop */}
      <div
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#DCE6F2] via-[#E2E8F0] to-[#DCE6F2]/30 opacity-70 blur-lg -z-10"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] shadow-card transition-all hover:shadow-elevated">
        {/* Top Header Bar of the Portrait Container */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#243B65]">
              Active Learner
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#64748B] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
            3rd Sem • CE
          </span>
        </div>

        {/* Portrait or Elegant Fallback Frame */}
        <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-[#F8FAFC] to-[#DCE6F2]/40 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {!imageError ? (
            <Image
              src={siteConfig.portraitPath}
              alt="Bansi Jethava, Diploma Computer Engineering student"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              priority
              className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Polished Identity Avatar Container when image file is awaiting upload */
            <div className="flex flex-col items-center justify-center space-y-4 max-w-[260px]">
              {/* Monogram Badge */}
              <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-[#243B65] text-white shadow-elevated border-2 border-white">
                <span className="text-3xl font-bold tracking-tight">BJ</span>
                <div
                  className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#DCE6F2] text-[#243B65] border-2 border-white"
                  title="Diploma Student"
                >
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827]">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Computer Engineering Student
                </p>
              </div>

              {/* Verified College Tag */}
              <div className="w-full pt-2 border-t border-[#E2E8F0]/80">
                <p className="text-xs font-medium text-[#243B65] flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>AVPTI GTU College, Rajkot</span>
                </p>
                <p className="text-[11px] text-[#64748B] mt-1 font-mono">
                  Asset path: public/images/bansi-portrait.jpg
                </p>
              </div>
            </div>
          )}

          {/* Floating Subtle Focus Tag */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-[#E2E8F0] shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DCE6F2] text-[#243B65] flex items-center justify-center flex-shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-[10px] uppercase font-semibold text-[#64748B] tracking-wider">
                Current Focus
              </span>
              <span className="text-xs font-semibold text-[#111827] truncate">
                C Programming Fundamentals
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-[#243B65] ml-auto flex-shrink-0" />
          </div>
        </div>

        {/* Lower Card Info */}
        <div className="px-5 py-3.5 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
          <span>Diploma in CE</span>
          <span className="inline-flex items-center gap-1 font-medium text-[#243B65]">
            GTU Affiliated
          </span>
        </div>
      </div>
    </div>
  );
}
