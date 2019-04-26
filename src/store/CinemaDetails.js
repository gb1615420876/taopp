import axios from 'axios'

const state = {
  cinemaId: [],
  cinemaDetails: [],
  filmShowList: []
}

const getters = {

}

const mutations = {
  setCinemaId (state, data) {
    state.cinemaId = data
  },
  setCinemaDetails (state, data) {
    state.cinemaDetails = data
  },
  setFilmShowList (state, data) {
    state.filmShowList = data
  }
}

const actions = {
  // 获取电影院详情
  getCinemaId ({ commit }, [id, num]) {
    axios.get('https://m.maizuo.com/gateway/', {
      params: {
        cinemaId: id,
        k: num
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15560742911821066134892"}',
        'X-Host': 'mall.film-ticket.cinema.info'
      }
    }).then(res => {
      if (res.data.status === 0) {
        commit('setCinemaId', res.data.data.cinema)
      }
    })
  },
  // 获取电影详情
  getCinemaDetails ({ commit }, [id, num]) {
    axios.get('https://m.maizuo.com/gateway/', {
      params: {
        cinemaId: id,
        k: num
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15560742911821066134892"}',
        'X-Host': 'mall.film-ticket.film.cinema-show-film'
      }
    }).then(res => {
      if (res.data.status === 0) {
        commit('setCinemaDetails', res.data.data.films)
      }
    })
  },
  getFilmShowList ({ commit }, [id, num, filmId, date]) {
    axios.get('https://m.maizuo.com/gateway/', {
      params: {
        filmId: filmId,
        cinemaId: id,
        date: date,
        k: num
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15560742911821066134892"}',
        'X-Host': 'mall.film-ticket.schedule.list'
      }
    }).then(res => {
      console.log(res)
      if (res.data.status === 0) {
        commit('setFilmShowList', res.data.data.schedules)
      }
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
