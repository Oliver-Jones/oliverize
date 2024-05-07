/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lav-black' : '#87365a',
        'lav-dark' : '#7A2048',
        'lav-light' : '#954d6d',
        'lav-white' : '#a2637f'
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'}
      },
      keyframes: {
        'open-menu' : {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'}
        }
      },
      animation: {
        'open-menu' : 'open-menu 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

