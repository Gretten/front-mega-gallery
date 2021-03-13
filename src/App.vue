<template>
  <div>
      <h1>Super Gallery</h1>
      <Main :images="this.getImages" />
  </div>

</template>

<script>
import Main from './views/Main/Main.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Main
  },
  computed: {
    ...mapGetters([
      'getImages',
    ])
  },
  mounted: function() {
    this.$store.dispatch('fetchImages')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  text-align: center;
}
</style>
