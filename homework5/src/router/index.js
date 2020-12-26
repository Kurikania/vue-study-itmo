import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task2',
    name: 'Task2',
    component: () => import(/* webpackChunkName: "task2" */ '../views/Task2.vue')
  },
  {
    path: '/task3',
    name: 'Task3',
    component: () => import(/* webpackChunkName: "task2" */ '../views/Task3.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
