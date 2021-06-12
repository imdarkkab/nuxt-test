<template>
  <div>
    <h2>User Slug Detail</h2>
    <p>{{ id }}</p>
    <nuxt-link to="/users">Bank</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.slug,
    }
  },
  // validate({ params }) {
  //   return params.slug === '1'
  // },
}
</script>
