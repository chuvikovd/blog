<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }))
  }
</script>

<script>
  import Item from '../components/Item.svelte'

  export let posts
</script>

<svelte:head>
  <title>chuva.dev</title>
</svelte:head>

<div class="w-full mt-8 pb-8">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>