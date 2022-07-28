<template>
  <div class="tarjetas">
    <v-container>
      <v-row>
        <v-col>
          <SearchPet />
        </v-col>
      </v-row>
    </v-container>
    <v-row wrap>
      <v-col
        class="pa-2"
        md="3"
        sm="4"
        xs="12"
        v-for="(profile, $index) in profiles"
        :key="$index"
      >
        <ProfileCard :value="profile" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import ProfileCard from '@/components/ProfileCard.vue'
import SearchPet from '@/components/SearchPet.vue'

export default {
  components: { ProfileCard, SearchPet },
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
