/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'screen450': '450px',
        'screen950': '950px'
      },
      fontFamily: {
        tiemposheadline: ["var(--font-tiemposheadline)"],
        lexend: ["var(--font-lexend)"]
      }
    }
  },
  plugins: []
}