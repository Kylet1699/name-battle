/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#cacaca', //grey
        darkGrey: '#8a8a8a',
        gold: '#D8C059', //gold
        black: '#121212',
        green: '#98C364',
        purple: '#BB78DD',
      },
      fontFamily: {
        sans: ['ubuntu', 'sans-serif', ...defaultTheme.fontFamily.sans],
        ubuntu: ['ubuntu', 'sans-serif'],
        monospace: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
