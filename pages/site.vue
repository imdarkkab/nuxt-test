<template>
  <div class="container">
    <h1>Ahoy!</h1>
    <p>Site : {{ site.site }}</p>
    <p>Title: {{ site.title }}</p>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const site = await $content('site').fetch()
    return {
      site,
    }
  },
}
</script>
<style scoped>
.nuxt-content h1 {
  /* my custom h1 style */
  color: green;
}
</style>
