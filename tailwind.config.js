/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        george: ['George', 'sans-serif'],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        primary: "#ff317b",
        secondary: "#5650ce",
        success: "#2d4186",
        warning: "#9aace5",
        info: "#b3d4fc",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
