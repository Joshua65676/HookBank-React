/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightBlack: 'rgba(39, 38, 40, 255)',
        textColor: 'rgba(107, 106, 112, 255)',
      }
    },
  },
  plugins: [],
}