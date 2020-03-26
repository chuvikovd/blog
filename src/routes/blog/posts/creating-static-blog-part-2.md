---
title: Creating static blog with Sapper, TailwindCSS and Github pages - Part 2
description: How to create static blog with Svelte 3, Sapper, TailwindCSS and deploy Github pages - styling
created: '2020-01-16T20:53:00.485Z'
categories: ['Svelte', 'Sapper', 'TailwindCSS']
---

This is the second part of the [tutorial series](./blog/creating-static-blog) about creating static blog with Sapper, TailwindCSS and Github pages. In this part we are going to style our blog.

<!-- more -->

First, let's install required dependencies:

```bash
yarn add -D tailwindcss svelte-preprocess postcss-load-config postcss-import autoprefixer
```

### TailwindCSS

Then, execute:

```bash
npx tailwind init
```

to create Tailwind config file. This step is optional as Tailwind provides default configuration. However, I am going to modify theme fonts.

For now, `tailwind.config.js` s empty:

```javascript
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
```

We will leave it for now.

### PostCSS

For Tailwind we also need `PostCSS`. We are going to use with following plugins too - `autoprefixer` and `postcss-import`. We are going to configure them now. Create a file `postcss.config.js`:

```javascript
const atImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    atImport,
    tailwindcss,
    autoprefixer,
  ],
}
```

Now, open `rollup.config.js` and add following lines:

```javascript
import sveltePreprocess from 'svelte-preprocess'

const preprocess = sveltePreprocess({ postcss: true })
```

modify following code block in `client`:

```javascript
// before
svelte({
  dev,
  hydratable: true,
  emitCss: true,
}),

// after
svelte({
  dev,
  hydratable: true,
  emitCss: true,
  preprocess,
}),
```

and in `server`:

```javascript
// before
svelte({
  generate: 'ssr',
  dev
}),

// after
svelte({
  generate: 'ssr',
  dev,
  preprocess,
}),
```

That's all for configuration, for now. We can start styling our blog at this point.

### Styling

Open `src/routes/_layout.svelte` and replace `<style ` block with following:

```html
<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
```

This all we need to start using Tailwind. `global` attribute tells Svelte not to scope this style block only to this component, so we won't receive "Unused CSS selector" warning, as we would normally receive.

Now, we can remove other `<style ` blocks in all components.

First, we will modify existing `Nav.svelte` component, and create another two - `Item.svelte` and `Copyright.svelte`:

```html
<!-- src/components/Nav.svelte -->

<script>
  export let segment;
</script>

<div class="border-b border-black flex flex-col pt-4 pb-2">
  <a class="inline-block font-display font-bold text-4xl self-start" href=".">Blog.</a>
  <nav class="flex justify-between mt-2">
    <ul class="flex">
      <li class="mr-4">
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          rel="prefetch"
          class:selected={segment === undefined}
          href=".">
          Home
        </a>
      </li>
      <li class="mr-4">
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          rel="prefetch"
          class:selected={segment === 'blog'}
          href="blog">
          Blog
        </a>
      </li>
      <li>
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          rel="prefetch"
          class:selected={segment === 'about'}
          href="about">
          About
        </a>
      </li>
    </ul>
    <ul class="flex">
      <li class="mr-4">
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          href="https://twitter.com">
          Twitter
        </a>
      </li>
      <li>
        <a
          class="text-gray-600 hover:text-gray-800 hover:underline"
          href="https://facebook.com">
          Facebook
        </a>
      </li>
    </ul>
  </nav>
</div>
```

```html
<!-- src/components/Item.svelte -->

<script>
  import format from "date-fns/format";

  export let post;
</script>

<a class="block mt-6" href={`/blog/${post.slug}`} rel="prefetch">
  <h3
    class="font-medium text-2xl text-gray-700 hover:text-gray-900
    hover:underline">
    {post.title}
  </h3>
  <span class="text-gray-600">
    {format(new Date(post.created), 'MMMM d, yyyy')}
  </span>
  {@html post.excerpt}
</a>
```

```html
<!-- src.components/Copyright.svelte -->

<div class="border-t border-black py-4 text-center text-gray-600">
  © 2020 by Blog. All rights reserved.
</div>
```

And then, modify `src/routes/_layout.svelte`. Add:

```html
import Copyright from "../components/Copyright.svelte";
```

to `<script ` part, and change template part:

```html
<div class="container max-w-5xl mx-auto">
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <Copyright />
</div>
```

Next, we will style `index` page. I want to display 3 latest blog posts here, so, we will create file `src/routes/blog/latest.json.js` with following content:

