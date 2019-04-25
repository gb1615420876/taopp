import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import city from './city'
import Cinema from './Cinema'
import FilmDetails from './filmDetails'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city,
    Cinema,
    FilmDetails
  }
})
