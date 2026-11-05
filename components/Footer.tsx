import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#080B12] transition-colors duration-200">
      <div className="section-container">
        <div className="w-full border-t border-[#F3F4F6] dark:border-white/[0.10]" />
      </div>
      <div className="section-container py-8 sm:py-10 text-center">
        <p className="text-xs sm:text-sm font-medium">
          &copy; {currentYear} {siteConfig.name}. Built with care.
        </p>
      </div>
    </footer>
  );
}
