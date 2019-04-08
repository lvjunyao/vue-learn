import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    }
  ]
})
