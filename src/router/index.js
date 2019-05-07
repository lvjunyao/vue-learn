import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'

import directives from './directives' // 自定义指令模块
import render from './render' // 自定义指令模块
Vue.use(Router)

export default new Router({
  routes: [
    ...render,
    ...directives,
    {
      path: '/',
      name: 'home',
      component: Index
    }
  ]
})
