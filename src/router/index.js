import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/moloko',
    name: 'moloko',
    component: () => import(/* webpackChunkName: "about" */ '../views/MolokoView.vue')
  },
  {
    path: '/noski',
    name: 'noski',
    component: () => import(/* webpackChunkName: "about" */ '../views/NoskiView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
