import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Tab, Tabs, List, Search, NavBar, Icon } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(List)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Search)
  .use(VueAwesomeSwiper)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
