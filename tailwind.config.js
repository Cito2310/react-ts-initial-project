/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
    theme: {
      extend: {
          fontFamily: {
              title: ["Montserrat", "Poppins", "Open Sans", "Roboto" , "Calibri", "Arial", "Helvetica", "sans-serif"],
              sans: [ "Roboto" , "Calibri", "Arial", "Helvetica", "sans-serif"]
          },
      },
    },
    plugins: [],
  }