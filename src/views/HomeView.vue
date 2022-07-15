<template>
  <v-container style="background-color: #7400fc">
    <v-row>
      <v-col class="sm-6">
        <v-layout class="mt-5" justify-space-around align-center style="height: 600px">
          <v-flex xs12>
            <img src="../../public/assets/img/InstaPet_logo.svg" alt="" style="width: 150px" />
            <h2>Encuentra a tu</h2>
            <h2 class="text-lighten-5">amigo ideal</h2>
            <v-btn>Registrate</v-btn>
          </v-flex>
        </v-layout>
      </v-col>
      <v-col class="sm-6">
        <v-layout class="mt-5" justify-space-around align-center>
          <v-img
            width="100%"
            max-width="600"
            src="../../public/assets/img/home_img.png"
            position="center"
          ></v-img>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.v-application--wrap {
  font-family: 'Montserrat', sans-serif;
  background-color: #7400fc;
}
</style>
