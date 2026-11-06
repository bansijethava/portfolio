/**
 * Bansi Jethava's Verified Portfolio Knowledge Base
 * 
 * IMPORTANT:
 * This file contains strictly verified information about Bansi Jethava.
 * Do not invent projects, achievements, marks, certifications, or experience.
 * If details are not available yet, mark them clearly as not added.
 */

export interface BansiProfile {
  name: string;
  role: string;
  education: {
    degree: string;
    college: string;
    city: string;
    state: string;
    currentSemester: string;
  };
  skills: {
    programming: string[];
    currentLevel: string;
    focus: string;
  };
  interests: {
    primary: string;
    description: string;
  };
  contact: {
    email: string;
    linkedin: string;
    location: string;
  };
  status: {
    projectsNote: string;
    experienceNote: string;
    certificationsNote: string;
  };
}

export const BANSI_KNOWLEDGE: BansiProfile = {
  name: "Bansi Jethava",
  role: "Diploma Computer Engineering Student",
  education: {
    degree: "Diploma in Computer Engineering",
    college: "AVPTI GTU College, Rajkot",
    city: "Rajkot",
    state: "Gujarat",
    currentSemester: "3rd semester",
  },
  skills: {
    programming: ["C programming"],
    currentLevel: "Beginner in technology",
    focus: "Building a strong programming foundation",
  },
  interests: {
    primary: "Web development",
    description: "Exploring the world of building websites and modern web applications.",
  },
  contact: {
    email: "bansijethava143@gmail.com",
    linkedin: "https://www.linkedin.com/in/bansi-jethava-b529973a8/",
    location: "Rajkot, Gujarat, India",
  },
  status: {
    projectsNote:
      "Her projects section is still growing. New projects will be added here as she builds and completes them. Stay tuned! 🚀",
    experienceNote:
      "Her professional experience information has not been added to the portfolio yet.",
    certificationsNote:
      "Her certifications and courses have not been added to the portfolio yet.",
  },
};

export const SUGGESTED_QUESTIONS = [
  "Who is Bansi?",
  "What does she study?",
  "What are her skills?",
  "What is her interest?",
  "Does she have projects?",
  "How can I contact her?",
] as const;

