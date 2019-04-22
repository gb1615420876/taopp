import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import city from './city'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city
  }
})
