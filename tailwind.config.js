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
      animations: {
        'scale-105': {
          transform: 'scale(1.05)'
        },
      },
      transitionDuration: {
        '200': '200ms',
      },
      fontFamily: {
        signature: "'Great Vibes', cursive"
      }
    }
  },
  plugins: [],
}
