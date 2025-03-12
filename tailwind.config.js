/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-blue': '#00ff9d',
        'cyber-dark': '#111827',
        'cyber-light': '#1f2937'
      }
    },
  },
  plugins: [],
};