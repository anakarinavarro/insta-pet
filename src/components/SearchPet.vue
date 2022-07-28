<template>
  <v-toolbar dark color="secondary">
    <v-toolbar-title>Buscador por Tipo de Mascota</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Qué mascota estas buscando?"
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        { value: 'perro', text: 'Tipo de mascota' },
        { value: 'gato', text: 'Tipo de mascota' },
        { value: 'conejo', text: 'Tipo de mascota' },
        { value: 'Hamster', text: 'Tipo de mascota' },
        { value: 'loro', text: 'Tipo de mascota' }
      ]
    }
  },
  props: ['value'],
  computed: {
    ...mapState('profiles', {
      profile: (state) => state.listado
    })
  },

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    ...mapActions('profiles', ['getAllProfiles'])
  }
}
</script>

<style></style>
