import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/serviceCenterMain/index.vue'),
  children: [
    {
      path: '/firstPage', // 首页
      name: 'FirstPage',
      component: () => import('../views/serviceCenterMain/firstPage/index.vue')
    },
    {
      path: '/individualService',  // 个人服务
      name: 'individualService',
      component: () => import('../views/serviceCenterMain/individualService/index.vue')
    },
    {
      path: '/enactment', // 法律法规
      name: 'enactment',
      component: () => import('../views/serviceCenterMain/enactment/index.vue')
    },
    {
      path: '/caseInfo', // 案件信息
      name: 'caseInfo',
      component: () => import('../views/serviceCenterMain/caseInfo/index.vue')
    },
    {
      path: '/informationLogin', // 信息登录
      name: 'informationLogin',
      component: () => import('../views/serviceCenterMain/informationLogin/index.vue')
    },
    {
      path: '/statisticsForm', // 统计报表
      name: 'statisticsForm',
      component: () => import('../views/serviceCenterMain/statisticsForm/index.vue')
    },
    {
      path: '/mapInfo', // 地图
      name: 'mapInfo',
      component: () => import('../views/serviceCenterMain/mapInfo/index.vue')
    },
    {
      path: '/statisticsAnalysis', // 统计分析
      name: 'statisticsAnalysis',
      component: () => import('../views/serviceCenterMain/statisticsAnalysis/index.vue')
    }
    
  ]
}]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router