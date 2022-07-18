//import Axios from 'axios'

import { DB } from "@/plugins/Firebase"

export const profilesModule = {
    namespaced: true,
    state: {
        listado: [],
        loading: false,
    },
    mutations: {
        SET_LISTADO(state, newListado) {
            state.listado = newListado
        },
        SET_LOADING(state, newLoading) {
            state.loading = newLoading
        },
    },
    actions: {
        async getAllProfiles({ commit }) {
            commit("SET_LOADING", true)
            try {
                const profile = []
                const profile$ = await DB.collection("profile").get()

                profile$.forEach((document) => {
                    profile.push({ ...document.data(), id: document.id })
                })
                commit("SET_LISTADO", profile)
            } catch (e) {
                console.error(e)
            } finally {
                commit("SET_LOADING", false)
            }
        },
    },
}
