import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.darken3, // #E53935
    secondary: colors.grey.darken2, // #FFCDD2
    accent: colors.purple.base, // #3F51B5
    error: colors.red.accent2,
    warning: colors.yellow.base,
    success: colors.green.base
  }
})
