import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import 'firebase/database'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions:{
    signUp ({commit}, payload) {
      firebase.database().ref('/signups/' + payload.first + payload.last).set({
        first: payload.first,
        last: payload.last,
        company: payload.company,
        email: payload.email,
        more: payload.more
      })
      .then(data => {
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
})
