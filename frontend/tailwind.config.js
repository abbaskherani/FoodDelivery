/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        transparent: 'transparent',
        navbar : '#49557e',
        tomato : '#ff6347'
      },
        gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(240px, 1fr))',
        'footer' : '2fr 1fr 1fr'
        },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s', // Customize duration and timing function as needed
      },
    },
  },
  plugins: [],
}

