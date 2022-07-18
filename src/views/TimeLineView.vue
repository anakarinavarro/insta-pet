<template>
    <v-container>
        <NavBar></NavBar>
        <div class="tarjetas">
            <v-layout row wrap>
                <h2 class="text-center">Conoce Nuestras Mascotas</h2>
                <v-flex
                    xs12
                    sm12
                    md4
                    v-for="(profile, $index) in profiles"
                    :key="$index"
                >
                    <ProfileCard :value="profile" />
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
import Store from "@/store"
import { mapState, mapActions } from "vuex"

import ProfileCard from "@/components/ProfileCard.vue"
import NavBar from "@/components/NavBar.vue"

export default {
    computed: {
        ...mapState("profiles", {
            profiles: (state) => state.listado,
            loading: (state) => state.loading,
        }),
    },
    components: { ProfileCard, NavBar },

    methods: {
        ...mapActions("profiles", {
            getAllProfiles: "getAllProfiles",
        }),
    },
    mounted() {
        this.getAllProfiles()
    },
    beforeRouteEnter(to, from, next) {
        Store.dispatch("profiles/getAllProfiles")
        next()
    },
}
</script>
