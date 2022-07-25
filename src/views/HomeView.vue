<template>
  <v-container class="bg">
    <v-layout row style="align-items: center">
      <v-flex xs12 sm6>
        <v-card class="transparent d-flex justify-center mb-6" elevation="0">
          <v-card class="transparent" elevation="0">
            <h2 class="home-title">Encuentra a</h2>
            <h2 class="home-title"><span>tu amigo ideal</span></h2>
            <br />
            <v-btn
              to="/RegisterView"
              block
              color="primary"
              class="home-btn white--text"
              >Registrate</v-btn
            >
            <v-btn right outlined block color="primary" to="/LoginView"
              >Iniciar Sesión</v-btn
            >
          </v-card>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="transparent" elevation="0">
          <v-img
            width="100%"
            min-width="3"
            max-width="600"
            src="../../public/assets/img/home_img.png"
            position="center"
          ></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('auth/subscribeToAuthStateChange')
  }
}
</script>

<style>
.bg {
  height: 100vh;
  background-color: #7400fc;
}
.v-application--wrap {
  font-family: 'Montserrat', sans-serif;
  /*background-color: #7400fc;*/
}
.home-title {
  color: #ffffff;
  font-size: 50px;
}
.home-title span {
  color: #ffbd07;
}
</style>
