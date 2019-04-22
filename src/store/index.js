import Vue from 'vue'
import Vuex from 'vuex'
import Cinema from './Cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Cinema
  }
})
