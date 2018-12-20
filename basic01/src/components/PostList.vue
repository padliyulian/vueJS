<template>
  <div class="post-list">
    <h2>HOT NEWS</h2>
    <input
      type="text"
      v-model="search"
      placeholder="filter news by title......."
      autocomplete="off"
    >
    <div class="post" v-for="post in searchPost" v-bind:key="post.id">
      <router-link v-bind:to="'/post/'+ post.id">
        <h3 v-randomColor>{{post.title | uppercase}}</h3>
      </router-link>
      <p>{{post.body.slice(0,150)}}......</p>
    </div>
  </div>
</template>

<script>
import searchMix from "../mixins/search";

export default {
  data() {
    return {
      posts: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("yourFirebaseLink/posts.json")
      .then(res => res.json())
      .then(data => {
        let postArr = [];
        for (let key in data) {
          data[key].id = key;
          postArr.push(data[key]);
        }
        this.posts = postArr;
      });
  },
  computed: {},
  mixins: [searchMix]
};
</script>

<style lang="sass" scoped>
.post-list
  width: 800px
  margin: 0 auto

  h2
    color: red
    text-align: center

  input
    width: 100%
    padding: 7px  
</style>