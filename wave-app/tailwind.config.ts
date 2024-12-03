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
        titleColor: "#1D1E20",
        buttonBgColor: "#F7F7F7",
      },
      fontFamily: {
        threat: ["Threat", 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
