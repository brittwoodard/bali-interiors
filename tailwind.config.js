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
        sans: ['macha', 'sans-serif'],
        serif: ['kepler-std', 'serif;'],
      },
      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        colors: {
          'x-light': '#f8f7f5',
          'light': '#e9e3dd',
          'medium': '#f0e1dd',
          'dark': '#7a8b79',
          'feature': '#b56d59',
          'feature-alt': '#bd7d6b',
          'black': '#272d27',
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