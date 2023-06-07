/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'button-background': '#252525',
      'border-color': '#2c2c2c',
      'card-font': '#999',
      'date-color': '#5F9EA0',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        point: {
          '0%': { transform: 'translate(3px)' },
          '10%': { transform: 'translate(5px)' },
          '20%': { transform: 'translate(7px)' },
          '30%': { transform: 'translate(9px)' },
          '40%': { transform: 'translate(11px)' },
          '50%': { transform: 'translate(9px)' },
          '60%': { transform: 'translate(7px)' },
        },
      },
      animation: {
        'point-arrow': 'point 1s infinite',
      },
    },
  },
  plugins: [],
};
