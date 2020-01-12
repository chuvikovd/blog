<script>
  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
  <title>{status} - {error.message}</title>
</svelte:head>

<div
  class="w-full mt-8 pb-8 text-center flex justify-center items-center">
  <h1 class="font-display font-bold text-pink text-20xl">{status}</h1>
  <span class="font-display font-bold text-6xl">- {error.message}</span>
</div>
{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
