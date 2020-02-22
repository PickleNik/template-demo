import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase/app'
import { store } from './store'


Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  created() {
    AOS.init(),
    firebase.initializeApp({
    apiKey: 'AIzaSyB15hm6gYLflNWSDT2iTLqmd5QVjvplyXY',
    authDomain: 'savvy-enly.firebaseapp.com',
    databaseURL: 'https://savvy-enly.firebaseio.com',
    projectId: 'savvy-enly',
    storageBucket: 'savvy-enly.appspot.com',
    messagingSenderId: '68941532280'
    })
  }
}).$mount('#app')
