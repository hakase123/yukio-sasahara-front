<template>
  <v-app>
    <v-app-bar
        color="black"
        dark
        max-width="256px"
        absolute
        style="z-index: 7;"
    >
      <v-app-bar-nav-icon @click.stop="menu = !menu"></v-app-bar-nav-icon>
      <v-list-item to="/">
        <v-list-item-title class="text-h4 title">
          yukio sasahara
        </v-list-item-title>
      </v-list-item>  
    </v-app-bar>

    
    <v-navigation-drawer :mini-variant="menu" permanent app v-model="menu" color="black">
      <v-list nav>
        <v-list-item>
          <v-icon color="white" @click.stop="menu = !menu">mdi-menu</v-icon>
          <v-list-item-title class="text-h4 title">
            yukio sasahara
          </v-list-item-title>
        </v-list-item>
        <v-list-item v-for="menu in menus()" :key="menu" :to="'/'+menu">
          <v-list-item-content>
            <v-list-item-title>{{ menu }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-twitter</v-icon>
            <v-icon>mdi-instagram </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view v-if="lodeFl"/>
    </v-content>

    <v-footer color="black" style="color: white;">
      <div class="flex-grow-1"></div>
      <div>&copy; 2022 Yukio Sasahara</div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    menu: true,
    drawer: false,
    lodeFl: false
  }),
  mounted:async function(){
    await this.initialRun()
    this.lodeFl=true
  },
  methods:{
    ...mapActions([
      "initialRun"
    ]),
    ...mapState([
      'menus'
    ])
  }
}
</script>
<style scoped>
a,
a:visited,
a:hover,
a:visited{
  color: black;
}
@font-face {
	font-family: 'NameFont';
	src: url(~@/assets/font/Holland.ttf);
}
@font-face {
	font-family: 'Font';
	src: url(~@/assets/font/OrkneyLightItalic.ttf);
}
* {
  font-family: Font;
  color: rgb(255, 255, 255);
}
.title {
  text-align: center;
  font-family: NameFont !important;
}
</style>