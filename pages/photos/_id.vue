<template>
  <div class="photo-info">
    <h1>Photo Detail</h1>
    <p>{{ photo.download_url }}</p>
    <p><img :src="`${photo.download_url}.webp`" class="img" alt="" /></p>
    <nuxt-link to="/photos">Back</nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    const photo = await $axios.$get(`/id/${params.id}/info`)
    return { photo }
  },
}
</script>
<style scoped>
.photo-info {
  width: 860px;
  margin: 0 auto;
  text-align: center;
}
.img {
  width: 100%;
}
.link {
  display: inline-block;
  margin-top: 2em;
}
</style>
