import { NextRequest, NextResponse } from "next/server";
import { BANSI_KNOWLEDGE } from "@/lib/bansi-knowledge";
import { getChatbotResponse, ContactLink } from "@/lib/chatbot-logic";

const SYSTEM_INSTRUCTION = `You are "Ask Bansi", the official AI virtual assistant for Bansi Jethava's personal portfolio website.

Verified Facts about Bansi:
- Full Name: ${BANSI_KNOWLEDGE.name}
- Profession / Status: ${BANSI_KNOWLEDGE.role}
- Education: ${BANSI_KNOWLEDGE.education.degree} at ${BANSI_KNOWLEDGE.education.college}, ${BANSI_KNOWLEDGE.education.city}, ${BANSI_KNOWLEDGE.education.state} (${BANSI_KNOWLEDGE.education.currentSemester})
- Tech Foundation: Knowledge of C programming. Beginner in technology, passionate about learning.
- Primary Interest: Web development (exploring modern frontend & website building).
- Projects: Her projects portfolio is currently growing. New projects will be added as she builds them. Never invent fake project names or companies.
- Work Experience: Professional work experience has not been added yet.
- Certifications: Certifications and courses have not been added yet.
- Contact: Email: ${BANSI_KNOWLEDGE.contact.email} | LinkedIn: ${BANSI_KNOWLEDGE.contact.linkedin}

About Kaushal Garsaniya (The Developer & Creator of this Website):
- Kaushal Garsaniya is the talented developer, collaborator, and tech creator who designed, engineered, and built this entire portfolio website for Bansi!
- He brought Bansi's portfolio to life using modern Next.js, React, Tailwind CSS, and integrated this Google Gemini AI assistant.
- If anyone asks about Kaushal Garsaniya (e.g. "Who is Kaushal Garsaniya?", "Do you know Kaushal?", "Who made/built this website?"), speak warmly, enthusiastically, and respectfully about him as the developer behind this website! 👨‍💻✨

Your Personality & Instructions:
1. You can answer ANY question! If visitors ask general questions, coding questions (e.g. C programming, web development, data structures, algorithms, computer engineering), technology concepts, or career questions, provide helpful, accurate, friendly, and easy-to-understand explanations.
2. When answering questions specifically about Bansi, stick strictly to her verified facts above. Never invent fake achievements, grades, or internships.
3. Be welcoming, polite, and encouraging with occasional natural emojis (😊, 👋, 🚀, 💻).
4. Keep answers concise and readable in a chat bubble (2 to 4 sentences or neat bullet points). Avoid huge walls of text.
5. If the user asks how to get in touch with Bansi, mention her email (${BANSI_KNOWLEDGE.contact.email}) and LinkedIn profile.`;

interface HistoryMessage {
  sender: "user" | "bot";
  text: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message: string = (body.message || "").trim();
    const history: HistoryMessage[] = Array.isArray(body.history) ? body.history : [];

    if (!message) {
      return NextResponse.json(
        { text: "Please enter a message to ask Ask Bansi! 😊" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If API key is not configured, fall back to our local rule-based system
    if (!apiKey) {
      const localFallback = getChatbotResponse(message);
      return NextResponse.json({
        text: localFallback.text,
        links: localFallback.links,
        source: "local-rules",
      });
    }

    // Format conversation history for Gemini multi-turn chat
    const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

    // Include recent history (up to last 6 messages) for context
    const recentHistory = history.slice(-6);
    for (const h of recentHistory) {
      contents.push({
        role: h.sender === "user" ? "user" : "model",
        parts: [{ text: h.text }],
      });
    }

    // Append the current message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
        topP: 0.9,
      },
    };

    // Use Gemini 2.5 Flash (latest ultra-fast model)
    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const res = await fetch(geminiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(geminiPayload),
    });

    if (!res.ok) {
      console.warn(`Gemini API returned status ${res.status}. Falling back to rule-based response.`);
      const localFallback = getChatbotResponse(message);
      return NextResponse.json({
        text: localFallback.text,
        links: localFallback.links,
        source: "local-rules-fallback",
      });
    }

    const data = await res.json();
    const replyText: string =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    if (!replyText) {
      const localFallback = getChatbotResponse(message);
      return NextResponse.json({
        text: localFallback.text,
        links: localFallback.links,
        source: "local-rules-fallback",
      });
    }

    // Check if reply involves contact so we can attach convenient action buttons
    const lowerQuery = message.toLowerCase();
    const lowerReply = replyText.toLowerCase();
    let links: ContactLink[] | undefined = undefined;

    if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("email") ||
      lowerQuery.includes("linkedin") ||
      lowerQuery.includes("reach") ||
      lowerReply.includes("email") ||
      lowerReply.includes("linkedin")
    ) {
      links = [
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
    }

    return NextResponse.json({
      text: replyText,
      links,
      source: "gemini-ai",
    });
  } catch (err) {
    console.error("Error in /api/chat route:", err);
    // Graceful fallback so user never sees a broken chat
    return NextResponse.json({
      text: "I'm having a brief connection moment, but I'm here! Feel free to ask another question or reach out to Bansi directly.",
      links: [
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
      ],
      source: "error-fallback",
    });
  }
}

