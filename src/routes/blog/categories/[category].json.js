import posts from '../_posts.js'
import { mapPosts } from '../../../utils'

export function get(req, res) {
  const { category } = req.params

  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  const filteredPosts = mapPosts(posts).filter(({ categories }) =>
    categories.includes(category)
  )

  res.end(JSON.stringify(filteredPosts))
}
