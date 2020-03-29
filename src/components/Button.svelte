<script>
  import { day } from '../store.js'

  export let href, external = false

  const toggle = () => day.update(day => !day)
</script>

<a
  rel="prefetch"
  {href}
  target={external ? "_blank" : null}
  class="inline-flex items-center mt-4 p-2 font-display font-bold transition-button relative
  z-10 before:empty-content before:absolute before:border-2 before:border-red
  before:inset-0 after:empty-content after:absolute after:bg-cyan after:inset-0
  after:-z-1 text-black">
  <slot />
  {#if external}
    <svg width="12" height="12" viewBox="0 0 24 24" class="ml-2">
      <path
        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977
        7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
    </svg>
  {:else}
    →
  {/if}
</a>
