import Vuex from '../dist/vuex.cjs.js'

declare module 'vuex' {
  export * from '@types/vuex'
}

const {
  version,
  Store,
  storeKey,
  createStore,
  install,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
} = Vuex

export {
  Vuex as default,
  version,
  Store,
  storeKey,
  createStore,
  install,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
}
