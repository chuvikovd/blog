<script>
  import { day } from '../store.js'

  export let href

  const toggle = () => day.update(day => !day)
</script>

<a
  rel="prefetch"
  {href}
  class="inline-block mt-4 p-2 font-display font-bold transition-button relative
  z-10 before:empty-content before:absolute before:border-2 before:border-red
  before:inset-0 after:empty-content after:absolute after:bg-cyan after:inset-0
  after:-z-1 text-black">
  <slot /> →
</a>
