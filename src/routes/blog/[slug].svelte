<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import clsx from 'clsx'
  import { day } from '../../store.js'

  export let post

  let dayValue

  const unsubscribe = day.subscribe(value => {
    dayValue = value
  })

  const {
    categories,
    title,
    description,
    printCreated,
    printReadingTime,
  } = post
</script>

<svelte:head>
  <title>{post.title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<div class="w-full mt-8">
  <h4 class="font-display font-bold">
    {#each categories as category, i}
      <a
        rel="prefetch"
        href={`blog/category/${category}`}
        class="hover:text-red">
        {category}{i !== categories.length - 1 ? ', ' : ''}
      </a>
    {/each}
  </h4>
  <h1 class="font-display font-bold text-4xl">{title}</h1>
  <h5 class="font-display font-light mt-1">
    {printCreated}, {printReadingTime}
  </h5>
</div>

<div class={clsx('w-full mt-6 markdown', { night: !dayValue })}>
  {@html post.html}
</div>
