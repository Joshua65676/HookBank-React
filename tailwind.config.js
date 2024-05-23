/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    xs: "480px",
    ss: "620px",
    sm: '768px',
    md: '1060px',
    lg: '1200px',
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

// xs: "480px",
// ss: "620px",
// sm: "768px",
// md: "1060px",
// lg: "1200px",
// xl: "1700px",

// sm: '480px',
// md: '768px',
// lg: '976px',
// xl: '1440px',