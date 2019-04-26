import axios from 'axios'

const state = {
  ticketList: []
}

const getters = {

}

const mutations = {
  setTicketList (state, list) {
    state.ticketList = list
  }
}
const actions = {
  getTicketList ({ commit }) {
    axios.get('./json/ticket.json').then(res => {
      commit('setTicketList', res.data)
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
