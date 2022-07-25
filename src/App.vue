<template>
  <div id="app">
    <div class="posts">
      <div class="post" v-for="post in allPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  // так як є гетер, дата більше не потрібна
  /*data() {
    return {
      posts: []
    }
  },*/
  // computed буде реагувати на любу зміну гетера - замінимо його на мап гетер
  /*computed: {
    allPosts() {
      return this.$store.getters.allPosts();
    }
  },*/
  computed: mapGetters(['allPosts']),
  components: {

  },
  async mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.post {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  margin-bottom: 10px;
}
</style>
