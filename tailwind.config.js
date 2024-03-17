/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.{html,js,md}',
      './_layouts/**/*.{html,js,md}',
      './_*/*.{html,js,md}',
      './*.{html,js,md}'
    ],
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['GFS Didot', 'serif;'],
      },
      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        colors: {
          'light': '#fbf9f8',
          'medium': '#f0e1dd',
          'dark': '#7a8b79',
          'feature': '#b56d59',
          'black': '#242924',
        },
        aspectRatio: {
          'landscape': '2 / 1 ',
          'portrait': '3 / 4',
          'portrait-tall': '3 / 5',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }