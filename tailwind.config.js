// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look in your src folder
    "./public/index.html"       // Also include your index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}