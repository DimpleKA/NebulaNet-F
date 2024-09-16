/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#300b7a',
        darkviolet: '#0d0321',
        lightviolet: '#8755e8',
        whit: '#fefefe',
      },
    },
  },
  plugins: [],
}

