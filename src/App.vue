<template>
  <v-app app dark>
    <NavBar />
    <NavigationDrawer />
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
export default {
  name: 'App',
  data: () => ({}),
  computed: {},
  async mounted() {
    await this.$store.dispatch('auth/subscribeToAuthStateChange')
  }
}
</script>

<style>
.v-application--wrap {
  font-family: 'Montserrat', sans-serif;
}
</style>
