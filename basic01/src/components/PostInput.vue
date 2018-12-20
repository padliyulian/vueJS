<template>
  <div class="post-input">
    <h2>POST NEWS</h2>
    <div class="input">
      <form v-on:submit.prevent="sendPost">
        <label for="title">NEWS TITLE</label>
        <br>
        <input
          type="text"
          name="title"
          class="input"
          id="title"
          v-model="post.title"
          placeholder="post title"
          required
          autocomplete="off"
        >
        <br>
        <label for="body">NEWS CONTENT</label>
        <br>
        <textarea
          name="body"
          id="body"
          class="input"
          cols="30"
          rows="10"
          v-model="post.body"
          placeholder="post content"
          required
        ></textarea>
        <br>
        <label>CATEGORIES</label>
        <br>
        <div class="post-category">
          <input type="checkbox" id="politik" value="politik" v-model="post.categories">
          <label for="politik">POLITIK</label>
          <input type="checkbox" id="budaya" value="budaya" v-model="post.categories">
          <label for="budaya">BUDAYA</label>
          <input type="checkbox" id="ekonomi" value="ekonomi" v-model="post.categories">
          <label for="ekonomi">EKONOMI</label>
          <input type="checkbox" id="sosial" value="sosial" v-model="post.categories">
          <label for="sosial">SOSIAL</label>
          <input type="checkbox" id="gosip" value="gosip" v-model="post.categories">
          <label for="gosip">GOSIP</label>
        </div>
        <label>POST BY</label>
        <select v-model="post.postBy">
          <option v-for="by in jurnalist" v-bind:key="by.$index">{{by}}</option>
        </select>
        <br>
        <input type="submit" value="POST">
        <button v-on:click.prevent="clearPost">RESET</button>
        <p v-if="send" class="info">data success send</p>
      </form>
    </div>
    <div class="view">
      <h2>POST PREVIEW</h2>
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <ul>
        <li v-for="category in post.categories" v-bind:key="category.$index">{{category}}</li>
      </ul>
      <p>{{post.postBy}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send: false,
      jurnalist: ["mimin", "julian", "raisa", "iwan", "rudi"],
      post: {
        title: "",
        body: "",
        categories: [],
        postBy: ""
      }
    };
  },
  methods: {
    sendPost: function() {
      this.$http.post("yourFirebaseLink/posts.json", this.post).then(() => {
        this.post.title = "";
        this.post.body = "";
        this.post.categories = [];
        this.post.postBy = "";
        this.send = true;
        setTimeout(() => (this.send = false), 2000);
      });
    },
    clearPost: function() {
      this.post.title = "";
      this.post.body = "";
      this.post.categories = [];
      this.post.postBy = "";
      this.send = false;
    }
  }
};
</script>

<style lang="sass" scoped>
.post-input
  width: 800px;
  margin: 0 auto

  h2
    text-align: center

  .input
    width: 100%
    padding: 10px
    margin-top: 3px
    margin-bottom: 10px

  .post-category,
  select
    margin-top: 3px
    margin-bottom: 15px

  select
    width: 100px
    padding: 2px  

.info
  color: red
</style>