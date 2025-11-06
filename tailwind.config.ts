import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Sans Condensed"', "sans-serif"],
        lato: ["Lato", "sans-serif"],
        merri: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
