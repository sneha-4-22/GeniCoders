/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-light': '#fce4ec',
        'pink-default': '#f06292',
        'pink-dark': '#ec407a',
        'pink-darker': '#d81b60',
      },
    },
  },
  plugins: [],
}
