/** @type {import('tailwindcss').Config} */

const animationPlugin = require("tailwindcss-animate");
const gridAreaPlugin = require("@savvywombat/tailwindcss-grid-areas");

module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
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
      aspectRatio: {
        banner: "1474 / 1110",
      },
      minWidth: {
        "1/2": "50%",
      },
      rotate: {
        full: "360deg",
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
