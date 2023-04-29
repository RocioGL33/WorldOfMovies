/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      white: "#F7F7F7",
      blueLight: "#F2FAFC",
      lavender: "#212C5E",
      blue: "#131E50",
      blue2: "#1C85E8",
      yellow: "#FFD93D",
      grey: "#B2B2B2",
      darkGrey: "#181818",
      red: "#FD2816",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
};
