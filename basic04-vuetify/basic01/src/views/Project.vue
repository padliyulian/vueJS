<template>
  <div class="julian-project">
    <h1 class="subheading grey--text">My Projects</h1>
    <v-container class="my-1">
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="project in myProjects"
          :key="project.id"
          :class="`project ${project.status}`"
        >
          <div slot="header">{{project.title}}</div>
          <v-card>
            <v-card-text class="grey--text px-4">
              <div>due by {{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === "Padli Yulian");
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
</style>
