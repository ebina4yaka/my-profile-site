module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FCE7F3',
          dark: '#831843',
        },
        green: {
          light: '#D1FCCF',
          dark: '#0A8211',

        },
        blue: {
          light: '#DCE8FC',
          dark: '#113382',

        },
        yellow: {
          light: '#FCEDCF',
          dark: '#826624',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
