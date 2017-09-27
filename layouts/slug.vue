<template>
<div v-if="postExists">
  <div>
    <h6 v-html="post.created_at"></h6>
    <h3 v-html="post.title"></h3>
  </div>
  <div>
    <div>
      <nuxt />
    </div>
  </div>
</div>
</template>

<script>
  export default {
    fetch ({store, params}) {
      store.dispatch('getPosts')
      store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      slug () {
        return this.$route.params.slug
      },
      postExists () {
        return !!this.$store.state.post
      },
      post () {
        return this.$store.state.post
      }
    }
  }
</script>