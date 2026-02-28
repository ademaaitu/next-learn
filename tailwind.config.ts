import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#0A0A0F",
          surface: "#111118",
          card: "#16161F",
          border: "#1E1E2E",
          primary: "#6C63FF",
          secondary: "#00D4FF",
          accent: "#FF6B6B",
          text: "#E8E8F0",
          muted: "#6B6B80",
        },
      },
    },
  },
  plugins: [],
};

export default config;
