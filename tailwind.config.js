/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '680': '680px',
        '520': '520px',
      

      },
      maxWidth: {
        '680': '680px',
        '520': '520px',
        '480': '480px',
      }
    },
  },
  plugins: [],
}

