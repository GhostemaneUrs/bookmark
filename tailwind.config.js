module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bookmark-red': '#FA5959',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7',
        'bookmark-purple': '#5267DF'
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
