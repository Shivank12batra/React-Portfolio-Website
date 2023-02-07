/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, jsx}", 
    "./src/**/*"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      inset: {
        '35': '35%',
      },
      animations: {
        'scale-105': {
          transform: 'scale(1.05)'
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      borderRadius: {
        'md': '0.375rem',
      },
      classes: {
        'group-hover:rotate-90': {
          '&:hover': {
            transform: 'rotate(90deg)',
            transitionDuration: '300ms'
          }
        },
      },
      fontFamily: {
        signature: "'Great Vibes', cursive"
      }
    }
  },
  plugins: [],
}
