module.exports = {
  mode: 'jit',
  important: true,
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
        'container-lg': "theme(container.padding.lg)",
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
        '13': ['13px', { lineHeight: '17px' }],
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
        '30': ['30px', { lineHeight: '43px' }],
        '30-logo': ['30px', { lineHeight: '26px' }],
        '35': ['35px', { lineHeight: '50px' }],
        '36': ['36px', { lineHeight: '54px' }],
        '50': ['50px', { lineHeight: '59px' }],
      },
      width: {
        'initial': 'initial',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50',
      },
      dropShadow: {
        'team-member': '4px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '50px',
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