/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins': ['poppins', 'sans-serif']
      },
      colors : {
        black : '#1D1C1C',
        red : '#E2293F',
        green : '#41C485',
        yellow : '#F38404'
      }
    },
  },
  plugins: [],
}
