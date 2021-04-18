import Vue from 'vue'
import VueRouter from 'vue-router'
import BeerProjectListing from '../views/beerProjectListing.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BeerProjectListing',
    component: BeerProjectListing
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/information.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
