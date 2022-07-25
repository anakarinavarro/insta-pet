<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <div class="tarjetas">
        <v-layout row wrap>
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
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import ProfileCard from '@/components/ProfileCard.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  computed: {
    ...mapState('auth', ['users']),
    ...mapState('profiles', {
      profiles: (state) => state.listado,
      loading: (state) => state.loading
    }),
    ...mapGetters('auth', ['activeLogin'])
  },
  components: { ProfileCard, NavBar },

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
