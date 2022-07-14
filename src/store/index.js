import Vue from 'vue'
import Vuex from 'vuex'
import { profilesModule } from './modules/profiles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { profiles: profilesModule },
})
