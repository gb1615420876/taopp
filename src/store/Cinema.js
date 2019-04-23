import axios from 'axios'
const state = {
  cinemaList: []
}
const geters = {

}
const mutations = {
  setCinameList (state, list) {
    state.cinemaList = list
  }
}
const actions = {
  getCinemaList ({ commit }) {
    axios.get('./json/cinemalist.json')
      .then(res => {
        let result = res.data
        commit('setCinameList', result)
        console.log(result)
      })
  }
}
export default {
  namespaced: true,
  state,
  geters,
  mutations,
  actions
}
