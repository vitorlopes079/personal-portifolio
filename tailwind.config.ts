import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      width: {
        "92": "23rem",
        "116": "29rem",
      },
      height: {
        "112": "28rem",
        project: "500px",
        "project-lg": "700px",
      },
      screens: {
        lg: "1265px",
        responsive1000: "1000px",
        responsive500: "500px",
      },
    },
  },
  plugins: [],
};

export default config;
