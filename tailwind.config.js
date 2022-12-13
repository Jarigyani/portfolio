/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    daisyui: {
      themes: ['halloween'],
    },
    extend: {
      fontFamily: {
        dot: ['Oswald', 'Sawarabi Mincho', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
