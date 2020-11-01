import Vue from 'vue'
import App from './App.vue'
import './plugins'
import './components'
import router from './router'
import store from './store'
import i18n from './i18n'
import Vuetify from 'vuetify'
// import Fetcher from './api/fetcher'
import theme from './plugins/theme'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Sync router with store
import { sync } from 'vuex-router-sync'

import './registerServiceWorker'
// Sync store with router
sync(store, router)

// Fetcher.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       delete Fetcher.defaults.headers.common['Authorization']
//       localStorage.clear()
//     }
//     return Promise.reject(error)
//   }
// )

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
