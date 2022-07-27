<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
      v-if="disable"
    >
      <template slot="progress">
        <v-progress-linear
          color="bg"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img :src="value.avatar" height="250"></v-img>

      <v-card-title>{{ value.petName }}</v-card-title>
      <v-card-subtitle class="d-flex justify-space-between"
        >Mi Humano: {{ value.ownerName }}
        <v-btn color="wsp pa-1 elevation-1" fab small @click="contact()">
          <v-icon> mdi-whatsapp </v-icon>
        </v-btn></v-card-subtitle
      >

      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="my-4 text-subtitle-1">
            <v-icon color="primary">mdi-star</v-icon>
            {{ value.petRaza }}
          </div>
          <div class="my-4 text-subtitle-1">
            <v-icon color="primary">mdi-cake-variant</v-icon>
            {{ value.petAge }}
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          <v-icon color="primary">mdi-map-marker</v-icon>
          {{ value.address }}
        </div>

        <div>
          {{ value.descripcion }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Intereses</v-card-title>

      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <v-chip>{{ value.intereses[0] }}</v-chip>

          <v-chip>{{ value.intereses[1] }}</v-chip>

          <v-chip>{{ value.intereses[2] }}</v-chip>
          <v-chip>{{ value.intereses[3] }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions class="d-flex justify-space-between">
        <v-btn @click="heart" class="mx-2" fab dark color="primary"
          ><v-icon dark> mdi-heart </v-icon>{{ contador }}</v-btn
        >
        <v-btn
          class="mx-2"
          fab
          dark
          color="secondary"
          to="TimeLine/PetDetailsView"
        >
          <v-icon dark> mdi-magnify </v-icon>
        </v-btn>
        <v-btn @click="close" class="mx-2" fab dark color="indigo">
          <v-icon dark> mdi-close </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    loading: false,
    disable: true,
    contador: 0
  }),
  props: ['value'],
  computed: {
    ...mapState('profiles', {
      profile: (state) => state.listado
      //contador: (state) => state.contador
    })
    //...mapGetters('profiles', ['heart'])
  },
  methods: {
    ...mapActions('profiles', ['getAllProfiles']),

    close() {
      this.disable = false
    },
    heart() {
      this.contador = this.contador + 1
    },
    contact() {
      window.open(
        'https://wa.me/5211234567890?text=Me%20interesa%20in%20el%20auto%20que%20vendes'
      )
    }
  },
  mounted() {
    this.getAllProfiles()
  }
}
</script>

<style></style>

<style lang="scss" scoped></style>
