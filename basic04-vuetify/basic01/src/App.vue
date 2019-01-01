<template>
  <v-app>
    <navbar/>
    <v-content class="ma-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "@/components/Navbar";

export default {
  components: {
    navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
