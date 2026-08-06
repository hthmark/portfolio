import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F4F0",
        ink: "#1A1A1A",
        accent: "#E8552E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "24px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};
export default config;
