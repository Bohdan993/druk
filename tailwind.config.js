/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    colors: {
      'natural-green': '#AEC670',
      'skin-dark': '#F3E8D3',
      'fiolet': '#9882AC',
      'skin-light': '#FBF5E9',
      'black': '#262626',
      'white-glass': 'rgba(255,255,255,0.3)',
      'light-green': '#C6DD89',
      'gray': '#D9D9D9',
      'skin-gr-1': '#E0C89A',
      'skin-gr-2': '#FFF0D3',
      'transparent': 'transparent'
    },
    fontFamily: {
      alumni: "Alumni Sans, sans-serif",
      montserrat: "Montserrat, sans-serif"
    }, 
    extend: {      
      backgroundImage: {
        'rotor-gradient': 'linear-gradient(133.73deg, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}