import { createRouter, createWebHashHistory } from 'vue-router'
import Task1 from '../views/Task1.vue'

const routes = [
  {
    path: '/',
    name: 'Task1',
    component: Task1
  },
  {
    path: '/task2',
    name: 'Task2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Task2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
