export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  college: string;
  collegeShort: string;
  location: string;
  currentSemester: string;
  primarySkill: string;
  primaryInterest: string;
  email: string;
  linkedin: string;
  instagram: string;
  github: string;
  philosophy: string;
  portraitPath: string;
  cutoutPath: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Bansi Jethava",
  firstName: "Bansi",
  lastName: "Jethava",
  role: "Computer Engineering Student",
  tagline: "Strong foundation in C, Python, DSA, and SQL databases. Exploring modern web development.",
  college: "AVPTI GTU College, Rajkot, Gujarat",
  collegeShort: "AVPTI Rajkot",
  location: "Rajkot, Gujarat, India",
  currentSemester: "3rd Semester",
  primarySkill: "C, Python, DSA, SQL",
  primaryInterest: "Web Development",
  email: "bansijethava143@gmail.com",
  linkedin: "https://www.linkedin.com/in/bansi-jethava-b529973a8/",
  instagram: "https://www.instagram.com/bansiijethava/#",
  github: "https://github.com/bansijethava",
  philosophy: "Small steps. Consistent learning. Meaningful progress.",
  portraitPath: "/images/bansi-portrait.jpg",
  cutoutPath: "/images/bansi-cutout.png",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
