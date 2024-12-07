/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        titleColor: "#1D1E20",
        buttonBgColor: "#F7F7F7",
        backdropBlur: ['responsive'],
      },
      fontFamily: {
        threat: ["Threat", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

