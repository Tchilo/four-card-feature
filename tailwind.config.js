/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      red: '#EA5454',
      cyan: '#44D3D2',
      orange: '#FCAE4A',
      blue: '#549EF2',
      black: '#4D4F62',
      white: '#fff'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    gridTemplateRows: {
      // Simple 8 row grid
      '5': 'repeat(5, minmax(0, 125px))',

      // Complex site-specific row configuration
    },
    gridTemplateColumns: {
      '3': 'repeat(3, minmax(0, 350px))',
      '2': 'repeat(2, minmax(0, 350px))'
    },
    extend: {},
  },
  plugins: [],
}
