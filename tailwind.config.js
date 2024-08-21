module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      default: ['Vennir Pro', 'sans-serif'],
      bodoni: ['Libre Bodoni', 'serif'],
    },
    colors: {
      'black': '#00000080',
      'green': {
        light: '#effbe4',
        default: '#a0bf80',
      },
      'yellow': {
        light: '#fbf1e4',
        default: '#d1ae80',
      },
      'pink': {
        light: '#fedae1',
        default: '#fa7f97',
      },
      'gray': {
        500: '#f7f6f6',
        900: '#c0c0c0',
      }
    },
  },
  plugins: [],
}
