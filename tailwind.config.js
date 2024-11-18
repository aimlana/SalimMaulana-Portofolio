/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alumni: ['Alumni Sans', 'sans-serif'],
        allison: ['Allison', 'cursive'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      colors: {
        black: '#2C2C2C',
      },
    },
  },
  plugins: [],
};
