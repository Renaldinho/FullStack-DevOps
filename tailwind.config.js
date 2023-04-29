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
          'background': '#F0F0F0',
          'shade': '#4e6f5d',
          'accent': '#395144',
          'accent-secondary': '#4E6C50',
          'input-field': {
            'bg': "#D3E4D8"
          },
          'text': '#FFFFFF'
        },
        brand: {
          'main': '#148cbc'
        }
      },
      transitionProperty: {
        outlines: "width, height",
        everything: "font-size, width, height"
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}

