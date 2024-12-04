/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
      },
      colors: {
        'mid-blue': {
          '50': '#f1f7fd',
          '100': '#e0eef9',
          '200': '#c7e1f6',
          '300': '#a1cfef',
          '400': '#75b4e5',
          '500': '#5498dd',
          '600': '#3f7ed1',
          '700': '#366abf',
          '800': '#355da7',
          '900': '#2c4a7c',
          '950': '#1f2e4c',
      },
        'cornell-red': {
          '50': '#fef2f3',
          '100': '#fee2e4',
          '200': '#fdcbcf',
          '300': '#fba6ad',
          '400': '#f6737e',
          '500': '#ed4654',
          '600': '#d92937',
          '700': '#af1d29',
          '800': '#971d27',
          '900': '#7e1e26',
          '950': '#440b10',
        },
      }
    },
  },
  plugins: [],
}

