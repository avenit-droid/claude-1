import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === LUXORA 2045 — палитра "жидкого металла и ауроры" ===
        void: "#050507",       // самый глубокий фон
        obsidian: "#0A0A0F",   // основной фон тёмной темы
        pearl: "#F6F4EF",      // основной фон светлой темы
        chrome: "#E8E6E0",     // жидкое серебро — основной текст на тёмном
        graphite: "#17161C",   // карточки, поверхности в тёмной теме
        opal: {
          DEFAULT: "#B8A6FF",
          soft: "#D6CCFF",
          deep: "#7C63E8",
        },
        aurora: {
          DEFAULT: "#4FE8C9",
          deep: "#1FA98A",
        },
        flux: {
          DEFAULT: "#FF8A5B",
          deep: "#E85D2C",
        },
        ink: "#0C0B10",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(3.2rem, 9vw, 9.5rem)",
        "fluid-h1": "clamp(2.4rem, 5vw, 5.2rem)",
        "fluid-h2": "clamp(1.8rem, 3.4vw, 3.4rem)",
        "fluid-body": "clamp(1rem, 1.1vw, 1.25rem)",
      },
      backgroundImage: {
        "aurora-veil":
          "radial-gradient(60% 60% at 20% 20%, rgba(184,166,255,0.16), transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(79,232,201,0.12), transparent 60%)",
        "liquid-noise":
          "linear-gradient(120deg, rgba(184,166,255,0.08), rgba(255,138,91,0.05) 40%, rgba(79,232,201,0.08))",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(184,166,255,0.55)",
        "glow-aurora": "0 0 60px -15px rgba(79,232,201,0.5)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        glass: "24px",
      },
      transitionTimingFunction: {
        "liquid": "cubic-bezier(0.16, 1, 0.3, 1)",
        "magnetic": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-2%)" },
          "30%": { transform: "translate(2%,1%)" },
          "50%": { transform: "translate(-1%,2%)" },
          "70%": { transform: "translate(1%,-1%)" },
          "90%": { transform: "translate(-2%,1%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        grain: "grain 1.2s steps(6) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
