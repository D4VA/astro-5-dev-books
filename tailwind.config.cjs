/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography')

module.exports = {
  content: [  "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/styles/**/*.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
};