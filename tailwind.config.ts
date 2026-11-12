import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07080a",
        coal: "#0b0c0f",
        surface: "#101216",
        cream: "#f3efe6",
        muted: "#9b9da4",
        gold: "#d6b06d",
        "gold-bright": "#f0d49a",
        ember: "#b9763b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "spin-slow": "spin 24s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
