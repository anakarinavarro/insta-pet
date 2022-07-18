<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" sm="6">
                <h1>INSTAPESSSST</h1>
                <h2>Encuentra A Tu</h2>
                <h2 class="text-lighten-5">Amigo Ideal</h2>
                <v-btn color="primary" class="mr-4" to="/RegisterView">
                    Registrar
                </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
                <v-layout justify-end wrap>
                    <v-btn right outlined to="/LoginView">Iniciar Sesión</v-btn>
                </v-layout>
                <p>Aca va la imagen del perrito</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {}
</script>

<style>
.bg {
    height: 100vh;
}
</style>
