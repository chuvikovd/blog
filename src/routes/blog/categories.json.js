import posts from './_posts.js'

const categories = posts.reduce((acc, { categories }) => [...acc, ...categories], [])
const distinctCategories = [...new Set(categories)]

export function get(_, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(JSON.stringify(distinctCategories))
}
