import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Knight from './Knight.vue'

const routes = [
  { path: '/knight/:name', name: 'knight', component: Knight, props: true }
]

const router = new VueRouter({
  routes // short for routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
