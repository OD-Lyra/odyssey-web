import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        editorial: ["var(--font-editorial)"],
        label: ["var(--font-label)"]
      }
    }
  },
  plugins: []
} satisfies Config;

