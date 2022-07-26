<template>
  <v-app dark>
    <NavBar v-if="activeLogin" />
    <NavigationDrawer v-if="activeLogin" />
    <v-main>
      <v-container class="bg h-100 w-100" fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

import { mapGetters } from 'vuex'

export default {
  components: { NavBar, NavigationDrawer },
  name: 'App',
  computed: {
    ...mapGetters('auth', ['activeLogin'])
  }
}
</script>

<style>
.v-application--wrap {
  font-family: 'Montserrat', sans-serif;
}
</style>
