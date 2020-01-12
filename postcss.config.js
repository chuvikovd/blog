const atImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte'],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    atImport,
    tailwindcss,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
