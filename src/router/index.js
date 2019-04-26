import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index/Index.vue'),
      children: [
        { path: 'films', name: 'films', component: () => import('../views/index/Film.vue'), meta: { tabNumber: 0 } },
        { path: 'cinemas', name: 'cinemas', component: () => import('../views/index/Cinema.vue'), meta: { tabNumber: 1 } },
        { path: 'home', name: 'homes', component: () => import('../views/index/Home.vue'), meta: { tabNumber: 2 } },
        { path: '', redirect: '/films' }
      ]
    },
    { path: '/pay', name: 'pay', component: () => import('../views/pay/index.vue') },
    { path: '/city', name: 'city', component: () => import('../views/city/index.vue') },
    { path: '/ticket', name: 'ticket', component: () => import('../views/ticket/index.vue') },
    { path: '/coupon', name: 'coupon', component: () => import('../views/coupon/index.vue') },
    { path: '/card', name: 'card', component: () => import('../views/card/index.vue') },
    { path: '/help', name: 'help', component: () => import('../views/card/help.vue') },
    { path: '/login', name: 'login', component: () => import('../views/login/index.vue') },
    { path: '/phone_login', name: 'phone_login', component: () => import('../views/login/phone.vue') },
    { path: '/register', name: 'register', component: () => import('../views/login/register.vue') },
    { path: '/cinemasDetails/:id', name: 'cinemasDetails', component: () => import('../views/details/cinemasDetails.vue') },
    { path: '/filmDetails/:id', name: 'filmDetails', component: () => import('../views/filmDetails/index.vue') },
    { path: '/problem', name: 'problem', component: () => import('../components/problem.vue') },
    { path: '/addcoupon', name: 'addcoupon', component: () => import('../components/addcoupon.vue') },
    { path: '/buy', name: 'buy', component: () => import('../views/buy/index.vue') },
    { path: '/addcard', name: 'addcard', component: () => import('../components/addcard.vue') },
    { path: '/search', name: 'search', component: () => import('../views/search/index.vue') }
  ]
})

export default router
