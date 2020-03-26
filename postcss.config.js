const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.postcss'],
  whitelistPatterns: [/svelte-/],
  whitelistPatternsChildren: [/transition-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
