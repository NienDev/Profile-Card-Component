/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
        darkGrayishBlue: 'hsl(227, 10%, 46%)',
        darkGray: 'hsl(0, 0%, 59%)', 
      },
      backgroundImage: {
        cardBg: "url('/images/bg-pattern-card.svg')"
      }
    },
  },
  plugins: [],
}
