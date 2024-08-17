// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6b21a8',
        'lilac-light': '#d3a6e0',
        'lilac-dark': '#a569b8',
        'neutral-300': '#e5e5e5',
        'neutral-400': '#bfbfbf',
        'neutral-700': '#4a4a4a',
      },
      animation: {
        'background': 'background 30s linear infinite',
        'logo-move': 'logoMove 20s infinite ease-in-out',
        'random-move': 'randomMove 5s infinite',
      },
      keyframes: {
        background: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        logoMove: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(100vw - 150px))' },
          '100%': { transform: 'translateX(0)' },
        },
        randomMove: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -20px)' },
          '50%': { transform: 'translate(-20px, 20px)' },
          '75%': { transform: 'translate(-20px, -20px)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        primary: '0 10px 20px rgba(107, 33, 168, 0.5)',
      },
      opacity: {
        '30': '0.3',
        '40': '0.4',
      },
    },
  },
  plugins: [],
};
