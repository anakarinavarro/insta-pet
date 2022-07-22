<template>
    <v-container fluid>
        <v-app-bar color="primary" dark>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
                <img
                    src="../../public/assets/img/InstaPet_logo.svg"
                    alt=""
                    style="width: 100px"
                />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text v-if="activeLogin">{{ user.email }}</v-btn>
            <v-btn icon @click="signOut()">
                <router-link to="/">
                    <v-icon color="white">mdi-login</v-icon></router-link
                >
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute left temporary>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6"
                        >INSTAPET</v-list-item-title
                    >
                    <v-list-item-subtitle>
                        Red Social Animal
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item link to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/TimeLineView">
                    <v-list-item-icon>
                        <v-icon> mdi-wall</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Time-Line</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/WelcomeView">
                    <v-list-item-icon>
                        <v-icon> mdi-human-greeting</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Welcome</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/AccountView">
                    <v-list-item-icon>
                        <v-icon> mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Mi Cuenta</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),
    computed: {
        ...mapState("auth", ["user"]),
        ...mapGetters("auth", ["activeLogin"]),
    },
    methods: {
        ...mapActions("auth", ["signOut"]),
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
