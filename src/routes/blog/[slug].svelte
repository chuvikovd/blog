<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`)
    const post = await res.json()

    if (res.status === 200) {
      return { post }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import format from 'date-fns/format'
  import PostHeader from '../../components/PostHeader.svelte'
  import { day } from '../../store.js'

  export let post

  let dayValue

  const unsubscribe = day.subscribe(value => {
    dayValue = value
  })
</script>

<svelte:head>
  <title>{post.title} | chuva.dev</title>
  {#if post.description}
    <meta name="description" content={post.description} />
  {/if}
</svelte:head>

<PostHeader {post} opened="true" />

<div class="w-full mt-6 markdown" class:night={!dayValue}>
  {@html post.html}
</div>
