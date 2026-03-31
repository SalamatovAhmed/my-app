/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'behoof-red': '#FF4E4E',
        'behoof-red-hover': '#E34242',
      },
    },
  },
  plugins: [],
}