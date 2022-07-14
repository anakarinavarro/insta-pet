import Axios from 'axios'
export const profilesModule = {
  namespaced: true,
  state: {
    listado: [],
  },
  mutations: {
    SET_LISTADO(state, newListado) {
      state.listado = newListado
    },
  },
  actions: {
    async getAllProfiles(context) {
      try {
        const profile = await Axios.get('/recent.json')
        console.log(typeof profile.data)
        context.commit('SET_LISTADO', profile.data)
      } catch (e) {
        console.error(e)
      }
    },
  },
}
