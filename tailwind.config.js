module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray-900': '#010409',
        'dark-gray-800': '#0d1117',
        'dark-gray-700': '#161b22',
        'dark-gray-600': '#21262d',
        'dark-gray-400': '#30363d',
        'dark-gray-200': '#8b949e',
        'dark-gray-100': '#c9d1d9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
