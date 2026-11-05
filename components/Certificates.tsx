"use client";

import { useState } from "react";
import Image from "next/image";
import { certificatesData, CertificateItem } from "@/lib/portfolio-data";
import {
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
  FileText,
  X,
  ExternalLink,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="bg-white dark:bg-[#080B12] transition-colors duration-200"
    >
      <div className="section-container">
        <div className="w-full border-t border-[#F3F4F6] dark:border-white/[0.10]" />
      </div>
      <div className="section-container py-20 sm:py-28">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Verified Recognition</span>
          </div>
          <h2
            id="certificates-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight"
          >
            Certificates &amp; Achievements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-slate-400 leading-relaxed">
            Verified credentials and technical event certifications.
          </p>
        </div>

        {/* Certificates Grid / Stack */}
        <div className="space-y-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="relative rounded-3xl bg-white dark:bg-[#0F1520] border border-[#E5E7EB] dark:border-white/[0.10] shadow-card hover:shadow-elevated transition-all overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5757] via-[#FF8A7A] to-[#FF5757]" />

              <div className="p-6 sm:p-8 md:p-9">
                {/* Header Meta: Event Type, Date, Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#F3F4F6] dark:border-white/[0.10]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap">
                      <Sparkles className="w-3 h-3 flex-shrink-0" />
                      <span>{cert.type}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#141B2D] text-[#4B5563] dark:text-slate-200 text-[11px] sm:text-xs font-medium whitespace-nowrap">
                      <Building2 className="w-3 h-3 text-[#FF5757] dark:text-[#FF8080] flex-shrink-0" />
                      <span>{cert.organizer}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium text-[#6B7280] dark:text-slate-400 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5757] dark:text-[#FF8080] flex-shrink-0" />
                      <span>{cert.date}</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5757] dark:text-[#FF8080] flex-shrink-0" />
                      <span>{cert.location}</span>
                    </span>
                  </div>
                </div>

                {/* Main Certificate Content */}
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FF5757] dark:text-[#FF8080] mb-1">
                        <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate whitespace-nowrap">Event: {cert.eventName} &bull; {cert.symposium}</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#111827] dark:text-white tracking-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#4B5563] dark:text-slate-200 mt-1 whitespace-nowrap">
                        Awarded to: <strong className="text-[#111827] dark:text-white font-bold">{cert.recipient}</strong>
                      </p>
                    </div>

                    {/* Short concise overview */}
                    <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-200 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Demonstrated Chips */}
                    <div className="pt-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-slate-400 block mb-2">
                        Core Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {cert.skillsDemonstrated.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-[#F8FAFC] dark:bg-[#141B2D] border border-[#E5E7EB] dark:border-white/[0.08] text-[#1F2937] dark:text-slate-100 font-medium whitespace-nowrap"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#FF5757] dark:text-[#FF8080] flex-shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Compact Verification Card & Button */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#09101A] border border-[#E5E7EB] dark:border-white/[0.10] space-y-2.5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111827] dark:text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF5757] dark:text-[#FF8080]" />
                        <span>Issued &amp; Verified By</span>
                      </h4>
                      <div className="text-xs text-[#4B5563] dark:text-slate-200 space-y-1">
                        <p className="font-semibold text-[#111827] dark:text-white">
                          {cert.organizer}
                        </p>
                        {cert.supporters && cert.supporters.length > 0 && (
                          <>
                            <p className="text-[11px] text-[#6B7280] dark:text-slate-400">
                              {cert.supporters[0]}
                            </p>
                            {cert.supporters[1] && (
                              <p className="text-[11px] text-[#6B7280] dark:text-slate-400">
                                {cert.supporters[1]}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Button to View Certificate Photo */}
                    {cert.imagePath && (
                      <button
                        type="button"
                        onClick={() => setSelectedCertificate(cert)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#141B2D] border border-[#E5E7EB] dark:border-white/[0.1] text-xs sm:text-sm font-semibold text-[#111827] dark:text-white hover:text-[#FF5757] dark:hover:text-[#FF7D77] hover:border-[#FF5757]/40 dark:hover:border-[#FF6B6B]/45 hover:shadow-sm transition-all"
                      >
                        <FileText className="w-4 h-4 text-[#FF5757] dark:text-[#FF8080]" />
                        <span>View Original Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Viewer"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-[#0F1520] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/[0.12]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/[0.10] bg-[#FAFAFA] dark:bg-[#09101A]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5757] dark:text-[#FF8080]">
                  {selectedCertificate.symposium} &bull; {selectedCertificate.eventName}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#111827] dark:text-white">
                  {selectedCertificate.title} — {selectedCertificate.recipient}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="p-2 rounded-full text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/[0.1] transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="relative aspect-[4/3] w-full bg-slate-900 max-h-[75vh]">
              {selectedCertificate.imagePath && (
                <Image
                  src={selectedCertificate.imagePath}
                  alt={`${selectedCertificate.title} for ${selectedCertificate.recipient} at ${selectedCertificate.symposium}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-[#FAFAFA] dark:bg-[#09101A] border-t border-gray-200 dark:border-white/[0.10] flex items-center justify-between text-xs text-[#6B7280] dark:text-slate-400">
              <span>{selectedCertificate.organizer}</span>
              <span className="font-semibold">{selectedCertificate.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
