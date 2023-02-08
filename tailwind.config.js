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
      boxShadow: {
        'shadow-md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'shadow-gray-600': '0 4px 6px rgba(76, 78, 84, 0.1), 0 1px 3px rgba(76, 78, 84, 0.1)',
      },
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
