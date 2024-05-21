/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightBlack: 'rgba(39, 38, 40, 255)',
        textColor: 'rgba(107, 106, 112, 255)',
      }
    },
  },
  plugins: [],
}