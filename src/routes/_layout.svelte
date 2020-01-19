<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog/categories.json`)
      .then(c => c.json())
      .then(categories => ({ categories }))
  }
</script>

<script>
  import Nav from '../components/Nav.svelte'
  import ModeSwitch from '../components/ModeSwitch.svelte'
  import Tailwindcss from '../components/Tailwindcss.svelte'
  import Copyright from '../components/Copyright.svelte'
  import GoogleAnalytics from '../components/GoogleAnalytics.svelte'
  import { day } from '../store.js'

  export let segment, categories

  let dayValue

  const unsubscribe = day.subscribe(value => {
    dayValue = value
  })

  const prod = process.env.NODE_ENV === 'production'
</script>

<svelte:head>
  {#if prod}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156495800-1">

    </script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'UA-156495800-1')
    </script>
  {/if}
</svelte:head>
{#if prod}
  <GoogleAnalytics />
{/if}

<Tailwindcss />

<main class={`min-h-screen ${dayValue ? '' : 'bg-black text-white'}`}>
  <div class="container relative max-w-5xl m-auto flex flex-wrap px-4 pb-8">
    <ModeSwitch />
    <Nav {segment} {categories} />
    <slot />
    <Copyright />
  </div>
</main>
