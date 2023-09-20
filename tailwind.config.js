/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#05878a',
        blue_green: '#074e67',
        hunter_green: '#355E3B',
        goldenrod: '#DAA520',
        burnt_sienna: '#E97451',
        plum: '#5a175d',
        burgundy: '#67074e',
        cream: '#F6EFD9'
      },
      fontFamily: {
        jrs: {
          raleway: ['Raleway', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif']
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

