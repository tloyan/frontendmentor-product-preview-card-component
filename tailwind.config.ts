import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "hsl(158, 36%, 37%)",
          2: "hsl(30, 38%, 92%)",
          3: "hsl(158, 43%, 18%)"
        },
        neutral: {
          1: "hsl(212, 21%, 14%)",
          2: "hsl(228, 12%, 48%)",
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-fraunces)', {
          fontVariationSettings: "'WONK' 1"
        }]
      }
    },
  },
  plugins: [],
};
export default config;
