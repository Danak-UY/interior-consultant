/** @type {import('tailwindcss').Config} */

const animationPlugin = require("tailwindcss-animate");
const gridAreaPlugin = require("@savvywombat/tailwindcss-grid-areas");

module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
    minWidth: {
      "1/2": "50%",
    },
    extend: {
      colors: {
        gray: {
          "x-light": "#BDBDBD",
          light: "#828282",
          dark: "#181719",
        },
      },
      gridTemplateAreas: {
        card: ["img data", "title title"],
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Lora", "serif"],
      "serif-logo": ["Crimson Pro", "serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [animationPlugin, gridAreaPlugin],
};
