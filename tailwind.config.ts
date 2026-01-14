import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
      shimmer: {
        '100%': { transform: 'translateX(100%)' },
      },
    },
      fontFamily: {
        // Мы подключим эти шрифты в layout.tsx
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        background: "#020617", // Slate-950 (Глубокая ночь)
        surface: "#0f172a",    // Slate-900 (Для карточек)
        primary: {
          DEFAULT: "#3b82f6", // Blue-500 (Технологии)
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#10b981", // Emerald-500 (Деньги/Рост)
          foreground: "#ffffff",
        },
        muted: "#64748b", // Slate-500 (Текст описаний)
      },
    },
  },
  plugins: [],
};
export default config;