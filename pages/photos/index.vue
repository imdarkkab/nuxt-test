<template>
  <div class="container">
    <h1>Photos</h1>
    <div class="photos">
      <nuxt-link
        v-for="photo in photos"
        :key="photo.id"
        :to="{ path: `/photos/${photo.id}` }"
      >
        <img :src="`${photo.download_url}`" class="photo-item" alt="" />
        <p>{{ photo.author }}</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get(`/v2/list?limit=12`)
    return { photos }
  },
}
</script>
<style scoped>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>
