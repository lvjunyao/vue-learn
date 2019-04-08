// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import TestSlot from '@/components/test-slot'
import TestProps from '@/components/test-props'
import TestPropsTwo from '@/components/test-props-two'
Vue.config.productionTip = false
// Vue.use({
//     HellWord
// })
Vue.prototype.$http = Axios
Vue.component(TestSlot.name, TestSlot)
Vue.component(TestProps.name, TestProps)
Vue.component(TestPropsTwo.name, TestPropsTwo)
// Vue.use(TestSlot, {name: 'v-touch'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
