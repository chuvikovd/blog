export const mapPosts = posts =>
  posts.map(
    ({
      title,
      description,
      excerpt,
      slug,
      categories,
      printCreated,
      printUpdated,
      printReadingTime,
    }) => ({
      title,
      description,
      excerpt,
      slug,
      categories,
      printCreated,
      printUpdated,
      printReadingTime,
    })
  )
