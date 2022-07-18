<template>
  <div>
    <v-app-bar color="primary" dark absolute fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> InstaPet </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-newspaper-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" right>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>
