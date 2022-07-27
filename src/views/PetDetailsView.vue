<template>
  <v-container style="background-color: #7400fc">
    <div>
      <h2 class="home-title">Parques y Plazas</h2>
      <h4 class="home-sub-title">Marca tu lugar de paseo frecuente</h4>
      <div id="map"></div>
      <FooterBar />
    </div>
  </v-container>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
import { mapState, mapActions } from 'vuex'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN

export default {
  data: () => ({
    map: null
  }),
  components: { FooterBar },
  methods: {
    ...mapActions('places', {
      getAllPoints: 'getAll'
    })
  },
  computed: {
    ...mapState('places', {
      points: (state) => state.list
    })
  },
  async created() {
    await this.getAllPoints()
  },
  mounted() {
    this.marker = new mapboxgl.Marker()
    //console.log(this.points)
    const monument = [-70.6331, -33.4255]
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: monument,
      zoom: 10
    })
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Parque Urbano más grande de Latinoamérica'
    )

    // create DOM element for the marker
    const el = document.createElement('div')
    el.id = 'marker'

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat(monument)
      .setPopup(popup) // sets a popup on this marker
      .addTo(this.map)

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

    this.map.on('click', ($event) => {
      this.marker.setLngLat($event.lngLat)
      this.marker.addTo(this.map)
      this.$emit('pick', $event.lngLat)
    })
  }
}
</script>

<style>
#map {
  height: 60vh;
  width: 80vw;
}
.home-title {
  color: #f3bb2d;
  font-size: 50px;
  text-align: center;
}
.home-sub-title {
  color: #f3bb2d;
  text-align: center;
}
#marker {
  background-image: url('https://previews.123rf.com/images/erlucho/erlucho1703/erlucho170300221/76034061-telef%C3%A9rico-en-santiago-de-chile-cerro-san-crist%C3%B3bal.jpg?fj=1');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
}
</style>
