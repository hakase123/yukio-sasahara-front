<template>
    <div id="topBackGround" :style="printImgCSS">
      <v-img contain :lazy-src="srcLight" :src="printImg" id="img" :height="height"></v-img>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopPage',
  props: {
    imgList: {
      type: Object
    }
  },
  data() {
    return{
      printImg:"",
      printImgCSS:"background-image: url('');",
      srcLight:"",
      width:"",
      height:window.innerHeight-60
    }
  },
  mounted:function(){
    const top = this.imgNames()['top']
    var random = Math.floor( Math.random() * (top.length-1))
    this.printImg = process.env.VUE_APP_URL+top[random+1]
    this.srcLight = process.env.VUE_APP_URL+"webp/"+top[random+1]+".light.webp"
    this.printImgCSS = "background-image: url( "+this.srcLight+" );" 
  },
  methods:{
    ...mapState([
      'imgNames'
    ])
  }
}
</script>

<style scoped>
*{
  background-color: black;
}
#img {
   margin: 40% 0;
  max-width: 75%;  /* 横幅に合わせて自動縮小するが、拡大はしない */
  margin: auto;
  opacity: 1;
  z-index: 3;
  background-color:#00000000;
}
    #topBackGround {
  height: 100%;
  width: 100%;
  background-position: 50%;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  }

  
/*背景をぼかす */
#topBackGround:before{
  content: '';
  background: inherit;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(10px);
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
}

/* 背景を暗く*/
#topBackGround::after{
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
  background-color:black;
  opacity: 0.5;
}

</style>
