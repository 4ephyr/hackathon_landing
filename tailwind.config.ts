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
        primary: "#edebe7",
        secondary: "#2e2e2e",
      },
      fontFamily: {
        primary: ['Poppins', 'serif'],
        secondary: ['Montserrat', 'serif'],
      },
      boxShadow: {
        image: "0 14px 85px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        mb: { max: "768px" },
        mx: { min: "1224px" },
      }
    },
  },
  plugins: [],
} satisfies Config;
