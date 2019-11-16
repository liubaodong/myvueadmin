/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-03 19:19:15
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-14 14:33:29
 * @FilePath: \myvueadmin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const index = () => import('@/views/index.vue')
const proprietor = () => import('@/views/proprietor-set/index.vue')
const house = () => import('@/views/house-set/index.vue')
const houseDetail = () => import('@/views/house-set/main.vue')
const pay = () => import('@/views/pay/index.vue')
const flow = () => import('@/views/flow/index.vue')

const routes = [{
    path: '/house',
    name: 'index',
    component: index,
    meta: {},
    children: [{
        path: '',
        name: 'house',
        component: house,
        children: [{
          path: 'main',
          name: 'h-main',
          component: houseDetail
        }]
      },
      {
        path: '/proprietor',
        name: 'proprietor',
        component: proprietor,
      },
      {
        path: '/pay/index',
        name: 'pay',
        component: pay
      },
      {
        path: 'flow',
        name: 'flow',
        component: flow
      },
    ]
  },

  {
    path: '',
    redirect: '/house'
  },
  {
    path: '**',
    redirect: '/'
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
