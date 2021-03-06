import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import city from './city'
import Cinema from './Cinema'
import CinemaDetails from './CinemaDetails'
import FilmDetails from './filmDetails'
import ticket from './ticket'
import Coupon from './coupon'
import Buy from './buy'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city,
    Cinema,
    CinemaDetails,
    FilmDetails,
    ticket,
    Coupon,
    Buy
  }
})
