/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      oxfordblue: "#061A40",
      frenchblue: "#85ADFF",
      cerise: "#D8315B",
      mint: "#F1FFFA",
      rose: "#DB2B39",
      white: "#FFFFFF",
    },
    extend: {
      height: {
        100: "40rem",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "seri"],
    },
  },
  plugins: [],
};
