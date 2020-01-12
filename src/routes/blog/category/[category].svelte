<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/category/${params.category}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { posts: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Item from '../../../components/Item.svelte'

  export let posts
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="w-full mt-8 pb-8">
  {#each posts as post}
    <Item {post} />
  {/each}
</div>
