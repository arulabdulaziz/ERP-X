/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./public/__css/**/*.css",
  ],
  theme: {
    languages: {
      us:'us',
      en:'en',
    },
    screens: {
      tablet: '640px',
      tabletxl: '768px',
      desktop: '1280px',
      widescreen: '1440px',
    },
    fontFamily: {
      'aileron': ['aileron'],
      'aileron-light':['aileron-light'],
      'aileron-bold':['aileron-bold'],
      'awesome':['Font Awesome 6 Pro','sans-serif'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        closeUp: {
          '100%':{
            transform: 'translate(0,-10px)',
            opacity: 0,
          }
        },
        closeDown: {
          '100%':{
            transform: 'translate(0,10px)',
            opacity: 0,
          }
        },
      },
      colors: {
        'sdark-3': '#0E1013',
        'sdark-6': '#17181B',
        'sdark-9': '#202124',
        'sdark-c': '#282A2D',
        'sdark-d': '#2E3134',
        'sdark-e': '#3C4043',
        'sdark-f': '#5F6368',
        
        'slight-3': '#80868B',
        'slight-6': '#9AA0A6',
        'slight-9': '#BDC1C6',
        'slight-c': '#DADCE0',
        'slight-d': '#E8EAED',
        'slight-e': '#F1F3F4',
        'slight-f': '#F8F9FA',

        'carnival'  : '#fcc802',
        'lemon'     : '#fde37f',
        'sea'       : '#2d75bd',
        'sky'       : '#89cce6',
        'forest'    : '#8fcb09',
        'garden'    : '#c2e96a',
        'blood'     : '#fa7774',
        'rose'      : '#ffbec9',
      },
      dropShadow: {
        'txt': '1px 1px 0 rgba(0, 0, 0, 0.25)',
      }
    }
  },
  variants:{
    extend:{
      backgroundColor: ['even'],
      borderOpacity: ['active']
    }
  },
  plugins: [
    require('tailwindcss-localized'),
    require('tailwind-scrollbar-hide'),
  ]
}