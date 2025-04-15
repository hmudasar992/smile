import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "#EBEAED",
        primary: "#3F3115",
        theme: "#F7E36F",
        "theme-2": "#FFC727",
        "blue-grey": "#0F172A",
      },
      backgroundImage: {
        gradient: "var(--gradientBackground)",
        "gradient-light": "var(--gradientLight)",
      },
      fontFamily: {
        space: ["var(--font-baloo-2)", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "custom-hover": "0px 5px 16px 0px #080F340F",
        blog: "-40px 100px 70px 0px #7979790D, 40px 0px 70px 0px #7979790D",
        "blog-hover": "2.87px 4.3px 24.32px 0px rgba(0, 0, 0, 0.30)",
        search: "0px 5px 20px 0px #FFE88859",
      },
      animation: {
        slideIn: "slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "ring-effect": "ringPulse 1.5s infinite ease-out",
        "pulse-effect": "pulseScale 1.5s infinite",
        shimmer: "shimmer 2s infinite", // Added shimmer animation
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(-8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        ringPulse: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        // Added shimmer keyframes
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
