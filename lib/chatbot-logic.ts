/**
 * Smart Rule-Based Chatbot Logic for "Ask Bansi"
 * 
 * 100% Client-Side. No API keys, no backend dependencies, no external AI.
 * Deterministic, truthful, friendly, and easily extensible.
 */

import { BANSI_KNOWLEDGE } from "./bansi-knowledge";

export interface ContactLink {
  label: string;
  url: string;
  type: "email" | "linkedin";
}

export interface ChatResponse {
  category: string;
  text: string;
  links?: ContactLink[];
}

export const WELCOME_MESSAGE: ChatResponse = {
  category: "welcome",
  text: "Hey! 👋 I'm Ask Bansi, a virtual assistant for Bansi's portfolio. I can help you learn about her education, skills, interests, and contact details. What would you like to know?",
};

interface MatchRule {
  category: string;
  priority: number;
  exactPhrases?: string[];
  allKeywords?: string[][]; // (word1 OR word2) AND (word3 OR word4)
  anyKeywords?: string[];
  response: () => ChatResponse;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email Bansi",
    url: `mailto:${BANSI_KNOWLEDGE.contact.email}`,
    type: "email",
  },
  {
    label: "LinkedIn Profile",
    url: BANSI_KNOWLEDGE.contact.linkedin,
    type: "linkedin",
  },
];

const RULES: MatchRule[] = [
  // 0. KAUSHAL GARSANIYA (DEVELOPER & ARCHITECT)
  {
    category: "developer",
    priority: 98,
    exactPhrases: [
      "who is kaushal garsaniya",
      "who is kaushal",
      "do you know who is kaushal garsaniya",
      "do you know kaushal garsaniya",
      "do you know kaushal",
      "who built this website",
      "who created this website",
      "who designed this website",
      "who made this website",
      "kaushal garsaniya",
      "tell me about kaushal",
      "tell me about kaushal garsaniya",
    ],
    anyKeywords: [
      "kaushal garsaniya",
      "kaushal",
      "who built this website",
      "who created this website",
      "who made this website",
    ],
    response: () => ({
      category: "developer",
      text: "Kaushal Garsaniya is the talented software developer and collaborator who designed and built this portfolio website for Bansi! 👨‍💻✨ He brought her portfolio to life with modern web design and AI capabilities.",
    }),
  },

  // 1. THANKS
  {
    category: "thanks",
    priority: 95,
    exactPhrases: [
      "thanks",
      "thank you",
      "thank you so much",
      "thanks a lot",
      "many thanks",
      "thx",
    ],
    anyKeywords: ["thanks", "thank you", "thank", "thx"],
    response: () => ({
      category: "thanks",
      text: "You're welcome! 😊 Feel free to explore the portfolio and ask me anything about Bansi.",
    }),
  },

  // 2. CONTACT
  {
    category: "contact",
    priority: 90,
    exactPhrases: [
      "how can i contact bansi",
      "how can i contact her",
      "what is her email",
      "how can i connect with her",
      "how to contact her",
      "contact bansi",
      "contact details",
      "how to connect",
      "how can i contact",
      "how to reach her",
    ],
    anyKeywords: [
      "email",
      "gmail",
      "linkedin",
      "contact",
      "connect",
      "reach",
      "phone",
      "hire",
      "talk to her",
      "message her",
      "get in touch",
    ],
    response: () => ({
      category: "contact",
      text: "You can connect with Bansi through LinkedIn or email.",
      links: contactLinks,
    }),
  },

  // 3. PROJECTS
  {
    category: "projects",
    priority: 85,
    exactPhrases: [
      "show me her projects",
      "what projects has she built",
      "does she have any projects",
      "does she have projects",
      "show projects",
      "tell me about her projects",
      "what projects",
    ],
    anyKeywords: [
      "projects",
      "project",
      "portfolio work",
      "what has she built",
      "built projects",
    ],
    response: () => ({
      category: "projects",
      text: BANSI_KNOWLEDGE.status.projectsNote,
    }),
  },

  // 4. CERTIFICATIONS & COURSES
  {
    category: "certifications",
    priority: 80,
    exactPhrases: [
      "what certificates does she have",
      "has she completed any courses",
      "what certifications does she have",
      "show her certificates",
    ],
    anyKeywords: [
      "certificate",
      "certificates",
      "certification",
      "certifications",
      "course",
      "courses",
    ],
    response: () => ({
      category: "certifications",
      text: BANSI_KNOWLEDGE.status.certificationsNote,
    }),
  },

  // 5. EXPERIENCE & INTERNSHIPS
  {
    category: "experience",
    priority: 80,
    exactPhrases: [
      "does she have work experience",
      "has she done an internship",
      "tell me about her experience",
      "what is her experience",
      "work experience",
    ],
    anyKeywords: [
      "experience",
      "internship",
      "internships",
      "job",
      "jobs",
      "company",
      "work history",
    ],
    response: () => ({
      category: "experience",
      text: BANSI_KNOWLEDGE.status.experienceNote,
    }),
  },

  // 6. PROGRAMMING SKILLS
  {
    category: "skills",
    priority: 75,
    exactPhrases: [
      "what programming languages does she know",
      "does she know c",
      "what are her technical skills",
      "what are her skills",
      "what languages does she know",
      "tell me her skills",
      "skills",
    ],
    anyKeywords: [
      "skills",
      "skill",
      "programming languages",
      "languages",
      "c language",
      "c programming",
      "know c",
      "coding",
      "tech stack",
      "technologies",
    ],
    response: () => ({
      category: "skills",
      text: "Bansi currently has knowledge of C programming. She is at the beginning of her technology journey and is interested in learning more.",
    }),
  },

  // 7. WEB DEVELOPMENT & INTERESTS
  {
    category: "web_development",
    priority: 75,
    exactPhrases: [
      "what is her interest",
      "does she like web development",
      "what does she want to learn",
      "her interest",
      "what is she interested in",
      "why web development",
    ],
    anyKeywords: [
      "web development",
      "web dev",
      "interest",
      "interests",
      "interested",
      "want to learn",
      "curious about",
    ],
    response: () => ({
      category: "web_development",
      text: "Bansi is interested in web development and is exploring the world of building websites and web applications.",
    }),
  },

  // 8. EDUCATION & COLLEGE
  {
    category: "education",
    priority: 70,
    exactPhrases: [
      "where does bansi study",
      "what is her qualification",
      "which college",
      "which semester",
      "what does she study",
      "tell me about her education",
      "her education",
      "where does she study",
    ],
    anyKeywords: [
      "study",
      "studying",
      "education",
      "college",
      "semester",
      "avpti",
      "gtu",
      "qualification",
      "degree",
      "diploma",
      "school",
      "academic",
    ],
    response: () => ({
      category: "education",
      text: "Bansi is currently studying Diploma in Computer Engineering at AVPTI GTU College, Rajkot, Gujarat. She is in her 3rd semester.",
    }),
  },

  // 9. INTRODUCTION
  {
    category: "introduction",
    priority: 65,
    exactPhrases: [
      "who is bansi",
      "who is bansi jethava",
      "tell me about bansi",
      "introduce bansi",
      "what does bansi do",
      "who is she",
      "tell me about her",
      "about bansi",
      "about her",
      "introduce her",
    ],
    anyKeywords: [
      "who is",
      "tell me about",
      "introduce",
      "about bansi",
      "who is she",
      "about her",
      "bio",
      "profile",
    ],
    response: () => ({
      category: "introduction",
      text: "Bansi Jethava is a Diploma Computer Engineering student at AVPTI GTU College, Rajkot. She is building her foundation in programming and exploring web development.",
    }),
  },

  // 10. GREETING (Handled after specific intents so "hi, what are her skills?" matches skills)
  {
    category: "greeting",
    priority: 50,
    exactPhrases: [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good evening",
      "good afternoon",
      "hey there",
      "hi there",
      "hello there",
      "hola",
      "namaste",
    ],
    anyKeywords: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "greetings"],
    response: () => ({
      category: "greeting",
      text: "Hey there! 👋 Welcome to Bansi's portfolio. What would you like to know about her?",
    }),
  },
];

