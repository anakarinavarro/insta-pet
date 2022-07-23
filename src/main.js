import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "./plugins/Firebase.js"

import 'mapbox-gl/dist/mapbox-gl.css';

//import Axios from 'axios'
//import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app")
