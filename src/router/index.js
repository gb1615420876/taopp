import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Cinema from '../views/index/Cinema.vue'
import Film from '../views/index/Film.vue'
import Home from '../views/index/Home.vue'
import Search from '../views/search/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'films', name: 'films', component: Film, meta: { tabNumber: 0 } },
        { path: 'cinemas', name: 'cinemas', component: Cinema, meta: { tabNumber: 1 } },
        { path: 'home', name: 'homes', component: Home, meta: { tabNumber: 2 } },
        { path: '', redirect: '/films' },
        { path: 'search', name: 'search', component: Search }
      ]
    }
  ]
})

export default router
