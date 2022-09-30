import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant'
import 'vant/lib/index.css'

import router from '@/router'
import store from '@/store'
import '@/styles/index.less'

Vue.use(Vant)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
