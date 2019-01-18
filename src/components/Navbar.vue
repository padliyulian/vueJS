<template>
  <nav class="julian-navbar">
    <v-snackbar top color="success" v-model="snackbar" :timeout="4000">
      <span>Success added a new project</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar dark class="primary" app>
      <v-toolbar-side-icon @click="julianSlide = !julianSlide"></v-toolbar-side-icon>
      <router-link to="/">
        <img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" height="38px" width="38px">
      </router-link>
      <v-toolbar-title class="hidden-xs-only">Project App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu left offset-y transition="slide-x-transition">
          <v-btn slot="activator" flat>Link One
            <v-icon right>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <div class="v-subheader grey--text">Menu One</div>
            <v-list-tile v-for="(menu, index) in menus" :key="index">
              <v-list-tile-title>
                <v-icon class="mr-2">{{menu.icon}}</v-icon>
                <span>{{menu.title}}</span>
              </v-list-tile-title>
            </v-list-tile>
            <v-divider></v-divider>
            <div class="v-subheader grey--text">Menu Two</div>
            <v-list-tile v-for="(menu) in menus" :key="menu.title">
              <v-list-tile-title>
                <v-icon class="mr-2">{{menu.icon}}</v-icon>
                <span>{{menu.title}}</span>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-menu offset-y left transition="slide-x-transition">
          <v-btn slot="activator" flat>
            <span>Dashboard</span>
            <v-icon right>expand_more</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile v-for="(link, index) in items" :key="index" route :to="link.route">
              <v-list-tile-title>
                <v-icon>{{link.icon}}</v-icon>
                <span style="margin-left: 10px">{{link.title}}</span>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn flat>
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-up">
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-menu left offset-y transition="slide-x-transition">
          <v-btn slot="activator" icon>
            <v-icon>apps</v-icon>
          </v-btn>
          <v-list>
            <div class="v-subheader grey--text">Menu One</div>
            <v-list-tile v-for="(menu, index) in menus" :key="index">
              <v-list-tile-title>
                <v-icon class="mr-2">{{menu.icon}}</v-icon>
                <span>{{menu.title}}</span>
              </v-list-tile-title>
            </v-list-tile>
            <v-divider></v-divider>
            <div class="v-subheader grey--text">Menu Two</div>
            <v-list-tile v-for="(menu) in menus" :key="menu.title">
              <v-list-tile-title>
                <v-icon class="mr-2">{{menu.icon}}</v-icon>
                <span>{{menu.title}}</span>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-menu left offset-y transition="slide-x-transition">
          <v-btn slot="activator" icon>
            <v-icon>dashboard</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(link, index) in items" :key="index" route :to="link.route">
              <v-list-tile-title>
                <v-icon>{{link.icon}}</v-icon>
                <span style="margin-left: 10px">{{link.title}}</span>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn icon>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="julianSlide" app>
      <v-layout column align-center text-xs-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/img/avatar-01.jpg" alt="padli yulian">
          </v-avatar>
          <p class="subheading grey--text mt-1">Padli Yulian</p>
        </v-flex>
        <v-flex>
          <Popup @projectAdd="snackbar = true"/>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" route :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: {
    Popup
  },
  data() {
    return {
      julianSlide: false,
      items: [
        { title: "Dashboard", icon: "dashboard", route: "/" },
        { title: "Project", icon: "folder", route: "/project" },
        { title: "Team", icon: "person", route: "/team" }
      ],
      menus: [
        { title: "Link One One", icon: "search" },
        { title: "Link One Two", icon: "apps" },
        { title: "Link One Three", icon: "refresh" }
      ],
      snackbar: false
    };
  }
};
</script>

