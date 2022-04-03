const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        28: '7rem',
        80: '20rem',
        96: '24rem',
      },
      height: {
        '1/2': '50%',
      },
      scale: {
        30: '.3',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(101, 31, 255, 0.4)',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
}
