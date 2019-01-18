<template>
  <v-dialog max-width="700" v-model="dialog">
    <v-btn small flat slot="activator" class="primary">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h3>Add a New Project</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="formInput">
          <v-text-field
            label="Title"
            v-model="project.title"
            prepend-icon="folder"
            :rules="inputRule"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="project.content"
            prepend-icon="edit"
            :rules="inputRule"
          ></v-textarea>
          <v-menu>
            <v-text-field
              :value="formatDate"
              slot="activator"
              label="Due by"
              prepend-icon="date_range"
              :rules="inputRule"
            ></v-text-field>
            <v-date-picker v-model="project.due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn small class="primary" @click="addProject" :loading="loading">
            Add project
            <span slot="loader" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";

export default {
  data() {
    return {
      project: {
        title: "",
        content: "",
        due: null
      },
      inputRule: [value => !!value || "please complete form before submit"],
      loading: false,
      dialog: false
    };
  },
  methods: {
    addProject() {
      if (this.$refs.formInput.validate()) {
        alert(this.project.title, this.project.content, this.project.due);
        this.loading = true;
        setTimeout(() => (this.loading = false), 3000);
        setTimeout(() => this.$refs.formInput.reset(), 3000);
        setTimeout(() => this.$emit("projectAdd"), 3000);
        setTimeout(() => (this.dialog = false), 4000);
      }
    }
  },
  computed: {
    formatDate() {
      return this.project.due ? format(this.project.due, "Do MMM YYYY") : "";
    }
  }
};
</script>

<style lang="sass" scoped>
.custom-loader 
  animation: loader 1s infinite
  display: flex

@keyframes loader 
  from 
    transform: rotate(0) 
  to 
    transform: rotate(360deg)
</style>