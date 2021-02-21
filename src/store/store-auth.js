import { Loading } from 'quasar'
import { firebaseAuth } from 'src/boot/firebase'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn (state, value) {
    state.loggedIn = value
  }
}

const actions = {
  // action permettant l'enregistrement d'un utilisateur
  registerUser ({ user }, payload) {
    console.log('registerUser: ', payload)
    // méthode d'enregistrement d'un utilisateur'
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
        this.setLoggedIn(state, true)
      })
      .catch(error => {
        console.log('error.message', error.message)
      })
  },
  // action permettant la connexion d'un utilisateur
  loginUser ({ user }, payload) {
    // méthode de connexion d'un utilisateur
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
        console.log(this.loggedIn)
      })
      .catch(error => {
        console.log('error.message', error.message)
      })
  },
  // action permettant la déconnexion d'un utilisateur
  logoutUser () {
    // méthode de déconnexion de firebase
    firebaseAuth.signOut()
  },
  // action permettant de vérifier l'état du state loggedIn d'un utilisateur
  handleAuthStateChange ({ commit }) {
    console.log('handleAuthStateChange')
    // méthode catchant le changement d'état d'un utilisateur
    firebaseAuth.onAuthStateChanged((user) => {
      Loading.hide()
      if (user) {
        // L'utilisateur est connecté
        commit('setLoggedIn', true)
        console.log('utilisateur connecté')
        this.$router.push('todolist')
      } else {
        // L'utilisateur n'est pas connecté
        commit('setLoggedIn', false)
        console.log('utilisateur non connecté')
        this.$router.replace('/')
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
