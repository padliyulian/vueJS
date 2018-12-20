<template>
  <nav class="navbar cf">
    <router-link to="/" exact>NEWS</router-link>
    <router-link to="/input" exact>INPUT</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.cf:before,
.cf:after 
    content: " " /* 1 */
    display: table /* 2 */


.cf:after 
    clear: both


/**
 * For IE 6/7 only
 * Include this rule to trigger hasLayout and contain floats.
 */
.cf 
    *zoom: 1



.navbar 
  background-color: black
  position: sticky
  top: 0
  z-index: 999

  a 
    color: white
    text-decoration: none
    padding: 10px
    display: block
    background-color: black
    float: left
    border-top: 5px solid black
    transition: 0.7s

  a:hover
    border-top: 5px solid red
</style>