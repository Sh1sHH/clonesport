/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'german-red': '#FF0000',
        'german-yellow': '#FFCC00',
      },
    },
  },
  plugins: [],
};
