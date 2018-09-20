<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">WW Project Studio</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="'/'">Home</router-link>
          </b-nav-item>
          <!-- <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#">Our Work</b-nav-item>
          <b-nav-item href="#">Our Clients</b-nav-item> -->
          <b-nav-item>
            <router-link :to="'showPosts'">Blog</router-link>
          </b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav> -->

      </b-collapse>
    </b-navbar>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
