import { createStore } from 'vuex'

const store = createStore({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setAuthenticated(state, payload) {
      state.isAuthenticated = payload
    }
  },
  actions: {
    login({ commit }) {
      // Logic untuk login
      commit('setAuthenticated', true)
    },
    logout({ commit }) {
      // Logic untuk logout
      commit('setAuthenticated', false)
    }
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated
  }
})

export default store
