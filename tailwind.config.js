/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: '#4ade80',

            secondary: '#fce2c2',

            accent: '#e52792',

            neutral: '#2A2541',

            'base-100': '#2F3042',

            info: '#5D8FD0',

            success: '#67DAA6',

            warning: '#C29914',

            error: '#F0666D',
          },
        },
      ],
    },
    extend: {
      fontFamily: {
        dot: ['VT323, sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
