module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#34cd8b',
        'primary-hover': '#74dcac',
        'secondary': '#4c5dc3',
        'secondary-hover': '#93a4f3',
        'light-bg': '#bbc4fa',
        'dark-bg': '#2d4e88',
        'team-bg': '#93a4f3',
        'team-bg-hover': '#59a5be'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
