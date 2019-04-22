import axios from 'axios'
import { Toast } from 'vant'

const state = {
  filmList: [],
  filmPageNum: 1,
  filmPageSize: 20,
  loading: false
}

const getters = {

}

const mutations = {
  setFilmList (state, list) {
    state.filmList.push(...list)
  }
}

const actions = {
  getFilmList ({ commit, state }) {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        pageNum: state.filmPageNum,
        pageSize: state.filmPageSize,
        type: 1,
        k: 613688
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555315207992137445531"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      let result = res.data
      if (result.status === 0) {
        console.log(1)
        commit('setFilmList', result.data.films)
      } else {
        Toast(result.msg)
      }
    })
  }
}

/* 暴露 */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
