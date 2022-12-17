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
          rebecca: {
            primary: '#ff0d45',
            secondary: '#0d59ff',
            accent: '#f97fb2',
            neutral: '#b3fff6',
            'base-100': '#262e40',
            info: '#3A85D4',
            success: '#5BECDB',
            warning: '#fef08a',
            error: '#f87171',
          },
        },
        'light',
      ],
    },
    extend: {
      fontFamily: {
        dot: ['Oswald', 'Sawarabi Mincho', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
