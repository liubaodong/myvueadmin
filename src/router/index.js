import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const index = () => import('@/views/index.vue')
const proprietor = () => import('@/views/proprietor-set/index.vue')
const house = () => import('@/views/house-set/index.vue')

const routes = [{
    path: '/',
    name: 'index',
    component: index,
    children: [{
        path: '/house',
        name: 'house',
        component: house
      },
      {
        path: '/proprietor',
        name: 'proprietor',
        component: proprietor
      },
    ]
  },
  {
    path: '**',
    directives: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
