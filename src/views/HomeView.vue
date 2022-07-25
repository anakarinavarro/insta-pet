<template>
    <v-container class="fill-height container">
        <v-row align="center" justify="center">
            <v-col cols="12" xs="12" sm="6">
                <div class="text-home">
                    <v-img
                        class="d-inline-block"
                        src="../../public/assets/img/InstaPet_logo.svg"
                        width="200"
                    ></v-img>
                    <br />
                    <h2 class="home-title my-5">
                        Encuentra a
                        <br />
                        <span>tu amigo ideal</span>
                    </h2>
                    <router-link to="/LoginView"
                        ><v-btn color="#fc5374" dark class="mr-4 mb-4"
                            >Iniciar Sesión
                        </v-btn>
                    </router-link>
                    <router-link to="/RegisterView">
                        <v-btn color="pink darken-1" outlined dark class="mb-4"
                            >Registrate
                        </v-btn>
                    </router-link>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="6">
                <v-img
                    width="100%"
                    min-width="3"
                    max-width="600"
                    src="../../public/assets/img/home_img.png"
                    position="center"
                ></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {}
</script>

<style>
.container {
    max-width: 960px;
}
.bg {
    height: 100%;
}
.v-application--wrap {
    font-family: "Montserrat", sans-serif;
    background-color: #7400fc;
}
.home-title {
    color: #ffffff;
    font-size: 40px;
    line-height: 40px;
}
.home-title span {
    color: #ffbd07;
}
</style>
