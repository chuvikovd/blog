import posts from './_posts.js'
import { mapPosts } from '../../utils'

export function get(_, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(JSON.stringify(mapPosts(posts.slice(0, 3))))
}
