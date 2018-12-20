<template>
  <div id="app" class="container">
    <headComp v-bind:header="headerProp"></headComp>
    <component :is="navBar"></component>
    <router-view class="box animated bounceInDown"></router-view>
    <footer class="footer">&copy; padliyulian@gmail.com 2018</footer>
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";
import header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    navComp: navbar,
    headComp: header
  },
  data() {
    return {
      navBar: "navComp",
      headerProp: {
        title: "news update"
      }
    };
  }
};
</script>

<style lang="sass">
* 
  -webkit-box-sizing: border-box
  box-sizing: border-box

.container
  .footer 
    color: red
    margin: 50px auto 20px auto
    text-align: center
</style>
