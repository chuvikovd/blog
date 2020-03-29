<script>
  import format from 'date-fns/format'
  import Button from './Button.svelte'
  import { day } from '../store.js'

  export let project
</script>

<article class="w-full mt-8 first:mt-0">
  <a href={project.url} class="flex items-center" target="_blank">
    <h2
      class="font-display text-3xl md:text-4xl font-bold text-red leading-tight
      mb-1 mr-4">
      {project.title}
    </h2>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        class="fill-pink"
        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977
        7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
    </svg>
  </a>
  <p class="mb-4">{project.description}</p>
  <Button href={project.url} external>Learn more</Button>
</article>
