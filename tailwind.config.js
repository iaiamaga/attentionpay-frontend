/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#1c1b23",
        "surface-container-lowest": "#0e0d15",
        "surface-container-high": "#2a2932",
        "surface-container-highest": "#35343d",
        "surface-variant": "#35343d",
        "surface-bright": "#3a3841",
        "surface-dim": "#13121b",
        "surface-container": "#201f27",
        background: "#13121b",
        "on-background": "#e5e0ed",
        "on-surface": "#e5e0ed",
        "on-surface-variant": "#c8c4d7",
        primary: "#c6bfff",
        "on-primary": "#2900a0",
        "primary-container": "#6c5ce7",
        "on-primary-container": "#faf6ff",
        secondary: "#aeecff",
        "on-secondary": "#003641",
        "secondary-container": "#00d9ff",
        "on-secondary-container": "#005b6c",
        "secondary-fixed-dim": "#00d9ff",
        "secondary-fixed": "#aeecff",
        success: "#00b894",
        warning: "#fdcb6e",
        error: "#ff7675",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'container-margin': '20px',
      },
    },
  },
  plugins: [],
}