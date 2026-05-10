/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#13121b',
        primary: '#6c5ce7',
        secondary: '#00d9ff',
        success: '#00b894',
        warning: '#fdcb6e',
        error: '#ff7675',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}