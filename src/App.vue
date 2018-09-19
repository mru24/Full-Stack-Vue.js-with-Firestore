<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  name: 'App'
}
</script>

<style lang="sass">

  a, a:visited, a:active
    text-decoration: none
    color: inherit

</style>
