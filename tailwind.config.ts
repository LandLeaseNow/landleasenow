import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        eucalypt: {
          DEFAULT: "#1F3A33",
          light: "#2C5148",
          dark: "#16281F"
        },
        sand: {
          DEFAULT: "#E7E7E2",
          light: "#F6F6F4",
          dark: "#D6D6CF"
        },
        brass: {
          DEFAULT: "#BE8A3D",
          light: "#D6A75C",
          dark: "#96692B"
        },
        ink: "#241F1A",
        card: "#FFFFFF",
        sky: "#6E93A0"
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        brand: ["var(--font-outfit)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "1180px"
      }
    }
  },
  plugins: []
};

export default config;