```javascript
import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.slice(0, 3).map(post => {
    return {
      title: post.title,
      slug: post.slug,
      created: post.created,
      excerpt: post.excerpt
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
```

This is copy-paste from `src/routes/blog/index.json.js` with just one change - we `slice` our result to limit response to just 3 posts.

Now, modify `src/routes/index.svelte`:

```html
<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog/latest.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Item from "../components/Item.svelte"

  export let posts;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="py-24">
  <h1 class="font-bold text-6xl mb-4">Hi.</h1>
  <p class="text-xl">
    I'm Blog. Today I show how to create a static Svelte blog using TailwindCSS.
    Check out my page to learn this and other interesting stuff.
  </p>
</div>

<div class="border-b border-black flex justify-between items-center pb-2">
  <strong class="text-3xl">Latest Posts</strong>
  <a class="text-gray-600 hover:text-gray-800 hover:underline" href="/blog">
    Read all posts
  </a>
</div>

<div class="mb-6">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>
```

Then, modify `src/routes/blog/index.svelte`. Remove everything after `<script context="module"` block, and paste:

```html
<script>
  import Item from "../../components/Item.svelte";

  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="mb-6">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>
```

And finally, modify `src/routes/blog/[slug].svelte` template part:

```html
<h1 class="text-5xl mt-4 mb-6 font-bold">{post.title}</h1>

<div class='markdown'>
	{@html post.html}
</div>
```

## PrismJS syntax highlighting and markdown styling

> Note: to see changes, create post or modify existing, so it contains some code. See examples [here](https://github.com/chuvikovd/sapper-blog-tutorial/tree/b2d2210b60f9ef22825ac00ea89a403b34c1eb97/src/routes/blog/posts)

Now we are going to add css required for syntax highlighting.

First, I will add some order for styles in this project. Let's create files `src/css/tailwind.css`, `src/css/markdown.css` and `src/css/style.css`:

```css
/* src/css/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```css
/* src/css/style.css */

@import 'tailwind';
@import 'prismjs/themes/prism';
@import "markdown";
```

```css
/* src/css/markdown.css */

.markdown {
  @apply leading-normal break-words;
}

.markdown > * + * {
  @apply mt-0 mb-4;
}

.markdown li + li {
  @apply mt-1;
}

.markdown li > p + p {
  @apply mt-6;
}

.markdown strong {
  @apply font-semibold;
}

.markdown strong a {
  @apply font-bold;
}

.markdown h1 {
  @apply leading-tight text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h2 {
  @apply leading-tight text-2xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.markdown h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.markdown h6 {
  @apply leading-tight text-sm font-semibold text-gray-800 mb-4 mt-6;
}

.markdown blockquote {
  @apply text-base border-l-4 border-gray-700 pl-4 pr-4 text-gray-800;
}

.markdown code {
  @apply text-sm rounded;
}

.markdown pre {
  @apply rounded;
}

.markdown code:not([class^="language-"]) {
  @apply bg-gray-100 rounded px-1 py-1;
}

.markdown.night code:not([class^="language-"]) {
  @apply text-black;
}

.markdown ul {
  @apply text-base pl-8 list-disc;
}

.markdown ol {
  @apply text-base pl-8 list-decimal;
}

.markdown table {
  @apply text-base border-gray-700;
}

.markdown th {
  @apply border border-gray-700 py-1 px-3;
}

.markdown td {
  @apply border border-gray-700 py-1 px-3;
}
```

And finally, remove `@tailwind` directives from `src/routes/_layout.svelte`, and add `@import "../css/style";`.

### Purging unused css

Now, if you open `http://localhost:3000` we would see that our styling is done, but, in your browser dev-tools style inspector, you will see 2k+ style rules. Most of them are generated by Tailwind, but we need just a bit of them.

That's where [PurgeCSS](https://www.npmjs.com/package/purgecss) comes into play. Run:

```bash
yarn add -D purgecss
```

and modify `postcss.config.js`:

```javascript
const atImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.css'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    atImport,
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
```

and finally, add purgecss ignore comments around prismjs theme import in `src/css/style.css`:

```css
/* purgecss start ignore */
@import 'prismjs/themes/prism';
/* purgecss end ignore */
```

Without this, production build of our blog will miss syntax highlight css. That's it, we are almost done with styling our blog. I skipped styling `error` and `about` pages - feel free to do it yourself :). You can view the whole project at this point [here](https://github.com/chuvikovd/sapper-blog-tutorial/tree/b2d2210b60f9ef22825ac00ea89a403b34c1eb97). Stay tuned for the rest parts.

## Credits

[Lupin](https://minimal-blog.netlify.com/) - beautiful theme used for inspiration. Author - [LekoArts](https://www.lekoarts.de/en)

