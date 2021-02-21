import { firebaseAuth } from 'src/boot/firebase'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn (state, value) {
    this.loggedIn = value
  }
}

const actions = {
  // action permettant l'enregistrement d'un utilisateur
  registerUser ({ user }, payload) {
    console.log('registerUser: ', payload)
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        console.log('error.message', error.message)
      })
  },
  loginUser ({ user }, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        console.log('error.message', error.message)
      })
  },
  handleAuthStateChange ({ commit }) {
    console.log('handleAuthStateChange')
    firebaseAuth.onAuthStateChanged(function (user) {
      if (user) {
        // L'utilisateur est connecté
        commit('setLoggedIn', true)
        console.log('utilisateur connecté')
      } else {
        // L'utilisateur n'est pas connecté
        commit('setLoggedIn', false)
        console.log('utilisateur non connecté')
      }
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
