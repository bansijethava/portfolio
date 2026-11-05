import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0A0D14] border-t border-[#F3F4F6] dark:border-white/[0.08] py-8 sm:py-10 text-[#6B7280] dark:text-slate-400 transition-colors duration-200">
      <div className="section-container text-center">
        <p className="text-xs sm:text-sm font-medium">
          &copy; {currentYear} {siteConfig.name}. Built with care.
        </p>
      </div>
    </footer>
  );
}
