import axios from 'axios'

const state = {
  filmList: [],
  filmPageNum: 1,
  filmPageSize: 20,
  filmTotal: 20,
  loading: false,
  filmName: ''
}

const getters = {
  // 总的页数
  filmPageTotal (state) {
    return Math.ceil(state.filmTotal / state.filmPageSize)
  },

  // 是否有更多数据
  finished (state, getters) {
    return state.filmPageNum > getters.filmPageTotal
  }
}

const mutations = {
  // 追加影片集合
  setFilmList (state, list) {
    state.filmList.push(...list)
  },
  setFilmName (state, name) {
    state.filmName = name
  },
  // 下一页
  addPageNum (state) {
    state.filmPageNum += 1
  },

  // 设置总条数
  setFilmTotal (state, num) {
    state.filmTotal = num
  },

  // 设置请求状态
  setLoading (state, bol) {
    state.loading = bol
  },

  // 影片类型切换时清空数据
  clearData (state) {
    state.filmList = []
    state.filmPageNum = 1
  }
}

const actions = {
  getFilmList ({ commit, state }, curFilmType) {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        pageNum: state.filmPageNum,
        pageSize: state.filmPageSize,
        type: curFilmType,
        k: 613688
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555315207992137445531"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      let result = res.data
      if (result.status === 0) {
        commit('setFilmList', result.data.films)
        commit('setFilmTotal', result.data.total)
      }
      // 请求完成后，对 filmPageNum 做加一操作
      commit('addPageNum')
      // 将加载状态设置为 false
      commit('setLoading', false)
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
