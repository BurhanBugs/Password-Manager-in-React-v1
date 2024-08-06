/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        width: '8px',
        height: '8px',
        track: '#0000',
        thumb: '#854d0e',
        thumbHover: '#854d0e',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.custom-scrollbar::-webkit-scrollbar': {
          width: theme('scrollbar.width'),
          height: theme('scrollbar.height'),
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: theme('scrollbar.track'),
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: theme('scrollbar.thumb'),
          'border-radius': '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: theme('scrollbar.thumbHover'),
        },
        '.custom-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${theme('scrollbar.thumb')} ${theme('scrollbar.track')}`,
        },
      };

      addUtilities(newUtilities);
    },
  ],
}