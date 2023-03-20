/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        libAuth: {
          brown: "#4D4343",
          gray: "#D1D1D1"

        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
