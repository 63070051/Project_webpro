import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/main/about.vue')
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/main/question.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('../views/seller/seller.vue')
  },
  {
    path: '/vertified_seller',
    name: 'vertified_seller',
    component: () => import('../views/seller/vertified_seller.vue')
  },
  {
    path: '/manageseller',
    name: 'manageseller',
    component: () => import('../views/admin/manageseller.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/login/profile.vue')
  },
  {
    path: '/addcar',
    name: 'addcar',
    component: () => import('../views/seller/addcar.vue')
  },
]


const router = new VueRouter({
  routes
})

export default router
