/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif']
      },
      width: {
        '92': '23rem', 
        '116': '29rem', 
      },
      height: {
        '112': '28rem', 
      },
      screens: {
        'lg': '1265px', 
        'responsive1000' : '1000px',
        'responsive500' : '500px',
      },
    },
  },
  plugins: [],
}

