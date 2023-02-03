/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      main: "#061A40",
      box: "#0d1b32",
      secondary: "#64ffda",
      head: "#ccd6f6",
      text: "#a3afd1",
      mint: "#F1FFFA",
      rose: "#DB2B39",
      white: "#FFFFFF",
    },
    extend: {
      height: {
        100: "40rem",
      },
      width: {
        100: "30rem",
        110: "35rem",
        120: "40rem",
      },
    },

    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    fontFamily: {
      roboto: ["Roboto", "seri"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
