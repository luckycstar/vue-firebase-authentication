import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhsUaUx4-653cLXyq9JZ26IN_Wu3mDhmg",
  authDomain: "childgame-60e8d.firebaseapp.com",
  databaseURL: "https://childgame-60e8d-default-rtdb.firebaseio.com",
  projectId: "childgame-60e8d",
  storageBucket: "childgame-60e8d.appspot.com",
  messagingSenderId: "951542475798",
  appId: "1:951542475798:web:8d398d431bc5e575099937",
  measurementId: "G-VCPSJSSF9S"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

