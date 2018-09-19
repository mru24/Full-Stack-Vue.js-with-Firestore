// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// FIREBASE
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyB9_nG5JL99S1JBiNpw-6i1fhEFTfme46k",
  authDomain: "vue-app-19-09-2018.firebaseapp.com",
  databaseURL: "https://vue-app-19-09-2018.firebaseio.com",
  projectId: "vue-app-19-09-2018",
  storageBucket: "",
  messagingSenderId: "828090918021"
})

export const db = firebase.firestore()

// BOOTSTRAP
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
