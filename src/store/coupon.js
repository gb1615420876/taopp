import axios from 'axios'

const state = {
  CouponList: []
}
const geters ={

}

const mutations = {
  setCouponList (state, list) {
    state.CouponList = list
  }
}
const actions = {
  getCouponList ({ commit }) {
    axios.get('/json/coupon.json').then( res => {
      commit('setCouponList', res.data)
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
