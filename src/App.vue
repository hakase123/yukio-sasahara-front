<template>
  <v-app>
    <v-app-bar
        color="black"
        dark
    >
      <v-app-bar-nav-icon class="menuIco" @click="open(menuFl)"></v-app-bar-nav-icon>
      <v-list-item to="/">
        <v-list-item-title class="text-h4 title">
          yukio sasahara
        </v-list-item-title>
      </v-list-item>  
    </v-app-bar>


    <v-navigation-drawer v-if="menuFl" permanent app v-model="menuFl" color="black" class="menu">
      <v-list nav>
        <v-list-item>
          <v-icon class="menuIco" color="white" @click="menuFl = !menuFl">mdi-dots-vertical</v-icon>
          <v-list-item-title class="text-h4 title">
            yukio sasahara
          </v-list-item-title>
        </v-list-item>
        <v-list-item v-for="menu in menus()" :key="menu" :to="'/'+menu" @click="menuFl = !menuFl">
          <v-list-item-content>
            <v-list-item-title>{{ menu }}</v-list-item-title>
          </v-list-item-content>
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
    menuFl: true,
    drawer: false,
    lodeFl: false
  }),
  mounted:async function(){
    if(window.innerWidth < 600){
      this.menuFl = !this.menuFl
    }
    await this.initialRun()
    this.lodeFl=true
  },
  methods:{
    ...mapActions([
      "initialRun"
    ]),
    ...mapState([
      'menus'
    ]),
    open(){
      console.log(this.menu)
      this.menuFl = !this.menuFl
      console.log(this.menu)
    }
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
  background-color: black;
}
.title {
  text-align: center;
  font-family: NameFont !important;
}
header{
  max-width: 256px;   
  display: none;
}
.menuIco{
  display: none;
}
@media screen and (max-width: 600px) {
  header{
    max-width: 100%;
    display:block;
  }
	.menu{
    width: 100% !important;
  }
  .menuIco{
    display: inline-flex;
  }
}

</style>