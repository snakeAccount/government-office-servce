import Vue from 'vue'
import VueRouter from 'vue-router'
import homeChildren from '@/router/home.js'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/serviceCenterMain/index.vue'),
  children: homeChildren
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router