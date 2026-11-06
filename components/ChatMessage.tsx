"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Mail, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { ContactLink } from "@/lib/chatbot-logic";

export interface MessageItem {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  links?: ContactLink[];
}

interface ChatMessageProps {
  message: MessageItem;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.sender === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access fallback
    }
  };

  if (isUser) {
    return (
      <div className="flex justify-end mb-3">
        <div className="max-w-[82%] sm:max-w-[78%]">
          <div className="bg-[#FF5757] text-white px-4 py-2.5 rounded-2xl rounded-br-sm shadow-sm text-sm font-normal leading-relaxed break-words">
            {message.text}
          </div>
          <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 pr-1 text-right">
            {message.timestamp}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start items-start gap-2.5 mb-3">
      {/* Bot Avatar */}
      <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-coral-200 dark:border-white/15 bg-coral-50 dark:bg-[#1a2333] shadow-sm mt-0.5">
        <Image
          src="/images/bansi-cutout.png"
          alt="Ask Bansi"
          width={28}
          height={28}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="max-w-[85%] sm:max-w-[82%] group">
        <div className="bg-gray-100 dark:bg-[#131B2A] text-gray-800 dark:text-gray-100 border border-gray-200/80 dark:border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm text-sm leading-relaxed break-words">
          <p className="whitespace-pre-line">{message.text}</p>

          {/* Interactive Contact Link Pills if available */}
          {message.links && message.links.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-gray-200/60 dark:border-white/10 flex flex-wrap gap-2">
              {message.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target={link.type === "linkedin" ? "_blank" : undefined}
                  rel={link.type === "linkedin" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-[#1b2537] text-gray-900 dark:text-white border border-gray-200 dark:border-white/15 hover:border-coral-400 dark:hover:border-coral-400 hover:text-coral-500 dark:hover:text-coral-400 transition-all shadow-sm"
                >
                  {link.type === "email" ? (
                    <Mail className="w-3.5 h-3.5 text-coral-500" />
                  ) : (
                    <LinkedInIcon className="w-3.5 h-3.5 text-coral-500" />
                  )}
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Message footer with timestamp and copy button */}
        <div className="flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 mt-1 px-1">
          <span>{message.timestamp}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="opacity-70 group-hover:opacity-100 hover:text-coral-500 dark:hover:text-coral-400 transition-opacity p-0.5 rounded flex items-center gap-1 cursor-pointer"
            title="Copy response"
            aria-label="Copy response to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
