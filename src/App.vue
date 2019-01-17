<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Playfair+Display')

*
  font-family: 'Playfair Display', serif
</style>
