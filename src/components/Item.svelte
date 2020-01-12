<script>
  import ReadMoreButton from './ReadMoreButton.svelte'

  export let post

  const { categories, title, excerpt, printDate, slug, printReadingTime } = post
</script>

<article class="w-full mt-8 first:mt-0">
  <h4 class="font-display font-bold">
    {#each categories as category}
      <a rel="prefetch" href={`blog/category/${category}`} class="hover:text-red">{category}</a>
    {/each}
  </h4>
  <a rel="prefetch" href="blog/{slug}">
    <h2
      class="font-display text-3xl md:text-4xl font-bold text-red leading-tight">
      {title}
    </h2>
  </a>
  <h5 class="font-display font-light mt-1">{printDate}, {printReadingTime}</h5>
  <p class="mt-4">
    {excerpt}
  </p>
  <ReadMoreButton href="blog/{slug}" />
</article>
