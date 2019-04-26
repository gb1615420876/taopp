import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Tab, Tabs, List, Search, NavBar, Icon, Button } from 'vant'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
  .use(swiper)
  .use(swiperSlide)
  .use(Button)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
