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
      colors: {
        dark: {
          'shade': '#243148',
          'accent': '#817473'
        },
        light: {
          'shade': '#f1f1e9',
          'accent': '#90b4d2'
        },
        brand: {
          'main': '#4b7ad0'
        }
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}

