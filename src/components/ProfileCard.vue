<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="value.image"></v-img>
    <v-card-title>{{ value.petName }}</v-card-title>
    <v-card-text>
      <div>
        {{ value.descripcion }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <div class="text-center">
        <v-menu transition="fab-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="primary" v-bind="attrs" v-on="on"> dueño </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <p>Dueño: {{ value.ownerName }}</p>
                <p>Santiago - {{ value.address }}</p>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu transition="fab-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="primary" v-bind="attrs" v-on="on">
              Mascota
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <p>Raza: Hermoso</p>
                <p>Edad: {{ value.petAge }}</p>
                <p>Hermanos: 2</p>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    loading: false
  }),
  props: ['value'],
  computed: {
    ...mapState('profiles', {
      profile: (state) => state.listado,
      loading: (state) => state.loading
    })
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

<style></style>

<style lang="scss" scoped></style>
