const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          default: "#EAA53A",
        },
        gray: {
          darkest: "#0A0F1B",
          darker: "#0F172A",
          dark: "#1E293B",
          default: "#475569",
          light: "#94A3B8",
          lighter: "#E2E8F0",
          lightest: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system ui", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
