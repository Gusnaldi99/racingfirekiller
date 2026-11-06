import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rfk: {
          red: "#D30201",
          "red-dark": "#9F0201",
          "red-light": "#FF2B2A",
          black: "#020202",
          obsidian: "#0A0A0A",
          surface: "#121212",
          charcoal: "#1C1C1C",
          "charcoal-light": "#2A2A2A",
          border: "#333333",
          silver: "#B1B1B0",
          "silver-light": "#E2E2E2",
          white: "#FDFDFD",
        },
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "carbon-pattern": "radial-gradient(#1f1f1f 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;

