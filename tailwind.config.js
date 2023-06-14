/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        base: '15px'
      },

      colors: {
        mainBg: "hsl(180, 52%, 96%)",
        altBg: "hsl(180, 31%, 95%)",
        mainClr: "hsl(180, 8%, 52%)",
        altClr: "hsl(180, 14%, 20%)"
      }
    },
  },
  plugins: [],
}

