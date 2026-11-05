import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        coral: {
          50: "#FFF5F5",
          100: "#FFE6E4",
          200: "#FFD1CD",
          300: "#FFAEAB",
          400: "#FF7D77",
          500: "#FF5757",
          600: "#E83E3E",
          700: "#C72A2A",
          800: "#A42323",
          900: "#7E1F1F",
        },
        primary: {
          DEFAULT: "#FF5757",
          hover: "#E83E3E",
          light: "#FFE6E4",
        },
        navy: {
          DEFAULT: "#18263E",
          dark: "#0F1A2C",
        },
        text: {
          main: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },
        border: "#F3F4F6",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 4px 16px -2px rgba(17, 24, 39, 0.06), 0 2px 8px -2px rgba(17, 24, 39, 0.03)",
        elevated: "0 16px 32px -4px rgba(255, 87, 87, 0.12), 0 6px 12px -4px rgba(17, 24, 39, 0.05)",
        pill: "0 12px 28px -4px rgba(255, 87, 87, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
