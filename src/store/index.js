import Vue from 'vue'
import Vuex from 'vuex'

import todos from './store-todos'
import auth from './store-auth'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      todos,
      auth
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
