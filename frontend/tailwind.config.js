/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          dark: '#1E40AF',
          light: '#93C5FD',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald/Green
          dark: '#065F46',
          light: '#6EE7B7',
        },
        accent: {
          DEFAULT: '#F97316', // Orange
          dark: '#C2410C',
          light: '#FDBA74',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

