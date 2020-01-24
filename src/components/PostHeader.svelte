<script>
  import format from 'date-fns/format'
  import ReadMoreButton from './ReadMoreButton.svelte'
  import { day } from '../store.js'

  export let post, opened = false

  let dayValue

  const unsubscribe = day.subscribe(value => {
    dayValue = value
  })
</script>

<article class="w-full mt-8 first:mt-0">
  <h4 class="font-display font-bold">
    {#each post.categories as category, i}
      <a
        rel="prefetch"
        href={`blog/categories/${category}`}
        class="hover:text-red">
        {category}{i !== post.categories.length - 1 ? ', ' : ''}
      </a>
    {/each}
  </h4>
  {#if opened}
    <h2 class="font-display text-3xl md:text-4xl font-bold leading-tight">
      {post.title}
    </h2>
  {:else}
    <a rel="prefetch" href="blog/{post.slug}">
      <h2
        class="font-display text-3xl md:text-4xl font-bold text-red
        leading-tight">
        {post.title}
      </h2>
    </a>
  {/if}
  <h5 class="font-display font-light mt-1">
    {format(new Date(post.created), 'MMMM d, yyyy')},
    {#if post.updated}
      updated {format(new Date(post.updated), 'MMMM d, yyyy')},
    {/if}
    {post.time}
  </h5>
  {#if !opened}
    <div class="mt-6 markdown" class:night={!dayValue}>
      {@html post.excerpt}
    </div>
    <ReadMoreButton href="blog/{post.slug}" />
  {/if}
</article>
