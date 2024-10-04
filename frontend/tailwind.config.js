import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1-fr": "auto 1fr",
      },
      animation: {
        floating : 'floating 8s ease-in-out infinite'
      },
      keyframes: {
        floating: {
          "0%, 100%": {
            transform: "translate(0, 0px);",
          },
          "25%": {
            transform: "translate(0, 10px);",
          },
          "50%": {
            transform: "translate(0, 0px);",
          },
          "75%": {
            transform: "translate(0, -10px);",
          },
        },
      },
    },
  },
  plugins: [],
};
