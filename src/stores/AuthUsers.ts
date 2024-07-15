// AuthUsers.ts

import { createStore, Store, type Commit } from 'vuex'
import type { InjectionKey } from 'vue'

// State Interface
interface State {
  isAuthenticated: boolean
}

// Injection Key for Store
export const key: InjectionKey<Store<State>> = Symbol()

// Create Vuex Store
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
    login({ commit }: { commit: Commit }): void {
      // Logic for login
      commit('setAuthenticated', true)
    },
    logout({ commit }: { commit: Commit }): void {
      // Logic for logout
      commit('setAuthenticated', false)
    }
  },
  getters: {
    isAuthenticated: (state: State): boolean => state.isAuthenticated
  }
})

// Export Store
export default store
