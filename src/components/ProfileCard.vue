<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://media.istockphoto.com/photos/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-picture-id1213516345"
    ></v-img>
    <v-card-title>{{ petName }}</v-card-title>
    <v-card-text>
      <div>
        Soy un perro regalon, el mas chico de la camada. Me gusta salir diariamente al parque a
        jugar.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <div class="text-center">
        <v-menu transition="fab-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="primary" v-bind="attrs" v-on="on"> Dueño </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <p>Dueño: Andres V</p>
                <p>Santiago - Ñuñoa</p>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu transition="fab-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="primary" v-bind="attrs" v-on="on"> Mascota </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <p>Raza: Hermoso</p>
                <p>Edad: 8 años</p>
                <p>Hermanos: 2</p>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  props: ['petName', 'owner_name', 'address', 'pet_age', 'image'],
}
</script>

<style></style>

<style lang="scss" scoped></style>
