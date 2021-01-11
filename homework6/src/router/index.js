import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productcategory',
    name: 'Products',
    props: true,
    component: () => import(/* webpackChunkName: "productcategory" */ '../views/Products.vue'),
  },
  {
    path: "/productcategory/:id",
    name: "productView",
    props: true,
    component: () =>
      import(/*webpackChunkName: "productView"*/ "../views/ProductView.vue")
  },
  {
    path: '/OrderForm',
    name: 'OrderForm',
    props: true,
    beforeEnter: guard,
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderForm.vue')
  },
  {
    path: '/OrderFinish',
    name: 'OrderFinish',
    props: true,
    beforeEnter: guard,
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderFinish.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    props: true,
    beforeEnter: guard,
    component: () => import(/* webpackChunkName: "order" */ '../views/Profile.vue')
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

function guard(to, from, next) {
  if(store.getters.user.id) {
    next()
  } else {
    next('/signin')
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
