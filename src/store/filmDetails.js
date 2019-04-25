import axios from 'axios'
const state = {
  filmdetails: []
}
const getters = {

}
const mutations = {
  setfilmdetails (state, list) {
    state.filmdetails = list
  }
}
const actions = {
  //根据电影的id获取其详情
  getfilmdetails ({ commit }, payload) {
    axios.get('https://m.maizuo.com/gateway',{
      params: {
        filmId: payload.filmId,
        k: 2601573
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555072806618475291288"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
    .then(res => {
      let result =res.data
      if(result.status === 0){
        commit('setfilmdetails',result.data.film)
        console.log(result.data.film)
      } else {
        alert('错误')
      }
      payload.callback();
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
