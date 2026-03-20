/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#8b5cf6",
          600: "#7c3aed",
        },
        secondary: {
          400: "#ec4899",
          600: "#db2777",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
