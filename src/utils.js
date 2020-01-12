export const mapPosts = posts =>
  posts.map(
    ({ title, excerpt, slug, categories, printDate, printReadingTime }) => ({
      title: title,
      excerpt: excerpt,
      slug: slug,
      categories: categories,
      printDate: printDate,
      printReadingTime: printReadingTime,
    })
  )
