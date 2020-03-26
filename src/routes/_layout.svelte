<script>
  import Nav from '../components/Nav.svelte'
  import ModeSwitch from '../components/ModeSwitch.svelte'
  import Copyright from '../components/Copyright.svelte'
  import GoogleAnalytics from '../components/GoogleAnalytics.svelte'
  import { day } from '../store.js'

  export let segment

  const prod = process.env.NODE_ENV === 'production'
</script>

<style global>
  @import '../css/styles.postcss';
</style>

{#if prod}
  <GoogleAnalytics />
{/if}

<main class={`min-h-screen ${$day ? '' : 'bg-black text-white'}`}>
  <div class="container relative max-w-5xl m-auto flex flex-wrap px-4 pb-8">
    <ModeSwitch />
    <Nav {segment} />
    <slot />
    <Copyright />
  </div>
</main>
