<template>
  <v-container fluid>
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col cols="4">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="login()"
        >
          <v-text-field
            solo
            v-model="credenciales.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            solo
            v-model="credenciales.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Registra tu Contraseña"
            hint="Mínimo 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-row>
            <v-col cols="12">
              <v-btn
                :disabled="!valid"
                type="submit"
                right
                outlined
                block
                color="primary"
                :loading="loading"
                @click="validate"
                >Iniciar Sesión</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    valid: true,
    loading: false,
    credenciales: {
      password: '',
      email: ''
    },
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    show1: false,
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 6 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`
    }
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    ...mapActions('auth', ['signInWithEmailAndPassword']),
    async login() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          await this.signInWithEmailAndPassword(this.credenciales)
          this.valid = false
          this.credenciales = {
            email: '',
            password: ''
          }
        } catch (error) {
          console.error(error)
        } finally {
          this.loading = false
        }
      }
      this.$router.push('/TimeLineView')
    }
  },
  mounted() {
    this.$store.dispatch('auth/subscribeToAuthStateChange')
  }
}
</script>

<style></style>
