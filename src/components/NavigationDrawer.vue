<template>
  <v-navigation-drawer v-model="drawer" right app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">INSTAPET</v-list-item-title>
        <v-list-item-subtitle> Red Social Animal </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/TimeLineView">
        <v-list-item-icon>
          <v-icon> mdi-wall</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Time-Line</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
  })
}
</script>

<style></style>
