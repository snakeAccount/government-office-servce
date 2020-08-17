import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/serviceCenterMain/index.vue'),
  children: [
    {
      path: '/firstPage',
      name: 'FirstPage',
      component: () => import('../views/serviceCenterMain/firstPage/index.vue')
    }
  ]
}]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router