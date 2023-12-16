/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        'default': 'black', // Set your default text color
        'dark': 'white',   // Set your text color for dark mode
      },
    },
  },
  plugins: [],
  
  darkMode: 'class',
};
