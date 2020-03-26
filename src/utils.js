export const mapPosts = (posts) =>
  posts.map(({ title, excerpt, slug, categories, created, updated, time }) => ({
    title,
    excerpt,
    slug,
    categories,
    created,
    updated,
    time,
  }))

export const getTitle = (text) => `${text} | chuva.dev`
