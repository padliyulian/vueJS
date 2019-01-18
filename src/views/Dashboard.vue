<template>
  <div class="julian-dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-1">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          <span>Sort project by title</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="project in projects" :key="project.$index">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="right">
              <v-chip :class="`${project.status} white--text my-2 caption`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Convert design to front end",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Design UI/UX web app",
          person: "Iwan Saputra",
          due: "18 Jan 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Mobile App testing",
          person: "Rudi Agus Susanto",
          due: "29 Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Make widget google map",
          person: "Padli Yulian",
          due: "11 Feb 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Design UI/UX web PT Lambang Jaya",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Build and connect API e-commerce",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "golang scrapt data",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Making firebase API",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Convert to Vue JS",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        },
        {
          title: "Deploy web PT Anugrah Mega Baja",
          person: "Padli Yulian",
          due: "1 Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut ad delectus natus dolorem. Blanditiis eveniet eos beatae placeat? Id fugiat ipsum minus perferendis laboriosam consequatur accusamus nihil reprehenderit similique!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
    }
  }
};
</script>

<style lang="sass" scoped>
.project.complete
  border-left: 5px solid #3cd1c2

.project.ongoing
  border-left: 5px solid orange

.project.overdue
  border-left: 5px solid tomato   

.v-chip.complete
  background: #3cd1c2

.v-chip.ongoing
  background: orange

.v-chip.overdue
  background: tomato     
</style>
