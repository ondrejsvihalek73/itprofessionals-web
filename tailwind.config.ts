import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme with green accent (subtle green undertone for cohesion)
        ink: "#0A0C0A", // page background (near-black, faint green)
        "ink-soft": "#0E110E", // alternating soft sections
        "ink-card": "#131813", // dark cards
        fg: "#F5F8F5", // primary text (near-white)
        line: "#202620", // hairline borders
        "line-strong": "#38403A", // interactive borders
        accent: "#43A85E", // green (matches screenshot; white text legible)
        "accent-soft": "#54B869", // brighter green (hover / glows)
        muted: "#A4A9A4", // secondary text
        "muted-dim": "#747974", // tertiary text
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
