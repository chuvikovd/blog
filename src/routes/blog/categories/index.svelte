<script context="module">
  export function preload({ params, query }) {
    return this.fetch('blog/categories.json')
      .then(r => r.json())
      .then(categories => ({ categories }))
  }
</script>

<script>
  import pluralize from 'pluralize'
  import { getTitle } from '../../../utils.js'

  export let categories
</script>

<svelte:head>
  <title>{getTitle('Categories')}</title>
</svelte:head>

<div class="w-full mt-8 pb-8">
  {#each Object.keys(categories) as category}
    <a rel="prefetch" href={`blog/categories/${category}`}>
      <h2
        class="font-display text-2xl md:text-3xl font-bold hover:text-red
        leading-tight mb-2">
        {category} - {categories[category]}
        {pluralize('post', categories[category])}
      </h2>
    </a>
  {/each}
</div>
