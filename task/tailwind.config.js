/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#173ce499',
        'red': '#2132163',
        'green':'#23aa2cb5',
      },
    },
  },
  plugins: [],
}

