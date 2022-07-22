<template>
    <v-container fluid>
        <v-row class="mb-6" justify="center" no-gutters>
            <v-col cols="4">
                <v-form
                    ref="formUp"
                    v-model="valid"
                    lazy-validation
                    @submit.prevent="crearCuenta()"
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
                                right
                                outlined
                                block
                                color="secondary"
                                to="/LoginView"
                                >Iniciar Sesión</v-btn
                            >
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                block
                                :disabled="!valid"
                                color="primary"
                                class="mr-4"
                                @click="validate"
                                type="submit"
                            >
                                Registrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from "vuex"
export default {
    data: () => ({
        valid: true,
        credenciales: {
            password: "",
            email: "",
        },
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        show1: false,
        rules: {
            required: (value) => !!value || "Required.",
            min: (v) => v.length >= 8 || "Min 8 characters",
            emailMatch: () => `The email and password you entered don't match`,
        },
    }),
    methods: {
        ...mapActions("auth", ["createUserWithEmailAndPassword"]),

        validate() {
            this.$refs.formUp.validate()
        },
        async crearCuenta() {
            if (this.$refs.formUp.validate()) {
                await this.createUserWithEmailAndPassword(this.credenciales)
            }
            this.$router.push("/WelcomeView")
        },
    },
    mounted() {
        this.$store.dispatch("auth/subscribeToAuthStateChange")
    },
}
</script>
<style>
.bg {
    height: 100vh;
}
</style>
