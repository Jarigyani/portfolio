/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '435px',
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        myfont: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
