/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'bgberita': "url('../../public/images/Group 3.png')",
      },
      translate: {
        'min': '-70px',
       },
    },
  },
  variants: {
    scrollbar: ['rounded']
},
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar')
  ],
}
