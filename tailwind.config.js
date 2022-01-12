module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        'container': "theme(container.padding.DEFAULT)",
        '31%': '31%',
        '32%': '32%',
        '48%': '48%',
        '49%': '49%',
        'initial' : 'initial',
      },
      colors: {
        //Base
        transparent: 'transparent',
        white: '#FFFFFF',
        current: 'currentColor',
        primary: '#00B2CD',
        secondary: '#3B4559',
        yellow: '#FCBC00',
        gray: {
          DEFAULT: '#D3D6D9',
        },
        red: '#CA433C',
      },
      fontFamily: {
        aktiv: [
          'Aktiv Grotesk Corp',
          'sans-serif',
          'Arial',
        ],
        gt: [
          'GT Walsheim Pro',
          'sans-serif',
          'Arial'
        ],
      }, 
      fontSize: {
        '14': ['14px', { lineHeight: '18px' }],
        '15': ['15px', { lineHeight: '19.2px' }],
        '16': ['16px', { lineHeight: '24px' }],
        '18': ['18px', { lineHeight: '27px'}],
        '20': ['20px', { lineHeight: '29px'}],
        '23': ['23px', { lineHeight: '33px' }],
        '24': ['24px', { lineHeight: '36px' }],
        '25': ['25px', { lineHeight: '32px' }],
        '26': ['26px', { lineHeight: '30px'}],
        '28': ['28px', { lineHeight: '42px' }],
        '30-logo': ['30px', { lineHeight: '26px' }],
        '36': ['36px', { lineHeight: '54px' }],
      },
      width: {
        'initial': 'initial',
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
      },
      center: true,
    },
    fill: theme => ({
      'white': theme('colors.white'),
      'primary': theme('colors.primary'),
    }),
  },
  variants: {
    extend: {
      container: [],
    },
  },
}