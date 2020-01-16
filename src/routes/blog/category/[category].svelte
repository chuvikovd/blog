<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/category/${params.category}.json`)
    const posts = await res.json()

    if (res.status === 200) {
      return { posts, category: params.category }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import PostHeader from '../../../components/PostHeader.svelte'

  export let posts, category
</script>

<svelte:head>
  <title>Blog - {category} | chuva.dev</title>
</svelte:head>

<div class="w-full mt-8 pb-8">
  {#each posts as post}
    <PostHeader {post} />
  {/each}
</div>
