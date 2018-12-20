export default {
  computed: {
    searchPost: function () {
      return this.posts.filter(post => {
        return post.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
}
