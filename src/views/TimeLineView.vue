<template>
  <div class="tarjetas">
    <v-layout row wrap>
      <h2 class="text-center">Conoce Nuestras Mascotas</h2>
      <v-flex xs12 sm12 md4 v-for="(profile, $index) in profiles" :key="$index">
        <ProfileCard :pet-name="profile.pet_name" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Store from '@/store'
import { mapState } from 'vuex'

import ProfileCard from '@/components/ProfileCard.vue'

export default {
  computed: {
    ...mapState('profiles', {
      profiles: (state) => state.listado,
    }),
  },
  components: { ProfileCard },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('profiles/getAllProfiles')
    next()
  },
}
</script>
