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
          'shade': '#1D2032',
          'accent': '#796F79'
        },
        light: {
          'shade': '#F7F3F0',
          'accent': '#65B7D5'
        },
        brand: {
          'main': '#007BFF'
        }
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}

