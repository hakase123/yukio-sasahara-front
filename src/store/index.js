import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgNames:{},
    blobImg:{},
    menus:[]
  },
  getters: {
  },
  mutations: {
    setImgNames(atate,data){
      atate.imgNames = data
    },
    setBlobImg(atate,{menuName,imgData}){
      if(!(menuName in atate.blobImg)){
        atate.blobImg[menuName] = []
      }
      atate.blobImg[menuName].push(imgData)
    },
    setMenus(atate,data){
      atate.menus = data
    }
  },
  actions: {
    async initialRun({commit}){
      const res = await axios.get(process.env.VUE_APP_JSON_FILE)//TODO envファイルに移したい
      commit("setImgNames",res.data)
      const menus = Object.keys(res.data).filter(word => word !== "top")//メニューに表示させる項目の設定
      commit("setMenus",menus)
    }
  },
  modules: {
  }
})
