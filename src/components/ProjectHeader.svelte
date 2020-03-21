<script>
  import format from 'date-fns/format'
  import Button from './Button.svelte'
  import { day } from '../store.js'

  export let project
</script>

<article class="w-full mt-8 first:mt-0">
  <a href={project.url}>
    <h2
      class="font-display text-3xl md:text-4xl font-bold text-red
      leading-tight mb-1">
      {project.title}
    </h2>
  </a>
  <p class="mb-4">{project.description}</p>
  <Button href={project.url}>Learn more</Button>
</article>
