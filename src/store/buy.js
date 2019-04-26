import axios from 'axios'
const state = {
  cinemaList: [],
  arr: []
}
const getters = {

}
const mutations = {
  setCinameList (state, list) {
    state.cinemaList = list
  },
  setarr (state, arr) {
    state.arr = arr
  }
}
const actions = {
  //根据城市获取该城市的电影院列表
  getCinemaList ({ commit, rootState }) {
    let cityId = rootState.city.cityId
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: cityId,
        ticketFlag: 1,
        k: 2146279
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555072806618475291288"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
      .then(res => {
        let result = res.data
        commit('setCinameList', result.data.cinemas)
      })
  },
  searchCinema ({ commit, state }, value) {
    let arr = state.cinemaList.filter(item => {
      return item.name.indexOf(value) > -1
    })
    commit('setarr',arr)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
