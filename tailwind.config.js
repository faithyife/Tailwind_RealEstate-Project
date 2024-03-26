/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "'Poppins', sans-serif",
      },
      screens: {
        'esm-max': { 'max': '469px' },
        'sm-max': { 'max': '769px' },
        'md-max': { 'max': '1023px' },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
}

