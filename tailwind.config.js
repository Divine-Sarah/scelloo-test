/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter"
      }
    },
    colors: {
      ...colors,
      'text-purple': "#6E6893",
      'apppurple-100': "#C6C2DE",
      'transparent': 'transparent',
      'apppurple-200': "#25213B",
      'apppurple-300': "#6D5BD0",
      'apppurple-400': "#F4F2FF",
      'appwhite': "#FFFFFF",
      'apppurple-500': "#8B83BA",
      'appblue': "#4A4AFF",
      'appgreen': "#007F00",
      'appgreen-100': "#CDFFCD",
      'appred': "#D30000",
      'appred-100': "#FFE0E0",
      'appyellow': "#965E00",
      'appyellow-100': "#FFECCC"
    },
  },
  plugins: [],
}

