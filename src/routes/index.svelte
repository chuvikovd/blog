<script context="module">
  export async function preload({ params, query }) {
    const posts = await (await this.fetch(`blog/latest.json`)).json()
    const projects = await (await this.fetch(`projects.json`)).json()

    return { posts, projects }
  }
</script>

<script>
  import PostHeader from '../components/PostHeader.svelte'
  import ProjectHeader from '../components/ProjectHeader.svelte'

  export let posts, projects
</script>

<svelte:head>
  <title>chuva.dev</title>
</svelte:head>

<div class="py-10 sm:py-24">
  <h1 class="font-display font-bold text-6xl text-red">Hi.</h1>
  <p class="text-xl">
    My name is Dmitrijs and this is my blog. Here I write about my journeys in
    web development.
  </p>
</div>

<div
  class="border-b flex justify-between items-center flex-wrap pb-2 w-full">
  <strong class="font-display text-3xl">Latest Posts</strong>
  <a class="font-display text-sm text-black hover:text-red" href="/blog">
    Read all posts
  </a>
</div>

<div class="w-full mt-8 pb-8 mb-10">
  {#each posts as post}
    <PostHeader {post} />
  {/each}
</div>

<div
  class="border-b flex justify-between items-center pb-2 w-full">
  <strong class="font-display text-3xl">Projects</strong>
</div>

<div class="w-full mt-8 pb-8">
  {#each projects as project}
    <ProjectHeader {project} />
  {/each}
</div>
