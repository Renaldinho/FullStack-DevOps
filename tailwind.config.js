module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  screens: {
    phone: "600px",
    // => @media (min-width: 640px) { ... }

    desktop: "1200px",
    // => @media (min-width: 1024px) { ... }
  },
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat'"
      },
      colors: {
        dark: {
          'shade': '#5d5f7d',
          'accent': '#282d36',
        },
        light: {
          'background': '#FFFFFF',
          'shade': '#f4d9d1',
          'accent': '#007BFF',
          'accent-secondary': 'rgb(0,0,0)',
          'input-field': {
            'bg': "rgb(158 239 255)"
          }
        },
        brand: {
          'main': '#148cbc'
        }
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}

