<template>
  <v-app-bar color="primary" dark absolute fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <img
        src="../../public/assets/img/InstaPet_logo.svg"
        alt=""
        style="width: 100px"
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-newspaper-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>
