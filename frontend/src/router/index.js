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
    meta: { guest: true },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { guest: true },
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
    meta: { login: true },
    component: () => import('../views/seller/vertified_seller.vue')
  },
  {
    path: '/manageseller',
    name: 'manageseller',
    meta: { login: true },
    component: () => import('../views/admin/manageseller.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { login: true },
    component: () => import('../views/login/profile.vue')
  },
  {
    path: '/addcar',
    name: 'addcar',
    meta: { login: true },
    component: () => import('../views/seller/addcar.vue')
  },
  {
    path: '/searchcar',
    name: 'searchcar',
    component: () => import('../views/main/searchcar.vue')
  },
  {
    path: '/detail/:carid',
    name: 'detail',
    component: () => import('../views/car/detail.vue')
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    meta: { guest: true },
    component: () => import('../views/login/forgetpassword.vue')
  },
]


const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user')

  if (to.meta.login && !isLoggedIn) {
    alert('Please login first!')
    next({ path: '/login' })
  }

  if (to.meta.guest && isLoggedIn) {
    alert("You've already logged in")
    next({ path: '/'})
  }

  next()
})

export default router
