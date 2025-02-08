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
        primary: "#280f00",
        secondary: "#e0ad74",
      },
      fontFamily: {
        primary: ['Cormorant Garamond', 'serif'],
        secondary: ['Lobster Two', 'cursive'],
      },
      boxShadow: {
        loader_top: "0 14px 15px rgba(0, 0, 0, 0.3)",
        loader_bot: "0 -14px 15px rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
} satisfies Config;
