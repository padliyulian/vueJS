<template>
  <div class="header">
    <h1>{{header.title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.header
  border: 1px solid grey
  
  h1
    text-transform: uppercase
    text-align: center
    color: white
    text-shadow: 1px 1px 5px black

  h1:hover
    color: black
    text-shadow: none
    cursor: pointer
</style>