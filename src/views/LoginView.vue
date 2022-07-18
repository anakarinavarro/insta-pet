<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col class="ml-auto mr-auto" cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-5">
                    <v-img
                      class="ml-auto mr-auto"
                      src="../../public/assets/img/instaPet_logo_color.svg"
                      max-width="200"
                    ></v-img>
                    <h4 class="text-center mlt-4 mt-5">Una red social para mascotas</h4>
                    <v-form>
                      <v-text-field
                        label="Correo"
                        name="Email"
                        type="text"
                        color="purple accent-1"
                      />
                      <v-text-field
                        id="password"
                        label="Contraseña"
                        type="password"
                        color="purple accent-1"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3 mb-10">
                    <v-btn class="btn-pink" color="#fc5374" rounded dark> Iniciar sesión</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="login-img d-flex align-center">
                  <v-card-text class="white--text">
                    <h4 class="text-center display-1">¿Aún no tienes cuenta?</h4>
                    <div class="text-center">
                      <v-btn class="btn-pink mt-5 mb-5" rounded outlined="" dark @click="step++"
                        >Registrate</v-btn
                      >
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="login-img d-flex align-center">
                  <v-card-text class="white--text">
                    <h1 class="text-center display-1">¡Bienvenido!</h1>
                    <div class="text-center">
                      <v-btn
                        class="btn-pink mt-5"
                        rounded
                        outlined
                        color="#fc5374;"
                        dark
                        @click="step--"
                        >Iniciar sesión</v-btn
                      >
                    </div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text--accent-3">Crear una cuenta</h1>

                    <v-form>
                      <v-text-field label="Name" name="Name" type="text" color="teal accent-3" />
                      <v-text-field label="Email" name="Email" type="text" color="teal accent-3" />
                      <v-text-field
                        label="Password"
                        name="Password"
                        type="password"
                        color="teal accent-3"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn class="btn-pink mt-5 mb-5" rounded color="#fc5374" dark
                      >Registrate</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    sourse: String,
  },
}
</script>

<style>
.login-img {
  background-image: url(../../public/assets/img/login_img.jpg);
  background-position: center;
  background-size: cover;
}
.btn-pink {
  background-color: #fc5374;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
}
</style>
