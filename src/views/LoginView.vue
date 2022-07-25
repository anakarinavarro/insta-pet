<template>
    <v-container fluid fill-height>
        <v-row class="mb-6" justify="center" no-gutters>
            <v-col cols="12" xs="12" md="4">
                <v-form
                    ref="formUp"
                    v-model="valid"
                    lazy-validation
                    @submit.prevent="login()"
                >
                    <v-row>
                        <v-col cols="12" align="center">
                            <v-btn color="#7400fc" elevation="0">
                                <router-link to="/">
                                    <v-img
                                        src="../../public/assets/img/InstaPet_logo.svg"
                                        width="200"
                                    ></v-img>
                                </router-link>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <p align="center" style="color: #ffffff">
                                Red social
                                <v-icon color="pink darken-1">mdi-heart</v-icon>
                                para mascotas
                            </p>
                        </v-col>
                    </v-row>
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
                                to="/TimeLineView"
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
            min: (v) => v.length >= 6 || "Min 8 characters",
            emailMatch: () => `The email and password you entered don't match`,
        },
    }),
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        ...mapActions("auth", ["signInWithEmailAndPassword"]),
        async login() {
            if (this.$refs.form.validate()) {
                await this.signInWithEmailAndPassword(this.credenciales)
                this.valid = false
                this.credenciales = {
                    email: "",
                    password: "",
                }
            }
            this.$router.push("/TimeLineView")
        },
    },
}
</script>

<style></style>
