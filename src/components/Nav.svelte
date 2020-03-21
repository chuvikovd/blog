<script>
  export let segment
</script>

<div
  class={`w-full md:w-5/12 relative flex-col justify-center transition-padding ${segment ? 'pt-4' : 'pt-10 md:pt-24'}`}>
  <a href=".">
    <h1 class="inline-block font-display text-4xl font-bold whitespace-no-wrap">
      chuva
      <span class="text-red -ml-5">.dev</span>
    </h1>
  </a>
</div>
<nav
  class="w-full flex flex-wrap justify-between border-b transition-padding mt-4 pb-2">
  <ul class="list-none flex text-sm font-display transition-padding pb-2">
    <li class="mr-6">
      <a rel="prefetch" href="blog" class="hover:text-red">Blog</a>
    </li>
    <li class="mr-6">
      <a rel="prefetch" href="blog/categories" class="hover:text-red">
        Categories
      </a>
    </li>
    <li class="mr-6">
      <a rel="prefetch" href="blog/hello-world" class="hover:text-red">About</a>
    </li>
  </ul>
  <ul class="list-none flex text-sm font-display transition-padding pb-2">
    <li class="mr-6">
      <a
        class="hover:text-red"
        href="https://github.com/chuvikovd/"
        target="_blank">
        Github
      </a>
    </li>
    <li>
      <a
        class="hover:text-red"
        href="https://www.linkedin.com/in/chuvikovd/"
        target="_blank">
        LinkedIn
      </a>
    </li>
  </ul>
</nav>
