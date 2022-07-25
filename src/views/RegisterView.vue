<template>
  <v-form
    ref="formUp"
    v-model="valid"
    lazy-validation
    @submit.prevent="crearCuenta()"
    class="d-contents"
  >
    <v-layout align-center h-100 justify-center no-gutters>
      <v-flex sm6>
        <v-card class="pa-5 pa-md-12 card mx-auto">
          <v-layout column h-100 ma-0 justify-center>
            <v-flex shrink>
              <v-text-field
                solo
                v-model="credenciales.email"
                :rules="emailRules"
                label="Correo electrónico"
                required
                dark
                :disabled="loading"
              ></v-text-field>
            </v-flex>
            <v-flex shrink>
              <v-text-field
                solo
                v-model="credenciales.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                persistent-hint
                hint="Mínimo 8 caracteres"
                counter
                @click:append="show1 = !show1"
                dark
                :disabled="loading"
              ></v-text-field>
            </v-flex>
            <v-flex shrink mt-6>
              <v-layout gap-4 row ma-0>
                <v-flex>
                  <v-btn
                    block
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    @click="validate"
                    type="submit"
                    :loading="loading"
                  >
                    Registrar
                  </v-btn>
                </v-flex>
                <v-flex>
                  <v-btn
                    block
                    color="secondary"
                    to="/LoginView"
                    :loading="loading"
                  >
                    Iniciar Sesión
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    loading: false,
    valid: true,
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
      min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`
    }
  }),
  methods: {
    ...mapActions('auth', ['createUserWithEmailAndPassword']),
    async crearCuenta() {
      if (this.$refs.formUp.validate()) {
        try {
          this.loading = true
          await this.createUserWithEmailAndPassword(this.credenciales)
        } catch (e) {
          console.error(e)
        } finally {
          this.loading = false
        }
      }
      this.$router.replace('/WelcomeView')
    },
    validate() {
      this.$refs.formUp.validate()
    }
  },
  mounted() {
    this.$store.dispatch('auth/subscribeToAuthStateChange')
  }
}
</script>

<style scoped>
.card {
  background-color: rgb(0, 0, 0, 0.5);
  height: 50vh;
  min-height: 350px;
  max-height: 500px;
  min-width: 300px;
  max-width: 500px;
}
</style>
