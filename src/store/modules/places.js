import Axios from 'axios'

export const placesModule = {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },

  mutations: {
    SET_LIST(state, newList) {
      state.list = newList
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading
    }
  },

  actions: {
    async getAll({ commit }) {
      try {
        const points = await Axios.get('/points.json')
        commit('SET_LIST', points.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
