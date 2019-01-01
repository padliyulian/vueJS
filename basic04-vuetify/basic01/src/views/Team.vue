<template>
  <div class="julian-team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-1" grid-list-lg text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
          <v-card>
            <v-responsive class="pt-3">
              <v-avatar size="100" class="grey">
                <img :src="person.avatar" :alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn dark small color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          id: "0807051061",
          name: "Padli Yulian",
          role: "full stack developer",
          avatar: "./img/avatar-01.jpg"
        },
        {
          id: "0807051062",
          name: "Iwan Saputra",
          role: "UI/UX design",
          avatar: "./img/avatar-06.png"
        },
        {
          id: "0807051063",
          name: "Rudi Agus",
          role: "Software QA/QC testing",
          avatar: "./img/avatar-05.png"
        },
        {
          id: "0807051064",
          name: "Nanang Qosim",
          role: "front end developer",
          avatar: "./img/avatar-04.png"
        },
        {
          id: "0807051065",
          name: "Andi Batam",
          role: "back end developer",
          avatar: "./img/avatar-03.png"
        },
        {
          id: "0807051066",
          name: "Andri",
          role: "project manager",
          avatar: "./img/avatar-02.png"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
</style>
