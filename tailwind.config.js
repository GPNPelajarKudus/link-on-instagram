/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'coming-soon.html'],
  theme: {
    extend: {
      fontFamily: {
        script: ['Tangerine', 'cursive'],
        body: ['Ubuntu', 'sans-serif'],
        full: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: "#15804B",
        secondary: "#B3903E",
        lightPrimary: "#22c55e",
      },
    },
  },
  plugins: [],
}

