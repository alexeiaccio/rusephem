<template>
<div class="container">
  <div v-html="postContent"></div>
</div>
</template>
<script>
export default {
  layout: 'slug',
  head () {
    let post = this.post
    return {
      title: 'Hoho',
      meta: [{
        hid: post.meta.id,
        name: post.meta.name,
        content: post.meta.content
      }]
    }
  },
  fetch ({
    store,
    params
  }) {
    store.dispatch('getPosts')
    store.dispatch('getPostWithSlug', params.slug)
  },
  computed: {
    post () {
      return this.$store.state.post
    },
    postContent () {
      let post = this.$store.state.post
      return require(`~/content/posts/${post.id}.md`)
    }
  }
}
</script>
<style>
  .container {
    width: 960px;
    margin: 50px auto 0;
  }
</style>