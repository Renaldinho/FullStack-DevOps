/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  content: [],
  screens: {
    phone: "600px",
    // => @media (min-width: 640px) { ... }

    desktop: "1200px",
    // => @media (min-width: 1024px) { ... }
  },
  theme: {
    extend: {
      colors: {
        dark: {
          'shade': '#455173',
          'accent': '#9B9790'
        },
        light: {
          'shade': '#C6995A',
          'accent': '#F3F1EE'
        },
        brand: {
          'main': '#6A96C4'
        }
      }
    },
  },
  plugins: [],
}

