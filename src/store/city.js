import axios from 'axios'

const state = {
  cityList: [],
  trueCity: localStorage.getItem('trueCity') || '深圳',
  cityId: localStorage.getItem('trueCityId') || 440300
}

const getters = {
  newCityList (state) {
    let index = 0
    let flag = {}
    let result = []
    let list = state.cityList

    list.forEach(item => {
      // 1. 得到当前城市的首字母拼音
      let py = item.pinyin.substr(0, 1).toUpperCase()
      // 2. 判断当前这个城市的拼音是否出现过
      if (flag[py]) {
        // 存在
        result[flag[py] - 1].citys.push(item)
      } else {
        // 不存在
        flag[py] = ++index
        let obj = {
          name: py,
          citys: [item]
        }
        result.push(obj)
      }
    })

    result.sort((a, b) => {
      return a.name.charCodeAt() - b.name.charCodeAt()
    })

    return result
  },
  hotCitys (state) {
    return state.cityList.filter(item => {
      return item.isHot
    })
  },
  fiexdList (state, getters) {
    return getters.newCityList.map(item => {
      return item.name
    })
  }
}

const actions = {
  getCityList ({ commit }) {
    axios.get('https://m.maizuo.com/gateway?k=2661199', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555472144493921239107"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      let result = res.data
      if (result.status === 0) {
        commit('setCityList', result.data.cities)
      }
    })
  }
}

const mutations = {
  setCityList (state, list) {
    state.cityList = list
  },
  trueCity (state, arr) {
    localStorage.setItem('trueCity', arr[0])
    localStorage.setItem('trueCityId', arr[1])
    state.trueCity = arr[0]
    // let clickcity = state.cityList.filter(itme => {
    //   return itme.name == arr[0]
    // })
    state.cityId = arr[1]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
