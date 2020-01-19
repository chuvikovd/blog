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
