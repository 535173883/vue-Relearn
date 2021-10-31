import Vue from "vue";
import Vuex from 'vuex';
import user from './user'
import others from './others'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules:{
    user,
    others
  }
})