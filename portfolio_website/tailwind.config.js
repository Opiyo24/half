/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        heroPrimary: '#0b206c',
        heroText: '#2ff067',
      }
    },
  },
  plugins: [],
}

