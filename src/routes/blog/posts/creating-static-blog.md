---
title: Creating static blog with Sapper, TailwindCSS and Github pages
description: How to create static blog with Svelte 3, Sapper, TailwindCSS and deploy Github pages
created: '2020-01-13T20:33:22.846Z'
updated: '2020-01-16T18:08:37.291Z'
categories: ['Svelte', 'Sapper']
---

Static websites became very popular lasy years. Tools like [GatsbyJS](https://www.gatsbyjs.org/) and [Jekyll](https://jekyllrb.com/) exist for some time. However, I decided to try something different and kinda underground - recently released [Svelte 3](https://svelte.dev) with [Sapper](https://sapper.svelte.dev).

<!-- more -->

## What is Sapper

`Sapper` is web app framework powered by `Svelte`. It is inspired by [Next.js](https://github.com/zeit/next.js) - a framework for `React`, but, as it's creator states, is much more lightweight and faster. You can read more at https://sapper.svelte.dev/.

## What is TailwindCSS

[Tailwind](https://tailwindcss.com/) is a A utility-first CSS framework. Utility-first means that there aren't any prebuilt UI components, like it is in [Bootstrap](https://getbootstrap.com/). Instead, Tailwind provides utility classes:

```css
.absolute {
  posiion: absolute;
}

.uppercase {
  text-transform: uppercase;
}
```

In my opinion, this approach goes wery well with `Svelte`, because both tools focus on resulting bundle size and final performance.

## About this tutorial

This tutorial will be splitted into following parts:

1. Project scaffolding and adding support for `markdown` and syntax highlight to content
2. Styling with `Taildwind` and `PostCSS`
3. Adding categories for blog posts
4. Testing
5. Deploying to Github pages

## Getting started

First, clone sapper project template:

```bash
npx degit "sveltejs/sapper-template#rollup" sapper-blog-tutorial
```

For those who prefer webpack, there is another option `npx degit "sveltejs/sapper-template#webpack" sapper-blog-tutorial`, but we will use rollup.

Then, to install required dependencies run:

```bash
cd sapper-blog-tutorial/ && yarn
```

For now, as we can see in `src/routes/blog/_posts.js`, our blog posts are just an array:

```js
// srt/routes/blog/_posts.js

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what ...
    ...
```

To add support for markdown and syntax highlight, first install required dependencies:

```bash
yarn add marked prismjs gray-matter reading-time
```

Then, replace `src/routes/blog/_posts.js` file content with:

```js
// src/routes/blog/_posts.js

const fs = require('fs')
const path = require('path')
const marked = require('marked')
const matter = require('gray-matter')
const readingTime = require('reading-time')
const prism = require('prismjs')

const cwd = process.cwd()
const POSTS_DIR = path.join(cwd, 'src/routes/blog/posts/')
const EXCERPT_SEPARATOR = '<!-- more -->'
const renderer = new marked.Renderer()

const linkRenderer = renderer.link
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text)

  if (href.indexOf('/') === 0) {
    return html
  } else if (href.indexOf('#') === 0) {
    const html = linkRenderer.call(renderer, 'javascript:;', title, text)
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" `
    )
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
}

renderer.code = (code, language) => {
  const parser = prism.languages[language] || prism.languages.html
  const highlighted = prism.highlight(code, parser, language)
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`
}

marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    try {
      return prismjs.highlight(code, prismjs.languages[lang], lang)
    } catch {
      return code
    }
  },
})

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter(fileName => /\.md$/.test(fileName))
  .map(fileName => {
    const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
    const { data, content: rawContent } = matter(fileMd)
    const { title, description, created, updated } = data
    const slug = fileName.split('.')[0]
    let content = rawContent
    let excerpt = ''

    if (rawContent.indexOf(EXCERPT_SEPARATOR) !== -1) {
      excerpt = marked(rawContent.split(EXCERPT_SEPARATOR)[0])
    }

    const html = marked.parse(content.replace(EXCERPT_SEPARATOR, ''))
    const time = readingTime(content).text

    return {
      title,
      description,
      slug,
      html,
      created,
      updated,
      excerpt,
      readingTime: time,
    }
  })

posts.sort((a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)

  if (dateA > dateB) return -1
  if (dateA < dateB) return 1
  return 0
})

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts
```

I will explain what is going on now. First, we are importing dependencies, of course. Then we are defining directory, where our `.md` files will be located, and excerpt separator, to be able to create excerpt for posts.

Later, we create different markdown renderers. First - link renderer would transform all links with `#` symbol, so they link to `h` elements in our post. Link renderer also adds `target="_blank" rel="nofollow"` to all outgoing links.

Then goes the part with code renderer which uses `prismjs` to parse and highlight code blocks.

After that, at line `129` we define our `posts` array. [gray-mater](https://www.npmjs.com/package/gray-matter) allows our markdown files to contain meta information for our posts, like title, description, creation date and other whatever you want. I am sure you can understand what info I am storing with my posts.

Last, we sort posts by date and exporting them.

Next file we need to modify is `rollup.config.js`. Add this line somewhere at the top with other imports:

```js
import marked from 'marked'
```

Then, before `export default ...` add:

```js
const markdown = () => ({
  transform(md, id) {
    if (!/\.md$/.test(id)) return null
    const data = marked(md)
    return {
      code: `export default ${JSON.stringify(data.toString())};`,
    }
  },
})
```

And finally, in `server` part of the exported config, after `commonjs(),` add:

```js
markdown(),
```

Final config would look like [this](https://github.com/chuvikovd/sapper-blog-tutorial/blob/186813bd861bba59a0baa4109e09c3495f7c5144/rollup.config.js).

Now it is time to add first `markdown` post. Create file `src/routes/blog/posts/hello-world.md` with the following content:

```markdown
---
title: Hello World
description: First post in this blog
created: '2020-01-11T19:45:28.107Z'
---

This is excerpt.

<!-- more -->

# Heading

This is the first post in this blog.
```

Now run:

```bash
yarn dev
```

and go to `http://localhost:3000/blog`. You can see that our newly created post is showing in the list and we are able to open it. As you can see, markdown renderer is working. Feel free to write more complex markdown. If you do so, you will notice that syntax highlighting is not working yet - don't worry, we will fix that in second part of this tutorial series.

Thats it for now. You can view the whole project at this point [here](https://github.com/chuvikovd/sapper-blog-tutorial/tree/186813bd861bba59a0baa4109e09c3495f7c5144). Stay tuned for the rest parts.

## Credits

https://github.com/Charca/sapper-blog-template/ - inspiration for markdown renderer
