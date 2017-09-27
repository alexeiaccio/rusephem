<template>
<section class="container">
  <div>
    <logo/>
    <h1 class="title">
    NUXT
    </h1>
    <h2 class="subtitle">
    Nuxt + NetlifyCMS + Netlify
    </h2>
    <div class="links">
      <div v-for="post in posts">
        <div>
          <h6 v-html="post.created_at"></h6>
          <h5><router-link :to="{ name: 'slug', params: { slug: post.slug }}">{{post.title}}</router-link></h5>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'First Last',
      meta: [{
        hid: 'home',
        name: 'meta name',
        content: 'meta content seo goodness'
      }]
    }
  },
  fetch ({ store }) {
    store.dispatch('getPosts')
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
