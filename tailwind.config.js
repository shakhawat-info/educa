/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, #45BFFF 27.8%, #00A7FF 98.65%)',
      },
    },
  },
  plugins: [],
}