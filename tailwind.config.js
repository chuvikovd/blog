module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#171b24',
      white: 'white',
      red: '#ff0030',
      orange: '#ff9018',
      yellow: '#ffdc18',
      pink: '#ff00f8',
      cyan: '#00ffe8',
      lightGray: '#f0f0f0',
      gray: '#e2e8f0',
      darkGray: '#718096',
    },
    fontFamily: {
      display: ['Roboto Mono', 'monospace'],
      body: ['Roboto Slab', 'serif'],
    },
    fill: theme => ({
      black: theme('colors.black'),
      white: theme('colors.white'),
      red: theme('colors.red'),
      orange: theme('colors.orange'),
      yellow: theme('colors.yellow'),
      pink: theme('colors.pink'),
      cyan: theme('colors.cyan'),
    }),
    extend: {
      fontSize: {
        '20xl': '15rem',
      },
      height: {
        '80vh': '80vh',
      },
      inset: {
        '-10': '-2.5rem',
      },
      maxWidth: {
        '1/2': '50%',
      },
      padding: {
        '05': '0.125rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'after'],
    borderColor: ['responsive', 'hover', 'focus', 'before'],
    borderWidth: ['responsive', 'before'],
    height: ['responsive', 'after'],
    inset: ['responsive', 'before', 'after'],
    margin: ['responsive', 'first'],
    position: ['responsive', 'before', 'after'],
    width: ['responsive', 'after'],
    zIndex: ['responsive', 'after'],
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}:before`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}:after`
        })
      })
    },
    function({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before', 'after']
      )
    },
  ],
}
