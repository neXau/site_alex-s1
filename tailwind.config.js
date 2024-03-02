/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        // '2xl': '1920px',
      },
    },

    colors: {
      'white' : '#ffffff',
      'black' : '#000000',
      'sol-green' : '#14F195',
      'sol-purple' : '#9945FF',
      'light-black' : '#100C14',
    },

    fontFamily: {
      'main': ['"Barlow"', 'system-ui', 'ui-sans-serif']
    }
  },
  plugins: [],
}

