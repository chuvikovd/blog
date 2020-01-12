<script>
  export let segment, categories

  const sortedCategories = categories.sort()
</script>

<div
  class={`w-full md:w-5/12 relative flex-col justify-center transition-padding ${segment ? 'pt-4' : 'pt-10 md:pt-24'}`}>
  <a href=".">
    <h1 class="inline-block font-display text-4xl font-bold whitespace-no-wrap">
      chuva
      <span class="text-red -ml-5">.dev</span>
    </h1>
  </a>
  {#if !segment}
    <p class="mt-4">
      Hey there. My name is Dmitrijs and this is my blog. Here I write about my
      journeys in web development.
    </p>
  {/if}
</div>
<nav
  class={`w-full border-b transition-padding ${segment ? 'mt-4 pb-4' : 'mt-8 pb-8'}`}>
  <ul class="list-none flex text-sm font-display">
    {#each sortedCategories as category}
      <li class="mr-6">
        <a
          rel="prefetch"
          href={`blog/category/${category}`}
          class="hover:text-red">
          {category}
        </a>
      </li>
    {/each}
    <li class="mr-6">|</li>
    <li class="mr-6">
      <a rel="prefetch" href="blog/hello-world" class="hover:text-red">About</a>
    </li>
  </ul>
</nav>
