<template>
  <v-app light>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-items>
        <v-flex><img height="60" src="http://www.nataleweb.com.ar/wordpress/wp-content/uploads/2016/09/logo-ajustado.png"/></v-flex>
        <v-btn flat>Home</v-btn>
        <v-btn flat>Horarios</v-btn>
        <v-btn flat>Actividad Fisica</v-btn>
        <v-btn flat>Talleres</v-btn>
        <v-btn flat>Profesionales</v-btn>
        <v-btn flat>Cursos</v-btn>
        <v-btn flat>Preguntas</v-btn>
        <v-btn flat>Contacto</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout>
        <nuxt />
      </v-layout>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
