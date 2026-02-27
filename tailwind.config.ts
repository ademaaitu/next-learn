import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.35) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,212,255,0.05) 100%)",
        "glow-primary":
          "radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
