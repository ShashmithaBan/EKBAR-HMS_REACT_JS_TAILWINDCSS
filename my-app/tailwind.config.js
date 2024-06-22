// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCF40',
        secondary: '#000000',
        accent: '#A52A2A',
        success:'#44c80a'
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace'],
      },
    
    },
  },
  plugins: [],
}
