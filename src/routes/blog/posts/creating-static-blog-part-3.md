---
title: Creating static blog with Sapper, TailwindCSS and Github pages - Part 3
description: How to create static blog with Svelte 3, Sapper, TailwindCSS and deploy Github pages - categories and pagination
created: '2020-03-21T14:16:00.485Z'
categories: ['Svelte', 'Sapper', 'TailwindCSS']
---

This is the third part of the [tutorial series](./blog/creating-static-blog) about creating static blog with Sapper, TailwindCSS and Github pages. In this part we are going to add categories and pagination to our blog.

<!-- more -->

First of all, let's create pagination component:

```html
<!-- src/components/Pagination.svelte -->

<script>
  export let prevLink = null, nextLink = null
</script>

{#if prevLink || nextLink}
  <div class="flex justify-between border-t border-black py-4">
    {#if prevLink}
      <a
        rel="prefetch"
        href={prevLink}
        class="text-gray-600 hover:text-gray-900 hover:underline">
        Older
      </a>
    {/if}
    {#if nextLink}
      <a
        rel="prefetch"
        href={nextLink}
        class="ml-auto text-gray-600 hover:text-gray-900 hover:underline">
        Newer
      </a>
    {/if}
  </div>
{/if}
```

And modify `Item` component:

```diff
<a class="block mt-6" href={`/blog/${post.slug}`} rel="prefetch">
+ <h4 class="font-medium">
+   {#each post.categories as category, i}
+     <a
+       rel="prefetch"
+       href={`blog/category/${category}`}
+       class="text-gray-600 hover:text-gray-900 hover:underline">
+       {category}{i !== post.categories.length - 1 ? ', ' : ''}
+     </a>
+   {/each}
+ </h4>
  <h3
```

Then, we need to modify `src/routes/blog/_posts.js`:

```javascript
// before
const { title, description, created, updated } = data

// after
const { title, description, created, updated, categories } = data
```

And also include `categories` in object returned from this function.

As you might remember, this data comes from our `.md` files with help of [gray-mater](https://www.npmjs.com/package/gray-matter) package. So, now we can add categories field to all of our posts. For example:

```javascript
---
categories: ['Svelte', 'Sapper', 'TailwindCSS']
---
```

Then, we will create `src/utils.js` file with one constant and one function:

```javascript
export const POSTS_PER_PAGE = 5;

export const getParams = params => {
  const { rest } = params;
  const category = rest[0] === "category" ? rest[1] : null;
  const page = rest.length === 4 ? rest[3] : category ? 1 : rest[1];

  return { category, page };
};
```

I am pretty sure you got what constant means, but for function, I will explain. We will support blog urls with formats:

- `/blog`
- `/blog/category/{{category}}`
- `/blog/page/{{page}}`
- `/blog/category/{{category}}/page{{page}}`

`getParams` function is desired to take params from url, and extract `category` and `page`. The fallback value for `category` is null, but for `page` is 1.

Now, we can start modifying `*.json.js` and route `*.svelte` files. Let's start with simple one, `src/routes/blog/latest.json.js`:

```diff
  created: post.created,
- excerpt: post.excerpt
+ excerpt: post.excerpt,
+ categories: post.categories
};
```

Then, `src/routes/blog/index.json.js`:

```javascript
import posts from "./_posts.js";
import { POSTS_PER_PAGE } from "../../utils.js";

export function get(req, res) {
  const paginated = posts.slice(0, POSTS_PER_PAGE);

  const mapped = paginated.map(post => ({
    title: post.title,
    slug: post.slug,
    created: post.created,
    excerpt: post.excerpt,
    categories: post.categories
  }));

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      posts: mapped,
      hasMore: posts.length > POSTS_PER_PAGE
    })
  );
}
```

Finally, modify `src/routes/blog/index.svelte`. `context="module"` part:

```diff
<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
-     .then(posts => {
-       return { posts };
+     .then(({ posts, hasMore }) => {
+       return { posts, hasMore };
      });
  }
</script>
```

Also, import `Pagination` component, expose `hasMore` prop, and add `Pagination` to template:

```html
<Pagination prevLink={hasMore ? 'blog/page/2' : null} />
```

Lastly, we need to add 2 more files to `src/routes/blog` - [[...rest].json.js](https://github.com/chuvikovd/sapper-blog-tutorial/commit/1ecd0733d40a4dab41445468a8df45124348a2e4#diff-fc9addbb5f278dca41d7914980ca47b2R1) and [[...rest].svelte](https://github.com/chuvikovd/sapper-blog-tutorial/commit/1ecd0733d40a4dab41445468a8df45124348a2e4#diff-8685983ab3933e710ae9668373a08f8dR1). You can see contents by following links.

> Note: before starting to work on this part, I created more example posts in tutorial project using [Lorem Markdownum](https://jaspervdj.be/lorem-markdownum/).

Now, our blog is categorized and properly paginated, give a try by running:

```bash
yarn dev
```

and following http://localhost:3000

That's all for this part. Stay tuned, more interesting stuff is coming.