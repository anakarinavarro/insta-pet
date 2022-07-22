<template class="bg">
    <v-app app>
        <v-container class="bg" fluid>
            <router-view />
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({}),
    computed: {},
    async mounted() {
        await this.$store.dispatch("auth/subscribeToAuthStateChange")
    },
}
</script>
