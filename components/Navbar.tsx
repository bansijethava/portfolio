"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, Moon, Sun } from "lucide-react";
import { InstagramIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // If mobile menu is open, don't hide navbar
      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      // Immediately hide navbar while actively scrolling (up or down)
      setIsVisible(false);

      // Reset timer
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // When user stops scrolling, bring navbar back into view in a fraction of a second
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open on small screens
  useEffect(() => {
    if (mobileMenuOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-transparent transition-all duration-300 ease-in-out ${
        scrolled ? "py-2.5 sm:py-3.5" : "py-3.5 sm:py-5"
      } ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LHS: Brand Name */}
        <Link
          href="#home"
          className="select-none group px-3 py-1.5 rounded-full bg-[#FFF2F1] dark:bg-[#131926] border border-[#FFD6D3] dark:border-[#FF5757]/30 shadow-[0_4px_20px_rgba(255,87,87,0.08)] dark:shadow-[0_4px_25px_rgba(255,87,87,0.15)] backdrop-blur-md lg:bg-transparent lg:border-0 lg:shadow-none lg:p-0"
          aria-label="Bansi Jethava - Home"
        >
          <span className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#111827] dark:text-white leading-tight">
            Bansi{" "}
            <span className="text-[#FF5757] dark:text-[#FF7D77] font-bold">
              Jethava
            </span>
          </span>
        </Link>

        {/* RHS: Navigation Menu Capsule Pill (Desktop) matching reference */}
        <div className="hidden lg:flex items-center rounded-full bg-[#FFF2F1] dark:bg-[#131926] border border-[#FFD6D3] dark:border-[#FF5757]/30 shadow-[0_4px_20px_rgba(255,87,87,0.08)] dark:shadow-[0_4px_25px_rgba(255,87,87,0.15)] px-3.5 xl:px-5 py-1.5 xl:py-2 backdrop-blur-md">
          {/* Menu Items */}
          <nav
            className="flex items-center gap-0.5 xl:gap-1.5"
            aria-label="Main Navigation"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold text-[#1F2937] dark:text-slate-200 hover:text-[#FF5757] dark:hover:text-[#FF7D77] hover:bg-[#FFE4E1] dark:hover:bg-[#FF5757]/15 transition-colors focus-visible:ring-2 focus-visible:ring-[#FF5757]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-[#FFD1CD] dark:bg-white/20 mx-2 xl:mx-3" />

          {/* Social Icons & Theme Toggle inside Capsule Pill */}
          <div className="flex items-center gap-1 xl:gap-1.5">
            <Link
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-gray-700 dark:text-slate-300 hover:text-[#E1306C] hover:bg-[#FFE4E1] dark:hover:bg-white/[0.08] transition-colors"
              title="Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </Link>

            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-[#FFE4E1] dark:hover:bg-white/[0.08] transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </Link>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-[#FFE4E1] dark:hover:bg-white/[0.08] transition-colors border-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ring-0"
              title={
                mounted && theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              aria-label={
                mounted && theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform hover:-rotate-12" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Compact Pill */}
        <div className="flex lg:hidden items-center rounded-full bg-[#FFF2F1] dark:bg-[#131926] border border-[#FFD6D3] dark:border-[#FF5757]/30 shadow-[0_4px_20px_rgba(255,87,87,0.08)] dark:shadow-[0_4px_25px_rgba(255,87,87,0.15)] px-2.5 py-1.5 gap-1 backdrop-blur-md">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-gray-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-[#FFE4E1] dark:hover:bg-white/[0.08] transition-colors border-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ring-0"
            aria-label="Toggle dark/light theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-gray-800 dark:text-white hover:bg-[#FFE4E1] dark:hover:bg-white/[0.08] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-2 animate-in fade-in slide-in-from-top-2">
          <div className="p-4 rounded-3xl bg-[#FFF2F1] dark:bg-[#131926] border border-[#FFD6D3] dark:border-[#FF5757]/30 shadow-xl dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <nav
              className="flex flex-col space-y-1"
              aria-label="Mobile Navigation Menu"
            >
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-gray-800 dark:text-slate-200 hover:bg-[#FFE4E1] dark:hover:bg-[#FF5757]/15 hover:text-[#FF5757] dark:hover:text-[#FF7D77] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-3 mt-2 border-t border-[#FFD6D3] dark:border-white/[0.08] flex items-center justify-around">
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 dark:text-slate-200 hover:text-[#FF5757]"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#0A66C2]"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#E1306C]"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
