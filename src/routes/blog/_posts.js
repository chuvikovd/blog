const fs = require('fs')
const path = require('path')
const marked = require('marked')
const matter = require('gray-matter')
const readingTime = require('reading-time')
const hljs = require('highlight.js')

const cwd = process.cwd()
const POSTS_DIR = path.join(cwd, 'src/routes/blog/posts/')
const EXCERPT_SEPARATOR = '<!-- more -->'
const renderer = new marked.Renderer()

const linkRenderer = renderer.link
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text)

  if (href.indexOf('/') === 0 || href.indexOf('.') === 0) {
    return html.replace(/^<a /, '<a class="link" ')
  } else if (href.indexOf('#') === 0) {
    const html = linkRenderer.call(renderer, 'javascript:;', title, text)
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" class="link" `
    )
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" class="link" ')
}

renderer.code = (code, language) =>
  `<pre><code class="hljs language-${language}">${
    hljs.highlight(language, code).value
  }</code></pre>`

marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    try {
      return hljs.highlight(lang, code).value
    } catch (e) {
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
    const { title, description, created, updated, categories } = data
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
      categories,
      time,
    }
  })

posts.sort((a, b) => {
  const dateA = new Date(a.created)
  const dateB = new Date(b.created)

  if (dateA > dateB) return -1
  if (dateA < dateB) return 1
  return 0
})

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts
