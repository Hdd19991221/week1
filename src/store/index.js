import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr:[]
  },
  mutations: {
    xnd(state,action){
      // state.arr=res.data
    }
  },
  actions: {
    //拿数据
    hdd(context) {
      axios.get('/api/login').then(res=>{
        console.log(res.data)
        // context=action
      })
    }
  },
  modules: {
  }
})
