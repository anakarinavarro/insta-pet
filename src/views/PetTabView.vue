<template>
    <main>
        <h1>mapa</h1>
        <div id="map"></div>
    </main>
</template>

<script>
import store from "@/store"
import { mapState, mapActions } from "vuex"
import mapboxgl from "mapbox-gl"
mapboxgl.accessToken =
    "pk.eyJ1IjoiYXZhc3F1ZXp2IiwiYSI6ImNsNXd5dWZtcTBidDUza3FoNzdyYW83YWoifQ.-N-afq464c8-FBUUQOy8mQ"

export default {
    data: () => ({
        map: null,
    }),
    methods: {
        ...mapActions("profiles", {
            getAllPoints: "getAllProfiles",
        }),
    },
    computed: {
        ...mapState("profiles", {
            points: (state) => state.listado,
        }),
    },
    async created() {
        await this.getAllPoints()
    },
    mounted() {
        this.map = new mapboxgl.Map({
            container: "map", // container ID
            style: "mapbox://styles/mapbox/streets-v11", // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 15, // starting zoom
            projection: "globe", // display the map as a 3D globe
        })
        this.map.on("style.load", () => {
            this.map.setFog({}) // Set the default atmosphere style
        })

        this.map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
            })
        )

        this.map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true,
            })
        )
    },
}
</script>

<style>
#map {
    height: 80vh;
    width: 80vw;
}
</style>
