/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: { 'Poppins': ['sans-serif',],
    'Open Sans': ['sans-serif',],
  },

    extend: {
      colors:{
        pink: "hsl(322, 100%, 66%)",
        lightPink: "hsl(321, 100%, 78%)",
        lightRed: "hsl(0, 100%, 63%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        veryPaleBlue: "hsl(207, 100%, 98%)"
      },
    },
  },
  plugins: [],
}

