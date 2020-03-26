<script>
  import { stores } from '@sapper/app'
  const { page } = stores()
  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'UA-SOMEANALYTICSID-1', {
        page_path: $page.path,
      })
    }
  }
</script>

<svelte:head>
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
</svelte:head>
