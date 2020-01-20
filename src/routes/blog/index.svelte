<script context="module">
  export function preload({ params, query }) {
    return this.fetch('blog.json')
      .then(r => r.json())
      .then(posts => ({ posts }))
  }
</script>

<script>
  import PostHeader from '../../components/PostHeader.svelte'
  import { getTitle } from '../../utils.js'

  export let posts
</script>

<svelte:head>
  <title>{getTitle('Blog')}</title>
</svelte:head>

<div class="w-full mt-8 pb-8">
  {#each posts as post}
    <PostHeader {post} />
  {/each}
</div>

