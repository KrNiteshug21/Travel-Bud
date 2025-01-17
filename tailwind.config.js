/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      1: "1px",
    },
    extend: {
      colors: {
        primaryDarkBlue: "#14142e",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  extend: {},
  plugins: [],
});
