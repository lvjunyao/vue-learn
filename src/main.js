// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import TestSlot from '@/components/test-slot'
import TestProps from '@/components/test-props'
import TestPropsTwo from '@/components/test-props-two'
Vue.config.productionTip = false
// Vue.use({
//     HellWord
// })
Vue.component(TestSlot.name, TestSlot)
Vue.component(TestProps.name, TestProps)
Vue.component(TestPropsTwo.name, TestPropsTwo)
// Vue.use(TestSlot, {name: 'v-touch'})
/* eslint-disable no-new */

// 注册一个全局自定义指令 `v-focus`
Vue.directive('autofocus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
