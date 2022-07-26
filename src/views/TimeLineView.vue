<template>
  <div class="tarjetas">
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 v-for="(profile, $index) in profiles" :key="$index">
        <ProfileCard :value="profile" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import ProfileCard from '@/components/ProfileCard.vue'

export default {
  components: { ProfileCard },
  computed: {
    ...mapState('auth', ['users']),
    ...mapState('profiles', {
      profiles: (state) => state.listado,
      loading: (state) => state.loading
    }),
    ...mapGetters('auth', ['activeLogin'])
  },

  methods: {
    ...mapActions('profiles', {
      getAllProfiles: 'getAllProfiles'
    })
  },
  mounted() {
    this.getAllProfiles()
  }
}
</script>
