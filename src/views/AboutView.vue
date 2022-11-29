<template>
  <div id="imgList">
    <div v-masonry item-selector=".item" class="masonry-container">
      <div v-masonry-tile class="item image" v-bind:key="index" v-for="(item, index) in imgNames()[$route.params.path]">
        <img 
          :src="imgUrl+item+'.light.webp'"
          @click="previewImg(item)"
        />
      </div>
    </div>

    <v-dialog
      v-model="dialog"
      :width="width"
    >
      <v-img 
      :src="src"
      :lazy-src="srcLight"
      v-bind:style="{ width: width + 'px', height: height + 'px' }"
      />
    </v-dialog>

    <v-dialog
      v-model="load"
      width="230px"
      style="overflow-y:visible;box-shadow:aliceblue"
    >
      <v-img 
        class="load"
        src="@/assets/04658D1E-4CC9-4F49-8B8C-DB128676EED6.png"
      />
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry'
Vue.use(VueMasonryPlugin)
export default {
  name: 'imgView',
  components: {
  },
  data() {
    return {
      dialog: false,
      load: false,
      src:"",
      srcLight:"",
      width:"",
      height:"",
      imgUrl:process.env.VUE_APP_URL+'webp/'
    }
  },
  methods:{
    ...mapState([
      'imgNames',
      'blobImg',
    ]),
    previewImg(src){
      this.load = true
      this.src = this.imgUrl+src+'.webp'
      this.srcLight = this.imgUrl+src+'.light.webp'

      var img = new Image()
      img.src = this.src
      img.onload = () => {
        console.log(img)
        if(img.width > img.height){
          //横長
          this.width = window.innerWidth*0.6
          this.height = (img.height/(img.width/this.width))
        }else{
          //縦長
          this.height = window.innerHeight*0.9
          this.width = (img.width/(img.height/this.height))
        }
        this.load = false
        this.dialog = true
      }
      
    }
  }
}
</script>
<style>
.v-dialog{
  overflow-y:visible !important;
  box-shadow:0px 0px 0px 0px rgb(0 0 0 / 0%) !important;
}
#imgPreview{
  position: relative;
  width: 90%;
  height: 80vh;
  border: 5px solid #00ffcc;
  margin: 0 auto;

}
#img {
  width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
}

#imgList{
  background-color: black;
  height: 100%;
}
.image img {
  display: block;
  width: 100%;
}
.load {
  animation: load 2.5s linear 0s 1;
  animation-iteration-count:infinite;
}

@keyframes load {
  0%   { transform: translate(0%, 0%); }
  5%   { transform: translate(10%, 0%) rotate(10deg); }
  25%  { transform: translate(20%, 0%) rotate(20deg); }
  30%  { transform: translate(-10%, 0%) rotate(-10deg); }
  35%  { transform: translate(-15%, 0%) rotate(-15deg); }
  45%  { transform: translate(10%, 0%) rotate(10deg); }
  50%  { transform: translate(15%, 0%) rotate(15deg); }
  60%  { transform: translate(-5%, 0%) rotate(-5deg); }
  65%  { transform: translate(-7%, 0%) rotate(-7deg); }
  75%  { transform: translate(0%, 0%) rotate(0deg); }
  100% { transform: translate(0%, 0%) rotate(0deg); }
}
@media screen and (min-width:768px) {
  .image {
    width: calc(100% / 3 - 20px);
    margin: 10px;
  }
}
@media screen and (min-width:1440px) {
  .image {
    width: calc(100% / 4 - 20px);
  }
}
</style>