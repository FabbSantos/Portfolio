const { transform } = require("typescript");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nameColor': '#E71D73',
        'hexagon': '#E71D73',
        'nameTitle': '#EFEACD',
      },
      backgroundImage: {
        'masthead': "url('src/assets/bg-fotis.jpg')",
        'all-black': "url('src/assets/all-black.jpg')",
        'port-bar': "url('src/assets/bar1.jpg')",
        'port-1': "url('src/assets/portfolio.png')",
        'port-blur': "url('src/assets/port-1-blur.png')",
      },
      keyframes: {
        appear:{
          '0%': { opacity:'0', transform:'translateX(-4rem)' },
          '100%': { opacity: '100', transform: 'translateX(0rem)' }
        },

        loading:{
          '0%': {transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
          
          '75%': {transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
          
          '37%': {transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},

          '80%': {transform: 'scale(5)', opacity:'0'},

          '100%': {transform: 'scale(5)', opacity:'0'}         
        },
      },
      animation:{
        appear: 'appear 2s ease forwards',
        loading: 'loading 4s cubic-bezier(0, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
}
