module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      height:{
        '100':'25rem'
      },
      backgroundImage: theme => ({
        'banner' : "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
