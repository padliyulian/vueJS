<template>
  <div class="post-detail">
    <h2>NEWS DETAIL</h2>
    <div class="detail">
      <h3 v-rcolor>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <span v-for="category in post.categories" v-rcolor>#{{category}}</span>
      <br>
      <p>
        post by
        <span class="post-by">{{post.postBy}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {}
    };
  },
  created() {
    this.$http
      .get("yourFirebaseLink/posts/" + this.id + ".json")
      .then(res => res.json())
      .then(data => (this.post = data));
  },
  filters: {
    // register custom filters local
  },
  directives: {
    // register custom directive local
    rcolor: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.post-detail
  width: 800px
  margin: 0 auto

  h2
    text-align: center
    margin-bottom: 50px

  .detail
    h3
      margin-bottom: 8px

  .post-by
    font-weight: bold
    text-transform: uppercase
</style>