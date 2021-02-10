import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country/:name',
    name: 'detailsCountry',
    component: () => import(/* webpackChunkName: "about" */ '../views/details_country.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
