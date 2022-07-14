<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  data: () => ({}),
  components: { NavBar, FooterBar },
}
</script>
