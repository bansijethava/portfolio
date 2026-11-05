"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "fallback">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getGmailWebUrl = (name: string, email: string, message: string) => {
    const subject = `Portfolio Message from ${name || "Visitor"}`;
    const body = `Hi Bansi,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      siteConfig.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getMailtoUrl = (name: string, email: string, message: string) => {
    const subject = `Portfolio Message from ${name || "Visitor"}`;
    const body = `Hi Bansi,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setStatus("loading");
    setStatusMsg("");

    const mailSubject = `Portfolio Message from ${formData.name.trim()}`;
    const mailtoUri = getMailtoUrl(formData.name, formData.email, formData.message);

    try {
      // Send directly to personal Gmail via FormSubmit
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: mailSubject,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success === "true" || result?.success === true)) {
        setStatus("success");
        setStatusMsg("Your message was successfully sent directly to Bansi's Gmail!");
      } else {
        // Fallback: trigger email client with pre-filled content
        window.location.href = mailtoUri;
        setStatus("fallback");
        setStatusMsg("Opening your email client to send your message directly to Bansi.");
      }
    } catch {
      // Network fallback
      window.location.href = mailtoUri;
      setStatus("fallback");
      setStatusMsg("Opening your mail client to send your message directly to Bansi.");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
    setStatusMsg("");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white dark:bg-[#080B12] transition-colors duration-200"
    >
      <div className="section-container">
        <div className="w-full border-t border-[#F3F4F6] dark:border-white/[0.10]" />
      </div>
      <div className="section-container py-20 sm:py-28">
        {/* Section Header: Centered */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight"
          >
            Let&apos;s connect and grow.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-slate-400 leading-relaxed">
            Have a question, study discussion, or web development idea? Drop a
            message directly to my inbox or reach out on social media.
          </p>
        </div>

        {/* Centered Connection Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-5 sm:p-7 md:p-9 rounded-3xl bg-white dark:bg-[#0F1520] border-2 border-[#F3F4F6] dark:border-white/[0.10] shadow-card dark:shadow-[0_16px_48px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-[#F3F4F6] dark:border-white/[0.10]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5757] dark:text-[#FF8080]">
                  Connection Form
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white tracking-tight mt-0.5">
                  Send a Message
                </h3>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#FFE6E4] dark:bg-[#FF6B6B]/12 dark:border dark:border-[#FF6B6B]/30 text-[#FF5757] dark:text-[#FF8080] flex items-center justify-center p-2.5">
                <Send className="w-5 h-5" />
              </div>
            </div>

            {status === "success" ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white">
                    Message Sent!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#6B7280] dark:text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out! Your message was delivered directly to{" "}
                    <span className="font-semibold text-[#111827] dark:text-white">
                      {siteConfig.email}
                    </span>
                    . Bansi will get back to you shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs sm:text-sm font-semibold hover:bg-black dark:hover:bg-gray-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={getGmailWebUrl(formData.name, formData.email, formData.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FFE6E4] dark:bg-[#C72A2A]/20 text-[#FF5757] text-xs sm:text-sm font-semibold hover:bg-[#FFD1CD] transition-colors"
                  >
                    <span>Open in Gmail Web</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Fallback notification */}
                {status === "fallback" && (
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span>{statusMsg}</span>
                    <a
                      href={getGmailWebUrl(formData.name, formData.email, formData.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold underline whitespace-nowrap text-[#FF5757]"
                    >
                      Open Gmail Web <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="sender-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-200 mb-2"
                  >
                    Your Name <span className="text-[#FF5757]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9CA3AF] dark:text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="sender-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyanshi Patel"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#09101A] border border-[#E5E7EB] dark:border-white/[0.1] text-[#111827] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5757] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="sender-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-200 mb-2"
                  >
                    Email Address <span className="text-[#FF5757]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9CA3AF] dark:text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="sender-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#09101A] border border-[#E5E7EB] dark:border-white/[0.1] text-[#111827] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5757] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="sender-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#374151] dark:text-slate-200 mb-2"
                  >
                    Your Message <span className="text-[#FF5757]">*</span>
                  </label>
                  <textarea
                    id="sender-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, question, collaboration idea, or discussion topic here..."
                    className="w-full p-4 rounded-2xl bg-[#FAFAFA] dark:bg-[#09101A] border border-[#E5E7EB] dark:border-white/[0.1] text-[#111827] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5757] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Honeypot hidden input for spam bots */}
                <input type="text" name="_honey" style={{ display: "none" }} />

                {/* Action Row */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#FF5757] text-white text-sm font-semibold hover:bg-[#E83E3E] disabled:opacity-70 transition-all shadow-pill dark:shadow-[0_4px_25px_rgba(255,87,87,0.4)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5757]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center text-xs text-[#9CA3AF] dark:text-slate-400">
                    Direct delivery to{" "}
                    <span className="font-semibold text-[#111827] dark:text-slate-100">
                      {siteConfig.email}
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Social Media & Contact Links */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {/* Row 1: Email and Location — 2 col on all screens */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group relative flex items-center gap-2 sm:gap-4 p-3 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F1520] border border-[#E5E7EB] dark:border-white/[0.10] hover:border-gray-300 dark:hover:border-white/[0.18] transition-all shadow-xs"
              >
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#141B2D] border border-gray-200/80 dark:border-white/[0.10] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827] dark:text-slate-100" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#6B7280] dark:text-slate-400 uppercase">
                    EMAIL
                  </p>
                  <p className="text-[11px] sm:text-sm md:text-base font-bold text-[#111827] dark:text-white truncate mt-0.5">
                    {siteConfig.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hidden sm:flex p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-[#FF5757] hover:bg-white dark:hover:bg-[#182030] transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F1520] border border-[#E5E7EB] dark:border-white/[0.10] shadow-xs">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#141B2D] border border-gray-200/80 dark:border-white/[0.10] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827] dark:text-slate-100" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#6B7280] dark:text-slate-400 uppercase">
                    LOCATION
                  </p>
                  <p className="text-[11px] sm:text-sm md:text-base font-bold text-[#111827] dark:text-white truncate mt-0.5">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Social pills — 3 col on all screens */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* GitHub Pill */}
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2.5 sm:py-3.5 px-2 sm:px-6 rounded-full bg-[#F8FAFC] dark:bg-[#0F1520] border border-[#E5E7EB] dark:border-white/[0.10] hover:bg-white dark:hover:bg-[#141B2D] hover:border-gray-300 dark:hover:border-white/[0.18] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-xs sm:text-sm font-semibold text-[#111827] dark:text-white transition-all group"
              >
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <GitHubIcon className="w-4 h-4 text-[#111827] dark:text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-[11px] sm:text-sm">GitHub</span>
                </span>
              </Link>

              {/* LinkedIn Pill */}
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2.5 sm:py-3.5 px-2 sm:px-6 rounded-full bg-[#F8FAFC] dark:bg-[#0F1520] border border-[#E5E7EB] dark:border-white/[0.10] hover:bg-white dark:hover:bg-[#141B2D] hover:border-gray-300 dark:hover:border-white/[0.18] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-xs sm:text-sm font-semibold text-[#111827] dark:text-white transition-all group"
              >
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-[11px] sm:text-sm">LinkedIn</span>
                </span>
              </Link>

              {/* Instagram Pill */}
              <Link
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2.5 sm:py-3.5 px-2 sm:px-6 rounded-full bg-[#F8FAFC] dark:bg-[#0F1520] border border-[#E5E7EB] dark:border-white/[0.10] hover:bg-white dark:hover:bg-[#141B2D] hover:border-gray-300 dark:hover:border-white/[0.18] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-xs sm:text-sm font-semibold text-[#111827] dark:text-white transition-all group"
              >
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <InstagramIcon className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-[11px] sm:text-sm">Instagram</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
