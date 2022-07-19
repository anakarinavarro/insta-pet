import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#fa5374",
                secondary: "#f3bb2d",
                bg: "#7500fe",
            },
        },
    },
})
