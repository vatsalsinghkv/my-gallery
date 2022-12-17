/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },

    extend: {
      colors: {
        text: '#4E5150',
        muted: '#A9A9A9',
        'light-gray': '#E5E5E5',
      },
      fontSize: {
        title: '0.875rem', // 14px
        primary: '0.75rem', // 12px
        secondary: '0.625rem', // 10px
        'title-lg': '1.5rem', // 24px
        'primary-lg': '1.125rem', // 18px
        'secondary-lg': '0.875rem', // 14px
      },
      screens: {
        xs: '375px',
      },
      fontWeight: {
        normal: 600,
      },
    },
  },
  plugins: [],
};
