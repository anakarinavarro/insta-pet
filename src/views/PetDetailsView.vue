<template>
  <v-container style="background-color: #7400fc">
    <div>
      <h2 class="home-title">Amigos Cercanos</h2>
      <div id="map"></div>
      <FooterBar />
    </div>
  </v-container>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
//import store from "@/store"
import { mapState, mapActions } from 'vuex'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN

export default {
  data: () => ({
    map: null
  }),
  components: { FooterBar },
  methods: {
    ...mapActions('profiles', {
      getAllPoints: 'getAllProfiles'
    })
  },
  computed: {
    ...mapState('profiles', {
      points: (state) => state.listado
    })
  },
  async created() {
    await this.getAllPoints()
  },
  mounted() {
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 15, // starting zoom
      projection: 'globe' // display the map as a 3D globe
    })
    this.map.on('style.load', () => {
      this.map.setFog({}) // Set the default atmosphere style
    })

    this.map.addControl(
      new mapboxgl.MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    )

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
      })
    )
  }
}
</script>

<style>
#map {
  height: 80vh;
  width: 80vw;
}
.home-title {
  color: #ffffff;
  font-size: 50px;
}
</style>
