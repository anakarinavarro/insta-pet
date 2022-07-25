<template>
  <div>
    <NavBar></NavBar>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <template>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="agregarMascota()"
            >
              <v-text-field
                v-model="data.ownerName"
                :counter="20"
                :rules="nameRules"
                label="Nombre de usuario"
                required
              ></v-text-field>
              <v-text-field
                v-model="data.petName"
                :counter="20"
                :rules="nameRules"
                label="Nombre de mascota"
                required
              ></v-text-field>
              <v-text-field
                v-model="data.petRaza"
                :counter="20"
                :rules="nameRules"
                label="Raza Mascota"
                required
              ></v-text-field>

              <v-select
                v-model="data.petType"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Tipo de Mascota"
                required
              ></v-select>
              <v-text-field
                v-model="data.petAge"
                :counter="10"
                :rules="nameRules"
                label="Edad Mascota"
                required
              ></v-text-field>
              <v-text-field
                v-model="data.address"
                :counter="20"
                :rules="nameRules"
                label="Cuidad"
                required
              ></v-text-field>
              <v-text-field
                v-model="data.descripcion"
                :counter="100"
                :rules="nameRules"
                label="Descripcion"
                required
              ></v-text-field>
              <v-text-field
                v-model="data.intereses"
                :counter="20"
                :rules="nameRules"
                label="Intereses1"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="validate"
                type="submit"
              >
                Crear Cuenta
              </v-btn>

              <v-btn color="primary" class="mr-4" @click="reset">
                Borrar Formulario
              </v-btn>
            </v-form>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },

  data: () => ({
    valid: true,
    data: {
      ownerName: '',
      petName: '',
      petRaza: '',
      petType: [],
      petAge: '',
      address: '',
      descripcion: '',
      intereses: []
    },

    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 100) || 'Name must be less than 20 characters'
    ],
    select: null,
    items: ['Perro', 'Gato', 'Conejo', 'Hamster']
  }),
  computed: {
    ...mapState('profiles', {
      data: (state) => state.listado,
      loading: (state) => state.loading
    })
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    ...mapActions('profiles', ['createAccount', 'getAllProfiles']),

    async agregarMascota() {
      if (this.$refs.form.validate()) {
        await this.createAccount({ ...this.data })
        await this.getAllProfiles()
      }
    }
  }
}
</script>

<style></style>
