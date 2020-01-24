---
title: React-Static using node.api.js with 3rd party plugins
description: How to work with node.api.js file inside React-Static while using third party plugins that modify webpack loaders
created: '2020-01-24T18:08:18.789Z'
categories: ['React-Static']
---

Today I faced an issue, using `React-Static`. Issue is clearly described [here](https://github.com/react-static/react-static/issues/1328).

> TLDR: Images in production build have wrong paths and are not loaded

<!-- more -->

In the issue, [martnokaufmann](https://github.com/martonkaufmann) provided solution - modifying default `file-loader` inside `node.api.js`.

For me this didn't worked, however. After some research I discovered that provided solution work only for `React-Static` without plugins, that modify `Webpack` loader configuration.

### Solution

If you are using plugins that modify `Webpack` loader configuration, for example [react-static-plugin-svg](https://www.npmjs.com/package/react-static-plugin-svg), you must do some additional work inside `node.api.js`. This is required because plugins are loaded before loading `node.api.js`, so, there, we need to preserve plugin provided configuration also.

For me the solution looks like this:

```js
export default pluginOptions => ({
  webpack: (config, { defaultLoaders }) => {
    const svgLoader = config.module.rules[0].oneOf[0]

    config.module.rules = [
      {
        oneOf: [
          svgLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.jsLoaderExt,
          defaultLoaders.cssLoader,
          {
            loader: 'url-loader',
            test: /\.(jpg|png)$/,
            query: {
              limit: 100,
              name: 'static/[name].[hash:8].[ext]',
            },
          },
          state.defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
})
```

For you, the setup might be different. Main idea is that we need to save all plugin added rules (in my case `const svgLoader = config.module.rules[0].oneOf[0]`), before modifying `rules.oneOf` array and apply them there also.
