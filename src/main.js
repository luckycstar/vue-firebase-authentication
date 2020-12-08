import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './firebase/db'
import { firestorePlugin } from 'vuefire'

import 'firebase/firestore'

Vue.use(firestorePlugin)


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

