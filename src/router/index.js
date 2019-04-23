import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Cinema from '../views/index/Cinema.vue'
import Film from '../views/index/Film.vue'
import Home from '../views/index/Home.vue'
import City from '../views/city/index.vue'
import Ticket from '../views/ticket/index.vue'
import Coupon from '../views/coupon/index.vue'
import Card from '../views/card/index.vue'
import Help from '../views/card/help.vue'
import Login from '../views/login/index.vue'
import PhoneLogin from '../views/login/phone.vue'
import Register from '../views/login/register.vue'
import Search from '../views/search/index.vue'

import sousuo from '../views/search/search.vue'

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
        { path: '', redirect: '/films' }
      ]
    },
    { path: '/search', name: 'search', component: Search },
    { path: '/city', name: 'city', component: City },
    { path: '/ticket', name: 'ticket', component: Ticket },
    { path: '/coupon', name: 'coupon', component: Coupon },
    { path: '/card', name: 'card', component: Card },
    { path: '/help', name: 'help', component: Help },
    { path: '/login', name: 'login', component: Login },
    { path: '/phone_login', name: 'phone_login', component: PhoneLogin },
    { path: '/register', name: 'register', component: Register },
    { path: '/search', name: 'search', component: Search }
  ]
})

export default router
