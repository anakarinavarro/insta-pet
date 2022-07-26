<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <template>
            {{ profile }}
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="agregarMascota()"
            >
              <v-text-field
                v-model="profile.ownerName"
                :counter="20"
                :rules="nameRules"
                label="Nombre de usuario"
                required
              ></v-text-field>
              <v-text-field
                v-model="profile.petName"
                :counter="20"
                :rules="nameRules"
                label="Nombre de mascota"
                required
              ></v-text-field>
              <v-text-field
                v-model="profile.petRaza"
                :counter="20"
                :rules="nameRules"
                label="Raza Mascota"
                required
              ></v-text-field>

              <v-select
                v-model="profile.petType"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Tipo de Mascota"
                required
              ></v-select>
              <v-text-field
                v-model="profile.petAge"
                :counter="10"
                :rules="nameRules"
                label="Edad Mascota"
                required
              ></v-text-field>
              <v-text-field
                v-model="profile.address"
                :counter="20"
                :rules="nameRules"
                label="Cuidad"
                required
              ></v-text-field>
              <v-text-field
                v-model="profile.descripcion"
                :counter="100"
                :rules="nameRules"
                label="Descripcion"
                required
              ></v-text-field>
              <v-text-field
                v-model="profile.intereses"
                :counter="20"
                :rules="nameRules"
                label="Intereses1"
                required
              ></v-text-field>

              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
                @change="onFileChange($event)"
                :loading="uploading"
              ></v-file-input>

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
        <v-col cols="12" md="6">
          <PickPlaceMap @pick="profile.coords = $event" />
        </v-col>
        <v-col>
          <img
            :src="profile.avatar"
            v-if="profile.avatar"
            style="width: 300px; height: 300px"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import firebase from 'firebase'
import { mapActions } from 'vuex'
import PickPlaceMap from '@/components/PickPlaceMap.vue'

export default {
  components: { PickPlaceMap },
  data: () => ({
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        'Avatar size should be less than 2 MB!'
    ],
    valid: true,
    uploading: false,
    profile: {
      ownerName: '',
      petName: '',
      petRaza: '',
      petType: [],
      petAge: '',
      address: '',
      descripcion: '',
      intereses: [],
      coords: [],
      avatar: null
    },

    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 100) || 'Name must be less than 20 characters'
    ],
    select: null,
    items: ['Perro', 'Gato', 'Conejo', 'Hamster']
  }),
  methods: {
    async onFileChange(file) {
      if (!file) return
      this.uploading = true
      try {
        const storageRef = await firebase
          .storage()
          .ref()
          .child('fotos')
          .child(uuidv4())
        await storageRef.put(file)
        this.profile.avatar = await storageRef.getDownloadURL()
      } catch (e) {
        console.error(e)
      } finally {
        this.uploading = false
      }
    },
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
