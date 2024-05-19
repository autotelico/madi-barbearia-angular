import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({theme, addUtilities}) => {
      const neonUtilities = {}
      const colors = theme('colors')
      for (const color in colors) {
        if (typeof color === 'object') {
          const lightColor = colors[color]['500']
          const darkColor = colors[color]['700']
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${lightColor}, 0 0 20px ${darkColor}`
          }
        }
      }
      addUtilities(neonUtilities)
    })
  ],
}