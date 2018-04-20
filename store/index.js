import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: false
    },
    mutations: {
      ACTIVE_LOADING (state) {
        state.loading = true
      },
      REMOVE_LOADING (state) {
        state.loading=false
      }
    },

  })
}

export default createStore
