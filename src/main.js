import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, NavBar } from 'vant'
import store from './store'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
