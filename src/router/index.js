import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    redirect:"/all",
    component: () => import('../views/all/all.vue')
  },
  {
    //重定向
    path:'/all',
    component: () => import('../views/all/all.vue')
  },
  {
    path: '/ing',
    name: 'ing',
    component: () => import('../views/ing/ing.vue')
  },
  {
    path: '/out',
    name: 'out',
    component: () => import('../views/out/out.vue')
  },
  {
    path: '/ok',
    name: 'ok',
    component: () => import('../views/ok/ok.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
