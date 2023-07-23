/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '680': '680px',
        '520': '520px',
        '480': '480px',
      },
      colors: {
        'darkblue': '#233759',
        'lightblue': '#4066A5',
        'darkgrey': '#6A707B',
      },
      boxShadow: {
        '3xl': '0px 20px 40px 0px #1318214D',
      },
    },
  },
  plugins: [],
  safelist: [
    'shadow-3xl',
    {
      pattern:
        /(bg|text|border)-(darkblue|lightblue|darkgrey)/,
    },
  ],
}
