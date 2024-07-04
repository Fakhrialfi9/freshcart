import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Deklarasikan state Anda sendiri di sini
  interface State {
    isAuthenticated: boolean
    // tambahkan lebih banyak state jika diperlukan
  }

  // Berikan pengetikan untuk $store
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
