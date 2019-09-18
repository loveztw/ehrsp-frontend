// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'

// 使用axios
Vue.prototype.axios = axios
// 使用qs
Vue.prototype.qs = qs

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.baseURL = process.env.API_ROOT

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
