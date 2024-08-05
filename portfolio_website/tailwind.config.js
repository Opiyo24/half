/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

    extend: {
      colors: {
        masterBg: '000',
        heroPrimary: '#0b206c',
        heroText: '#08D665',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '3rem',
      },
    }
  },
  plugins: [],
}

