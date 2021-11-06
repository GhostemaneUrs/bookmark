module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bookmard-red': '#FA5959',
        'bookmard-blue': '#242A45',
        'bookmard-grey': '#9194A2',
        'bookmard-white': '#f7f7f7',
        'bookmard-purple': '#5267DF'
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif']
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
