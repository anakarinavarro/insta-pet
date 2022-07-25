<template class="grey lighten-5">
    <v-container :key="align" class="grey lighten-5 container">
        <v-row>
            <v-col cols="12" xs="12" sm="2">
                <v-img
                    class="perfil-img mx-auto rounded-circle"
                    src="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge-1024x683.jpg"
                    width="100"
                    height="100"
                ></v-img>
            </v-col>
            <v-col cols="12" xs="12" sm="5">
                <h1>Rocky</h1>
                <p>Bulldog Francés</p>
                <p>
                    <font-awesome-icon
                        icon="fa-solid fa-location-dot"
                    />Valdivia
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure incidunt.
                </p>
            </v-col>
            <v-col cols="12" xs="12" sm="5">
                <h3>Intereses</h3>
                <ul>
                    <li class="intereses">Pasear</li>
                </ul>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="my-2 d-flex justify-center">
                    <v-btn Signup color="error" dark> Subir foto </v-btn>
                </div>
                <div class="my-2 d-flex justify-center">
                    <input type="file" />
                </div>
            </v-col>
        </v-row>
        <section>
            <v-row>
                <!-- <v-col
                    v-for="n in 9"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${
                            n * 5 + 10
                        }`"
                        :lazy-src="`https://picsum.photos/10/6?image=${
                            n * 5 + 10
                        }`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col> -->
                <v-col>
                    <v-img :src="datoImagen"></v-img>
                </v-col>
            </v-row>
        </section>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        file: null,
        datoImage: null,
    }),
}
</script>
<style>
.container {
    max-width: 960px;
}
.perfil-img {
    border: 2px solid tomato;
}
.intereses {
    list-style: none;
    display: inline-block;
    padding: 5px;
    border: 1px solid tomato;
    border-radius: 5px;
}
</style>
