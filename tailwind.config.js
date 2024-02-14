const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors: {
            primary: colors.teal,
            secondary: colors.fuchsia,
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

