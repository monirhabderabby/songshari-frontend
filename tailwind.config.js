/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        george: ['Outfit', 'sans-serif'],
        syne: ["Syne", 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}