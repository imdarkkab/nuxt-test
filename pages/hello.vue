<template>
  <article>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const post = await $content('posts/hello').fetch()
    return {
      post,
    }
  },
}
</script>
<style>
.nuxt-content h1 {
  /* my custom h1 style */
  color: red;
}
</style>
