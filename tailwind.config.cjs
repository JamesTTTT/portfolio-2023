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

    fontFamily: {
      roboto: ["Roboto", "seri"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
