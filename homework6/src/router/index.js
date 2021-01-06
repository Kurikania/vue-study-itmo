import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:productcategory',
    name: 'Products',
    props: true,
    component: () => import(/* webpackChunkName: "productcategory" */ '../views/Products.vue'),
    children: [
      {
        path: ":id",
        name: "productView",
        props: true,
        component: () =>
          import(/*webpackChunkName: "productView"*/ "../views/ProductView")
      }
    ]
  },
  {
    path: '/OrderForm',
    name: 'OrderForm',
    props: true,
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderForm.vue')
  },
  {
    path: '/delivery',
    name: 'DeliveryInfo',
    props: true,
    component: () => import(/* webpackChunkName: "delivery" */ '../views/Delivery.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    props: true,
    component: () => import(/* webpackChunkName: "delivery" */ '../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    props: true,
    component: () => import(/* webpackChunkName: "delivery" */ '../views/SignUp.vue')
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "pagenotfound" */ '../views/PageNotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/404"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