/**
 * Clean & normalize input string
 */
function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, " ") // replace punctuation with space
    .replace(/\s+/g, " ")     // collapse extra spaces
    .trim();
}

/**
 * Determine best response using prioritized rule matching
 */
export function getChatbotResponse(rawQuery: string): ChatResponse {
  const clean = normalizeQuery(rawQuery);

  if (!clean) {
    return {
      category: "empty",
      text: "Please type a question or choose one of the suggested topics below! 😊",
    };
  }

  // Check 1: Exact phrase matching (highest precision)
  for (const rule of RULES) {
    if (rule.exactPhrases) {
      for (const phrase of rule.exactPhrases) {
        const cleanPhrase = normalizeQuery(phrase);
        if (clean === cleanPhrase || clean.includes(cleanPhrase)) {
          return rule.response();
        }
      }
    }
  }

  // Check 2: Word/phrase boundary matching by priority
  // Sort rules descending by priority
  const sortedRules = [...RULES].sort((a, b) => b.priority - a.priority);

  for (const rule of sortedRules) {
    if (rule.anyKeywords) {
      for (const kw of rule.anyKeywords) {
        const cleanKw = normalizeQuery(kw);
        // Match as whole word or phrase
        const regex = new RegExp(`\\b${cleanKw}\\b`, "i");
        if (regex.test(clean)) {
          return rule.response();
        }
      }
    }
  }

  // Fallback: Category K (Unknown Questions)
  return {
    category: "unknown",
    text: "That's an interesting question! 😊 I don't have that information about Bansi right now. You can explore her portfolio or contact her directly for more details.",
  };
}

