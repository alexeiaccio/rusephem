<template>
<div class="container">
  <post></post>
</div>
</template>
<script>
import post from '../../markdown/post/_id.md'

export default {
  components: {
    post
  }
}
</script>
<style>
  .container {
    width: 960px;
    margin: 50px auto 0;
  }
</style>